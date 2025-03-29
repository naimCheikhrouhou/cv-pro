function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    var inputField = document.getElementById("user-input");
    var message = inputField.value.trim();
    if (message === "") return;
    
    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    inputField.value = "";
    
    setTimeout(() => {
        var botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = getBotResponse(message);
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function getBotResponse(message) { 
    const responses = {
        "hi": "hi , i am your chatbot assistant how can i help you ",
        "his faculty": "faculy of sience of sfax",
        "his age " : "21 years old",
        "give me his location " : "menzel chaker km 4 , around \"jemmma el faleh\" ",
        "is he married " : "no , not yet ",
        "give me naim certifications"       : "Excel , powerpoint , Word , Big data , engineering degree , and other certifications you can check them in the site ",
        
            "you are smart" : "yes, i know that ",
            "you are strong" : "yes, i know that ",

            "you are intelligent" : "yes, i know that ",

            "you are dumb" : "better than you at least",

            "you are stupid" : "better than you at least",

            "you are bad" : "better than you at least" ,
        "tell me about yourself.": "my name is naim cheikhrouhou i’m a passionate data engineer with over 5 years of experience designing and maintaining scalable data pipelines. i hold a degree in computer science and have worked with technologies such as apache spark, hadoop, and sql to transform raw data into actionable insights. i enjoy solving complex data problems and continuously learning new techniques to improve system efficiency.",
        "why do you want to work for this company?": "i’ve been impressed by your company’s innovative approach to data-driven decision making and the commitment to technological advancement. i believe my expertise in building efficient etl processes and managing large-scale data architectures aligns well with your current projects, and i’m excited about the opportunity to contribute to a forward-thinking team.",
        "what are your strengths and weaknesses?": "one of my key strengths is my attention to detail; i’m able to identify and resolve data inconsistencies early on. i’m also highly analytical, which helps me optimize processes effectively. on the flip side, i tend to spend extra time refining my solutions to ensure perfection, and i’m working on balancing thoroughness with efficiency by prioritizing key project milestones.",
        "describe a time you faced a challenge at work and how you handled it.": "in a previous role, our data warehouse was struggling to scale with increased data volume, causing delays in reporting. i led a project to redesign the architecture by migrating to a cloud-based solution using apache spark and reworking our sql queries. this project improved processing efficiency by 40% and ensured more reliable reporting, demonstrating the value of proactive problem-solving.",
        "what relevant experience do you have for this role?": "i have over five years of experience as a data engineer, during which i’ve built robust etl pipelines, implemented data warehousing solutions, and optimized complex queries. my hands-on experience with tools such as apache airflow, spark, and aws has allowed me to consistently improve data quality and processing times, making me confident in my ability to contribute effectively to your team.",
        "where do you see yourself in five years?": "i see myself evolving into a lead data engineer or architect role, where i can guide the overall strategy for data management and infrastructure. i’m committed to continuous learning and professional development, and i aim to drive innovation in data processes while mentoring junior team members.",
        "how do you handle stress and pressure?": "i handle stress by breaking complex tasks into manageable parts and setting clear priorities. i’m a firm believer in structured planning and proactive communication with my team to ensure we’re aligned on deadlines. additionally, i practice regular short breaks and time management techniques to stay focused and productive under pressure.",
        "what are your salary expectations?": "based on my experience and the current industry standards, i’m looking for a salary in the range of $80,000 to $100,000 per year. however, i’m open to discussing this further and am flexible, especially when considering the overall benefits and growth opportunities within your company.",
        "why did you leave your previous job?": "i decided to leave my previous position because i was seeking new challenges and opportunities for growth. while i valued my time there and learned a great deal, i felt ready to contribute my skills to a more dynamic environment where innovation is at the forefront and where i can further advance my expertise in data engineering.",
        "do you have any questions for us?": "yes, i do. could you tell me more about the structure of the data team and the main challenges you’re currently facing? additionally, what opportunities are there for professional development and career growth within the company?",
        "are you good in ia ?"             : "yes, i am a data engineer with a wide knowleadge of ia and machine learnig , contributed in many projects you can check them in the website",
        "are you good in data engineering ?":  "yes , i have a data engineering degree with a wide knowleadge of data manipultion and creation ",
        "are you stupid ? "                : "no , but i think you are ",
        "do / tell me / of  naim have a cruch ? "  : "yes, her name is Eya Jmal , she is smart and playful with very unique green eyes ",
        
        "tell me the best friend of naim "  : "i think , omar zoueri is his best friends or maybe mahmoud koubaa , i don't no ",
        "is naim a good husband ": "yes , he is loyal and will support you in everything you wanna do, but i have to tell you he is poor.",
        "is naim a good boyfriend": "yes , he is loyal and will support you in everything you wanna do, but i have to tell you he is poor."
    };

    const compare = (message, answer) => {
        const messageWords = message.split(" ");
        const answerWords = answer.split(" ");
        let similarWordsCount = 0;

        // Calculate percentage of common words
        messageWords.forEach(word => {
            if (answerWords.includes(word)) {
                similarWordsCount++;
            }
        });

        // Return similarity as a percentage
        return similarWordsCount / messageWords.length;
    };

    // Convert the message to lowercase
    message = message.toLowerCase().trim();

    let mostSimilarResponse = "";
    let maxSimilarity = 0;

    // Find the most similar response
    for (const question in responses) {
        const similarity = compare(message, question);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostSimilarResponse = responses[question];
        }
    }

    // If no similar response is found, return a default message
    return mostSimilarResponse || "i'm not sure how to answer that yet, but i am always learning!";
}
