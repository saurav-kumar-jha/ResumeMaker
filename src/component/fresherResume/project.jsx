import { useState } from "react";
import { Star } from "./star";

export const Projects = ({project, setProject}) => {
  // const [project, setProject] = useState([{ name: '', link: '', year: '', points: [''] }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProject = [...project];
    updatedProject[index][name] = value;
    setProject(updatedProject);
  };

  const handlePointsChange = (projectIndex, pointIndex, e) => {
    const { value } = e.target;
    const updatedProject = [...project];
    updatedProject[projectIndex].points[pointIndex] = value;
    setProject(updatedProject);
  };

  const addPoint = (index,e) => {
    e.preventDefault()    
    const updatedProject = [...project];
    if(updatedProject[index].points.length < 4){
        updatedProject[index].points.push('');
        setProject(updatedProject);
      }else{
        alert("u can't add more!!")
      }
    
  };

  const removePoint = (projectIndex, pointIndex,e) => {
    e.preventDefault()   
    const updatedProject = [...project];
    updatedProject[projectIndex].points = updatedProject[projectIndex].points.filter(
      (_, i) => i !== pointIndex
    );
    setProject(updatedProject);
  };

  const handleRemove = (index) => {
    const updatedProject = project.filter((_, i) => i !== index);
    setProject(updatedProject);
  };

  const handleAddMore = (e) => {
    e.preventDefault()
    if(project.length < 3){
      setProject([
        ...project,
        { name: '', link: '', year: '', points: [''] },
      ]);
    }else{
      alert("u can't add more!!")
    }
  };

  return (
    <>
      <div className="h-auto w-[95%] my-2 py-2 flex flex-col gap-2">
        <label className="text-2xl font-semibold mx-2">Projects Details:<Star/> </label>
        <div className="flex flex-col gap-2 ml-3">
          {project.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <input type="text" name="name" value={item.name} onChange={(e) => handleInputChange(index, e)} placeholder="eg: Project-name" className="h-[40px] w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />
                <input type="text" name="link" value={item.link} onChange={(e) => handleInputChange(index, e)} placeholder="eg: https:/your-project-link.com" className="h-[40px] w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />
                <input type="text" name="year" value={item.year} onChange={(e) => handleInputChange(index, e)} placeholder="eg: Oct 2023 - Nov 2023" className="h-[40px] w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />
                
              </div>

              
              <div className="ml-3">
                <label className="text-xl font-semibold">Project Points:<Star/></label>
                <ul className="list-disc pl-6">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-2 my-2">
                      <input type="text" value={point} onChange={(e) => handlePointsChange(index, pointIndex, e)} placeholder="Enter a point" className="h-[30px] w-[80%] px-3 py-1 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" />
                      <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={(e) => removePoint(index, pointIndex,e)} > Remove </button>
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 h-auto w-auto px-2 py-1 text-white font-semibold rounded-md ml-5 " onClick={(e) => addPoint(index,e)} > Add Point </button>
              </div>
              <button className="h-auto w-fit px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white" onClick={() => handleRemove(index)} > Remove </button>
              <hr className="h-[2px] bg-gray-500 w-[100%] rounded " />
            </div>
            
          ))}
          <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddMore} > Add more </button>
          
        </div>
      </div>
    </>
  );
};
