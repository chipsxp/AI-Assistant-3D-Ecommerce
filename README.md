# AI-Powered 3D Apparel Customization Platform

An innovative platform that combines 3D visualization technology with AI-generated designs to revolutionize apparel customization. This application enables users to create unique, personalized clothing items in a real-time 3D environment with intuitive tools for color selection, logo placement, and AI-assisted design generation.

![3D Customization Platform](client/public/threejs.png)

## 📊 Research & Problem Statement

### Market Analysis
The e-commerce market has seen a significant shift toward personalization, with studies showing that 36% of consumers expect personalized products. However, traditional 2D preview systems fail to provide accurate representations of the final product, leading to customer dissatisfaction and high return rates.

### Technical Challenge
Creating an intuitive 3D customization interface that:
- Maintains high performance on various devices
- Provides realistic visualization without requiring specialized hardware
- Integrates seamlessly with AI design generation
- Delivers a low learning curve for non-technical users

### Innovation Approach
Our solution bridges these gaps by implementing:
- WebGL-based 3D rendering optimized for modern browsers
- Reactive state management for real-time customization
- Integration with advanced AI image generation
- A component-based architecture that simplifies future enhancements

## 🏗️ Solution Architecture & Development

### Architectural Overview
```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   Client Layer  │      │  Application    │      │   Server Layer  │
│   (React/Vite)  │◄────►│  (Three.js/UI)  │◄────►│  (Express/API)  │
└─────────────────┘      └─────────────────┘      └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ UI Components   │      │ 3D Rendering    │      │ AI Integration  │
│ (Framer/Tailwind)│      │ (Drei/Fiber)    │      │ (OpenAI/DALL-E) │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### Development Methodology
- **Component-Based Architecture**: Modular components that encapsulate specific functionality
- **State Management**: Centralized state using Valtio for predictable data flow
- **3D Pipeline**: Three.js with React integration via R3F and Drei for advanced 3D capabilities
- **AI Integration**: Error-resilient OpenAI API implementation with retry logic and graceful fallbacks

### Performance Considerations
- Optimized 3D models with reduced polygon counts
- Progressive loading and rendering
- Memoization of expensive operations
- Client-side caching for improved responsiveness

## ⚙️ Technical Stack

### Frontend Technologies
- **React 19**: Core UI library using the latest features for improved performance
- **Vite**: Modern build tool for fast development and optimized production builds
- **Three.js**: JavaScript 3D library for WebGL rendering
- **React Three Fiber/Drei**: React components for Three.js integration
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth, physics-based transitions
- **Valtio**: Proxy-based state management for reactive updates

### Backend Technologies
- **Node.js**: JavaScript runtime for server-side execution
- **Express.js**: Web framework for RESTful API development
- **OpenAI API**: Integration with DALL-E for AI-generated designs
- **CORS**: Cross-Origin Resource Sharing support for secure API access

### Development Tools
- **ESLint/Prettier**: Code quality and formatting tools
- **Vite Hot Module Replacement**: For rapid development iterations
- **Responsive Design Components**: Adaptable UI for various device sizes

## 📋 Features

### Core Functionality
- **Interactive 3D Model Viewing**: 360° rotation and zoom capabilities
- **Real-time Color Customization**: Dynamic color application with immediate feedback
- **Logo Upload & Placement**: Precise positioning of custom logos and designs
- **AI-Generated Designs**: Text-to-image design generation powered by DALL-E
- **Texture Application**: Apply complex patterns and textures to the entire garment
- **Dynamic Theme Adaptation**: UI theme adjusts based on selected product colors
- **Download Capabilities**: Export customized designs as high-resolution images
- **Responsive Interface**: Optimized for desktop and mobile devices

### Technical Features
- **Realistic Lighting & Shadows**: Advanced lighting model for accurate visualization
- **Physically-Based Rendering**: Materials that accurately represent real-world fabrics
- **Error-Resilient AI Integration**: Robust error handling with user-friendly fallbacks
- **Optimized Asset Loading**: Efficient loading of 3D models and textures

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) (v8.0.0 or higher)
- Modern web browser with WebGL support
- OpenAI API key for AI design generation

### Development Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/3D-Ecommerce-AI-Assist.git
   cd 3D-Ecommerce-AI-Assist
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Configure environment variables**
   Create a `.env` file in the server directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. **Start the development servers**

   In one terminal, start the backend server:
   ```bash
   cd server
   npm start
   ```

   In another terminal, start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:5173` to access the application.

### Production Deployment

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy the backend**
   ```bash
   cd ../server
   npm start
   ```

3. **Serve the static files**
   Configure your production server to serve the static files from the `client/dist` directory and proxy API requests to the backend server.

## 📱 Usage Guide

### User Journey

1. **Home Screen**
   - Start at the landing page showcasing the 3D model
   - Click "Customize It" to enter the customization mode

