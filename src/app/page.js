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
    <main>
      
      <div>
      <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to DigiMarket- Your Trusted Digital Marketing Agent
        </h2>
        
        <p>
          Here you will find all the information you need to establish a clear roadmap for marketing your business.
        </p>
      </div>
      <br/>
      <br/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
      
        
        {skills.map((data, index) => (
          <SkillSection key={index} skillName={data.skillName} description={data.description}/>
        ))}
        
       
      </div>
{/* <div>
<button text= {"Learn more"}></button>
</div> */}
<br/>
      <div className="flex bg-blue-400">
        <p>this is me</p>
      </div>
    </main>
  );
}
