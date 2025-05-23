import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Received prompt:", prompt);

    let attempts = 0;
    const maxAttempts = 2;
    
    while (attempts < maxAttempts) {
      try {
        console.log(`Attempt ${attempts + 1} to generate image...`);
        
        const response = await openai.images.generate({
          model: 'gpt-image-1',
          prompt,
          n: 1,
          background: 'transparent',
          size: '1024x1024',
          output_format: 'png',
          quality: 'auto',
        });

        const image = response.data[0].b64_json;
        return res.status(200).json({ photo: image });
        
      } catch (apiError) {
        attempts++;
        console.error(`Attempt ${attempts} failed:`, apiError);
        
        // If this is our last attempt, throw the error to be handled by the outer catch
        if (attempts >= maxAttempts) {
          throw apiError;
        }
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
      }
    }
  } catch (error) {
    console.error('DALL-E API Error:', error);
    
    // Extract meaningful error information
    let errorMessage = "Something went wrong generating the image";
    let statusCode = 500;
    
    if (error.status === 403) {
      statusCode = 403;
      errorMessage = "Access denied: Your API key may not have permission for image generation or your account may have billing issues";
    } else if (error.status === 400) {
      statusCode = 400;
      errorMessage = "The prompt may violate content policies or contains invalid parameters";
    } else if (error.status === 429) {
      statusCode = 429;
      errorMessage = "Rate limit exceeded: Too many requests or quota exceeded";
    }
    
    // Send detailed error to client
    res.status(statusCode).json({ 
      message: errorMessage,
      error: {
        type: error.type || 'unknown_error',
        code: error.code || null,
        param: error.param || null
      }
    });
  }
})

export default router;