2. **Customization Interface**
   - **Left Panel**: Access editing tools (color picker, file upload, AI generator)
   - **Center Stage**: Interact with the 3D model (rotate, zoom)
   - **Bottom Bar**: Toggle between logo and full-texture modes
   - **Top Right**: Download your design or return to the home screen

### Feature Walkthroughs

#### Color Customization
1. Click the color picker icon in the left toolbar
2. Select your desired color from the color palette
3. Watch as the 3D model updates in real-time with your selection
4. The application theme also adapts to complement your color choice

#### Logo Upload
1. Click the file upload icon in the left toolbar
2. Upload an image file (PNG with transparency recommended)
3. Select "Logo" to apply it to the shirt
4. Toggle the logo visibility using the t-shirt icon in the bottom bar

#### AI-Generated Designs
1. Click the AI icon in the left toolbar
2. Enter a descriptive prompt (e.g., "abstract geometric pattern with blue and gold")
3. Click "Logo" for a small design or "Full" for an all-over texture
4. Wait for the AI to generate your custom design
5. The design will automatically apply to your 3D model

#### Downloading Your Design
1. Click the download icon in the top-right corner
2. A high-resolution image of your current view will be saved to your device
3. This image captures the exact perspective, lighting, and customizations

## 🔮 Future Enhancements

### Dashboard Integration
- User profile management
- Design history and saved designs
- Design sharing and social features
- Analytics dashboard for usage metrics

### Database Implementation
- MongoDB/Firebase integration for user data storage
- Design persistence across sessions
- User authentication and profile management
- Usage analytics and behavioral tracking

### Security & Authentication
- JWT-based authentication system
- Role-based access control
- Secure API endpoints with rate limiting
- GDPR-compliant data handling

### Advanced Features
- Multiple product types (hoodies, hats, shoes)
- Material simulation (cotton, polyester, denim)
- Advanced customization (sleeves, collars, pockets)
- AR try-on capabilities
- Collaborative design sessions
- Marketplace integration for purchasing designs

## 🔧 Technical Documentation

### Component Hierarchy
```
App
├── Home (Landing Page)
├── Canvas (3D Rendering Container)
│   ├── CameraRig (Handles camera positioning/movement)
│   ├── Backdrop (Environment and lighting)
│   └── Shirt (3D model with material setup)
└── Customizer (Main editing interface)
    ├── EditorTabs (Tool selection)
    │   ├── ColorPicker (Color selection tool)
    │   ├── FilePicker (Image upload tool)
    │   └── AIPicker (AI generation tool)
    └── FilterTabs (Toggle between logo/full texture)
```

### State Management
The application uses Valtio for proxy-based state management:
- `intro`: Controls whether to show the landing page or customizer
- `color`: Current selected color in hex format
- `isLogoTexture`: Toggle for logo visibility
- `isFullTexture`: Toggle for full texture visibility
- `logoDecal`: Source for the logo texture
- `fullDecal`: Source for the full-body texture

### API Integration
The backend server provides an API endpoint for AI image generation:
- **Endpoint**: `/api/v1/dalle`
- **Method**: POST
- **Payload**: `{ prompt: "description of desired image" }`
- **Response**: `{ photo: "base64_encoded_image" }`
- **Error Handling**: Includes retry logic and specific error messages

### Code Snippets

#### Shader Material Setup
```jsx
// Applying textures to the 3D model
const Shirt = () => {
  const snap = useSnapshot(state);
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <mesh castShadow>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.T_Shirt_male.geometry}>
          <meshStandardMaterial
            map={snap.isFullTexture && fullTexture}
            color={snap.color}
            roughness={0.9}
            metalness={0.05}
          />
          {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
      </group>
    </mesh>
  );
};
```

#### DALL-E API Integration
```javascript
// AI image generation with robust error handling
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    let attempts = 0;
    const maxAttempts = 2;
    
    while (attempts < maxAttempts) {
      try {
        const response = await openai.images.generate({
          model: 'gpt-image-1',
          prompt,
          n: 1,
          background: 'transparent',
          size: '1024x1024',
          output_format: 'png',
        });

        const image = response.data[0].b64_json;
        return res.status(200).json({ photo: image });
        
      } catch (apiError) {
        attempts++;
        if (attempts >= maxAttempts) throw apiError;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
      }
    }
  } catch (error) {
    console.error('DALL-E API Error:', error);
    
    let errorMessage = "Something went wrong generating the image";
    let statusCode = 500;
    
    // Provide useful error messages based on error type
    if (error.status === 403) {
      statusCode = 403;
      errorMessage = "Access denied: API key permission issue";
    } else if (error.status === 400) {
      statusCode = 400;
      errorMessage = "Invalid prompt or parameters";
    }
    
    res.status(statusCode).json({ 
      message: errorMessage,
      error: {
        type: error.type || 'unknown_error',
        code: error.code || null
      }
    });
  }
})
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [Your Name](https://github.com/chipsxp) - Project Lead & Developer

## 🔗 Additional Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [OpenAI API Documentation](https://platform.openai.com/docs/)
