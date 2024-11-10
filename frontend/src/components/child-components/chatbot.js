import React, { useState, useEffect, useRef } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls if the chatbot is open
  const [showCloseConfirm, setShowCloseConfirm] = useState(false); // Confirms closing the chat
  const [messages, setMessages] = useState([]); // Holds all messages (user + bot)
  const [input, setInput] = useState(""); // Tracks user input
  const [isBotTyping, setIsBotTyping] = useState(false); // Tracks bot typing state
  const messagesEndRef = useRef(null); // Ref to handle auto-scrolling
  const [hasGreeted, setHasGreeted] = useState(false); // State to ensure greeting is shown once

  // Close confirmation: clear messages and close the chat
  const handleConfirmClose = () => {
    setMessages([]); // Clear all previous messages
    setIsOpen(false); // Close the chat window
    setShowCloseConfirm(false); // Hide the close confirmation dialog
  };

  // Cancel close action
  const cancelClose = () => {
    setShowCloseConfirm(false); // Close the confirmation dialog without closing the chat
  };


  // Function to get bot response based on message content
  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
  
    // **Workout & Exercise Related**
    if (lowerCaseMessage.includes("gym") || lowerCaseMessage.includes("workout")) {
      return "Working out regularly can boost your physical and mental health 💪. Do you need help with workout routines or tips?";
    } else if (lowerCaseMessage.includes("exercise")) {
      return "Exercise is great for staying fit! You could try cardio 🏃, strength training 🏋️, or yoga 🧘. Want recommendations for a specific exercise?";
    } else if (lowerCaseMessage.includes("cardio")) {
      return "Cardio exercises like running, cycling, or swimming help improve your cardiovascular health 🏃‍♀️. What kind of cardio do you prefer?";
    } else if (lowerCaseMessage.includes("strength training") || lowerCaseMessage.includes("weight training")) {
      return "Strength training helps build muscle and increases metabolism 💪. Looking for exercises to target a specific muscle group?";
    } else if (lowerCaseMessage.includes("yoga")) {
      return "Yoga can improve flexibility, strength, and mindfulness 🧘. Would you like a list of yoga poses or a beginners' guide?";
    } else if (lowerCaseMessage.includes("stretching")) {
      return "Stretching helps prevent injuries and improves flexibility. Try these stretches: hamstring stretch, quad stretch, shoulder stretch 🧘‍♀️.";
    } else if (lowerCaseMessage.includes("pilates")) {
      return "Pilates focuses on core strength, flexibility, and overall body awareness. Would you like to learn some basic Pilates exercises?";
    } else if (lowerCaseMessage.includes("hiit")) {
      return "High-intensity interval training (HIIT) is a great way to burn fat quickly. Want some beginner-friendly HIIT exercises?";
    } else if (lowerCaseMessage.includes("abs") || lowerCaseMessage.includes("abdominal")) {
      return "Abs exercises like crunches, leg raises, and planks are great for strengthening your core. Want a full ab workout plan?";
    } else if (lowerCaseMessage.includes("glutes") || lowerCaseMessage.includes("buttocks")) {
      return "Squats, lunges, and hip thrusts are excellent for building glutes 🍑. Interested in a glute-focused workout plan?";
    }  else if (lowerCaseMessage.includes("full body")) {
      return "A full-body workout targets all your major muscle groups. Would you like a simple full-body workout routine?";
    }
  
    // **Nutrition & Food-Related**
    else if (lowerCaseMessage.includes("nutrition") || lowerCaseMessage.includes("diet")) {
      return "Good nutrition is essential for overall health! A balanced diet includes proteins, carbs, healthy fats, and lots of vegetables 🥦. Want help with meal planning?";
    } else if (lowerCaseMessage.includes("protein")) {
      return "Protein is vital for muscle repair and growth 🍗. Common protein sources include chicken, fish, eggs, beans, and tofu. Looking for high-protein recipes?";
    } else if (lowerCaseMessage.includes("carbs") || lowerCaseMessage.includes("carbohydrates")) {
      return "Carbs are the body's primary energy source 🍞. Whole grains, fruits, and vegetables are great carb choices. Do you need help with carb-rich meal ideas?";
    } else if (lowerCaseMessage.includes("healthy fats") || lowerCaseMessage.includes("fat")) {
      return "Healthy fats like those found in avocados, nuts, and olive oil are great for brain health 🥑. Want to know more about healthy fats?";
    } else if (lowerCaseMessage.includes("vegetables") || lowerCaseMessage.includes("greens")) {
      return "Veggies are packed with essential nutrients and fiber 🥦. Try incorporating a variety of colorful vegetables into your meals for maximum benefits!";
    } else if (lowerCaseMessage.includes("fruit")) {
      return "Fruits like berries, oranges, and apples are great sources of vitamins and antioxidants 🍎. Want fruit-based snack or smoothie ideas?";
    } else if (lowerCaseMessage.includes("meal prep")) {
      return "Meal prepping saves time and helps ensure you're eating healthy throughout the week 🍱. Need help with meal prep ideas?";
    } else if (lowerCaseMessage.includes("snacks")) {
      return "Healthy snacks like almonds, yogurt, and veggies with hummus are great options 🍏. Looking for snack suggestions?";
    } else if (lowerCaseMessage.includes("calories")) {
      return "Tracking calories can help with fitness goals. You can use apps like MyFitnessPal to track intake 📱. Want tips on how to track calories?";
    } else if (lowerCaseMessage.includes("intermittent fasting")) {
      return "Intermittent fasting is an eating pattern that alternates between eating and fasting periods. Want to know more about its benefits?";
    } else if (lowerCaseMessage.includes("vegan")) {
      return "A vegan diet focuses on plant-based foods. Do you need help with vegan meal ideas or tips for getting enough protein?";
    } else if (lowerCaseMessage.includes("keto")) {
      return "The keto diet is a high-fat, low-carb diet that can help with weight loss and energy levels. Need tips on keto-friendly foods?";
    }
    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hey")) {
        return "Hello! 👋 I'm your Fitness Assistant Bot. I'm here to help you with all things related to gym workouts, fitness, and nutrition. Whether you need workout tips, meal suggestions, or just want to chat about health, I’m here for you!\n\n" +
               "Just let me know what you're looking for, and I can guide you through exercises, recommend routines, or answer your fitness questions. 💪\n\n" +
               "If you need any help with specific muscle groups, just let me know! For example, you can ask about chest exercises, biceps, back, legs, and more. 🏋️‍♂️";
    }
  
    // **Health & Mental Health**
    else if (lowerCaseMessage.includes("health")) {
      return "Maintaining good health involves regular exercise, a balanced diet, and adequate sleep 🛌. Anything specific you'd like to know?";
    } else if (lowerCaseMessage.includes("mental health")) {
      return "Mental health is just as important as physical health. Exercise, meditation, and mindfulness can improve your mental well-being 🧘‍♂️. Need tips for reducing stress?";
    } else if (lowerCaseMessage.includes("sleep")) {
      return "Sleep is essential for recovery and overall health 😴. Try to get 7-9 hours of sleep each night for optimal health. Having trouble sleeping?";
    } else if (lowerCaseMessage.includes("hydration") || lowerCaseMessage.includes("water")) {
      return "Staying hydrated helps with energy levels and physical performance 💧. Drink at least 8 cups of water daily. Want hydration tips?";
    } else if (lowerCaseMessage.includes("stress") || lowerCaseMessage.includes("anxiety")) {
      return "Exercise, breathing techniques, and mindfulness practices can help reduce stress and anxiety. Would you like some stress management tips?";
    } else if (lowerCaseMessage.includes("depression")) {
      return "If you're feeling depressed, talking to a therapist is important. Exercise can also help boost mood and mental health 🧠. Need help finding support?";
    } else if (lowerCaseMessage.includes("mindfulness")) {
      return "Mindfulness can help you focus on the present moment and reduce stress. Interested in a mindfulness exercise or meditation guide?";
    }
  
    // **Medical & Health Concerns**
    else if (lowerCaseMessage.includes("medical") || lowerCaseMessage.includes("healthcare")) {
      return "For medical advice, it's best to consult with a doctor or healthcare professional. But I can offer general health tips if you like.";
    } else if (lowerCaseMessage.includes("vitamins") || lowerCaseMessage.includes("supplements")) {
      return "Vitamins and supplements can fill nutritional gaps. Popular supplements include vitamin D, omega-3s, and multivitamins. Are you looking for specific recommendations?";
    } else if (lowerCaseMessage.includes("injury") || lowerCaseMessage.includes("pain")) {
      return "If you're injured, rest is important. Ice, compression, and elevation (R.I.C.E.) can help with minor injuries 🧊. Consider seeing a professional for diagnosis.";
    } else if (lowerCaseMessage.includes("flu") || lowerCaseMessage.includes("cold")) {
      return "A strong immune system helps fight off the flu or a cold 🤧. Make sure to rest, drink fluids, and eat healthy to support recovery.";
    } else if (lowerCaseMessage.includes("headache") || lowerCaseMessage.includes("migraine")) {
      return "Headaches can have many causes, from stress to dehydration. Drink water, rest, and avoid screens if needed. Consult a doctor if persistent.";
    } else if (lowerCaseMessage.includes("fever")) {
      return "Fever often indicates an infection. Drink fluids, rest, and monitor your temperature. If it persists, consult a healthcare provider.";
    } else if (lowerCaseMessage.includes("cough") || lowerCaseMessage.includes("sore throat")) {
      return "A cough or sore throat can be symptoms of a cold or flu. Drink warm liquids and rest. If symptoms worsen, see a doctor.";
    }
 
    if (lowerCaseMessage.includes("chest")) {
        return "To build your chest, try these exercises:\n" +
          "- **Barbell Bench Press**: Classic compound exercise to target the entire chest.\n" +
          "- **Dumbbell Flyes**: Great for stretching and isolating the chest muscles.\n" +
          "- **Push-Ups**: A bodyweight exercise that targets the chest and triceps.\n" +
          "- **Chest Dips**: Excellent for building the lower chest.";
      }
      
      // **Biceps Exercises**
      else if (lowerCaseMessage.includes("biceps")) {
        return "To target your biceps, try these exercises:\n" +
          "- **Barbell Curl**: A great compound movement for bicep growth.\n" +
          "- **Preacher Curl**: Isolates the biceps, reducing involvement from other muscles.\n" +
          "- **Hammer Curl**: Works the brachialis and brachioradialis along with the biceps.";
      }
      else if (lowerCaseMessage.includes("about")) {
        return "Welcome to the Gym Management Website! \n" +
               "Our platform is designed to help you manage your gym workouts, track progress, and stay motivated.\n" +
               "This website is developed by **Karthikeyan C**, a student of Kongu Engineering College, under the course code **22ITR042**.\n" +
               "Feel free to explore our gym services, track your exercises, and improve your fitness journey with us!";
    }
      
      // **Triceps Exercises**
      else if (lowerCaseMessage.includes("triceps")) {
        return "To develop your triceps, include these exercises in your routine:\n" +
          "- **Tricep Dips**: Bodyweight exercise that targets all three triceps heads.\n" +
          "- **Skull Crushers**: An effective exercise for hitting the long head of the triceps.\n" +
          "- **Overhead Tricep Extension**: Great for stretching and targeting the long head of the triceps.";
      }
      
      // **Leg Exercises**
      else if (lowerCaseMessage.includes("legs") || lowerCaseMessage.includes("squats")) {
        return "To build strong legs, try these exercises:\n" +
          "- **Barbell Squat**: A compound movement for building strength and size in the quads, hamstrings, and glutes.\n" +
          "- **Leg Press**: Machine exercise that targets the quads, hamstrings, and glutes.\n" +
          "- **Lunges**: Excellent for building lower body strength and balance.\n" +
          "- **Leg Extensions**: Isolation exercise for the quadriceps.";
      }
      
      // **Arm Exercises**
      else if (lowerCaseMessage.includes("arms")) {
        return "For overall arm development, include these exercises:\n" +
          "- **Close-Grip Bench Press**: Great compound movement to target both the chest and triceps.\n" +
          "- **EZ Bar Curl**: A variation of the biceps curl that reduces wrist strain.\n" +
          "- **Dumbbell Triceps Kickbacks**: Isolation movement for the triceps.";
      }
      
      // **Back Exercises**
      else if (lowerCaseMessage.includes("back")) {
        return "To build a strong back, include these exercises in your routine:\n" +
          "- **Deadlift**: One of the best compound exercises for overall back development.\n" +
          "- **Pull-Ups**: Excellent bodyweight exercise for building upper back strength.\n" +
          "- **Bent-Over Rows**: Effective for hitting the lats and middle back.\n" +
          "- **Lat Pulldowns**: Great for developing the lats.";
      }
      
      // **Lats (Latissimus Dorsi) Exercises**
      else if (lowerCaseMessage.includes("lats") || lowerCaseMessage.includes("latissimus dorsi")) {
        return "To build your lats, try these exercises:\n" +
          "- **Lat Pulldown**: A popular exercise that works the upper back and lats.\n" +
          "- **Pull-Ups**: Great for building lat width.\n" +
          "- **Single-Arm Dumbbell Rows**: Excellent for isolating the lats and middle back.";
      }
      
      // **Forearms Exercises**
      else if (lowerCaseMessage.includes("forearms")) {
        return "To develop your forearms, try these exercises:\n" +
          "- **Wrist Curls**: A classic exercise for building forearm strength.\n" +
          "- **Reverse Wrist Curls**: Targets the opposite part of your forearm muscles.\n" +
          "- **Farmer's Walk**: Great for grip strength and forearm development.";
      }
      
      // **General Exercise Recommendations**
      else if (lowerCaseMessage.includes("exercise")) {
        return "It sounds like you're interested in exercises! Do you need help with a specific muscle group or workout routine? You can try the following splits:\n" +
          "1. **Push/Pull/Legs**\n" +
          "2. **Upper/Lower Split**\n" +
          "3. **Full Body Routine**";
      }
      
  
    // **Miscellaneous/General Questions**
    else {
      return "Sorry, I didn't quite understand that. Could you ask me something about gym 🏋️‍♂️, health 💊, fitness 💪, or food 🍎?";
    }
  };
  
  const handleUserInput = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInput("");

    setIsBotTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, isUser: false }]);
      setIsBotTyping(false);
    }, 1000); // 1-second delay to simulate typing
  };

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setIsBotTyping(true);
      setTimeout(() => {
        setMessages([{ text: "Hello! I'm here to assist you with fitness and nutrition.", isUser: false }]);
        setIsBotTyping(false);
        setHasGreeted(true);
      }, 1000);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
<div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-blue-700 p-3 rounded-full text-white shadow-lg hover:bg-blue-800 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
              <TbMessageChatbotFilled className="h-10 w-10" />

      </button>

      {isOpen && (
        <div className="chat-window fixed bottom-16 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-300 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button
              onClick={() => setShowCloseConfirm(true)}
              className="text-red-500 hover:text-red-600"
            >
              ✖
            </button>
          </div>

          <div className="messages h-64 overflow-y-auto mb-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.isUser
                    ? 'bg-blue-500 text-white self-end'
                    : 'bg-gray-200 text-gray-800 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isBotTyping && (
              <div className="message bot bg-gray-200 p-2 rounded-lg text-gray-800">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleUserInput()}
              placeholder="Type your message..."
              className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleUserInput}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>

          {showCloseConfirm && (
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-75 flex flex-col items-center justify-center rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">
                Are you sure you want to close the chat?
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleConfirmClose}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                >
                  Yes
                </button>
                <button
                  onClick={cancelClose}
                  className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300"
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;