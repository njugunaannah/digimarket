import Image from "next/image";
import SkillSection from "@/components/SkillSection";

export default function Home() {

  const skills=[
    { skillName: "Blog Article Writing", description: "I excel in creating engaging and informative blog articles." },
    { skillName: "Social Media Management", description: "Proficient in managing social media platforms for maximum engagement." },
    { skillName: "Search Engine Marketing", description: "Experienced in optimizing search engine campaigns for better visibility." },
    { skillName: "Email Marketing", description: "Skilled in crafting effective email marketing campaigns." },
    { skillName: "Web Design", description: "Adept at designing user-friendly and visually appealing websites." },
    // Add more skills here as needed
  ]
  return (
    <main className="h-full">
      
      <div>
      <h2 className="fixed left-0 ml-4 mr-4 top-0 flex w-full h-full justify-center pt-8 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-blue-200 ">
          Welcome to DigiMarket- Your Trusted Digital Marketing Agent
        </h2>
        
        <p className="flex ml-8 align-middle justify-center">
          Here you will find all the information you need to establish a clear roadmap for marketing your business.
        </p>
      </div>
      <br/>
      <br/>
      <div className="z-10 max-w-5xl w-full h-full items-center justify-between font-mono text-sm lg:flex ml-4 mr-4">
       
      
        
        {skills.map((data, index) => (
          <SkillSection key={index} skillName={data.skillName} description={data.description}/>
        ))}
        
       
      </div>


    </main>
  );
}
