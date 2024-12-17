import html2canvas from "html2canvas";
import  html2pdf  from "html2pdf.js";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";


export const ExpResume = () => {
    const contentRef = useRef(null);
    const [loading, setloading] = useState(false)
    // const reactToPrintFn = useReactToPrint({ contentRef,
    //     documentTitle:"resume",
    //     onBeforePrint: async()=>{
    //         await setuppagesize()
    //     }
    //  });

    //  const setuppagesize = async ()=>{
    //     const styleSheet = document.styleSheets[0];
        
    //     styleSheet.insertRule(`
    //         @page {
    //             size: A4;
    //             margin: 20mm; 
    //         }
    //     `, styleSheet.cssRules.length);
    //  }
    // const handleDownload = async ()=>{
    //     setloading(true)
    //     const element = contentRef.current
    //     if(!element){
    //         return;
    //     }

    //     const canvas = html2canvas(element,{
    //         scale:2
    //     })

    //     const data = (await canvas).toDataURL("image/png")

    //     const pdf = new jsPDF({
    //         orientation:"portrait",
    //         unit:"in",
    //         format:"a4"
    //     })
    //     // pdf.html(data,{
    //     //     autoPaging:true

    //     // })
    //     const imgproperties = pdf.getImageProperties(data)
    //     const pdfWidth = pdf.internal.pageSize.getWidth()

    //     const pdfHeight = (imgproperties.height * pdfWidth)/ imgproperties.width

    //     pdf.addImage(data,"PNG",0,0,pdfWidth,pdfHeight)
    //     setloading(false)
    //     pdf.save("resume.pdf")
        
    // }
    // const handleDownload = () => {
    //     setloading(true)
    //     const doc = new jsPDF('p', 'px', 'a4'); // A4 paper size
    //     const padding = 10; // Padding in mm
    //     const margin = 10; // Margin for content area

    //     // Starting from the top of the page
    //     // doc.setFont('helvetica', 'normal');
    //     // doc.setFontSize(12);

    //     doc.html(contentRef.current, {
    //         callback: function (doc) {
    //             doc.save('resume.pdf');
    //         },
    //         x: padding, // Horizontal padding
    //         y: padding, // Vertical padding (top)
    //         width: 585, // Width of the content area (A4 width minus padding)
    //          // Adjust to fit content, depending on your layout
    //         autoPaging: true, // Auto page breaks
    //         margin: [ margin, margin, padding, padding], // Set page margins
    //     });
    //     setloading(false)
    // };

    // const handleDownload = () => {
    //         setloading(true)
    //         const element = document.getElementById("resume-content");
    //         const options = {
    //             margin: [-0.1, 1, 0.5, 1],
    //             filename: "resume.pdf",
    //             html2canvas: { scale: 5 },
    //             quality: 1,
    //             jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    //         };
    //         // html2pdf().from(element).set(options).save(); 
    //         html2pdf().from(element).set(options).output('blob').then((blob) => {
    //             const pdfURL = URL.createObjectURL(blob);
    //             window.open(pdfURL, '_blank');
    //             setloading(false)
    //         })
    //     };
    const handleDownload = async () => {
        setloading(true);
    
        const element = document.getElementById("resume-content");
        if (!element) return;
    
        // Define scaling options for better resolution
        const options = {
          scale: 3, // Adjust for higher resolution
          useCORS: true, // Fix cross-origin issues
        };
    
        try {
          // Convert HTML to canvas
          const canvas = await html2canvas(element, options);
          const imgData = canvas.toDataURL("image/png");
    
          // Define PDF configuration
          const pdf = new jsPDF("p", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
    
          // Scale the image dimensions to fit A4
          const imgWidth = pdfWidth;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          let heightLeft = imgHeight;
          let position = 0;
    
          // Add content across multiple pages if necessary
          while (heightLeft > 0) {
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
            position -= pdfHeight;
    
            if (heightLeft > 0) {
              pdf.addPage();
            }
          }
    
          pdf.save("resume.pdf"); // Save the PDF
        } catch (error) {
          console.error("Error generating PDF:", error);
        } finally {
          setloading(false);
        }
      };
    
    return (
        <>
            <section className="h-auto w-[900px] mx-auto  overflow-hidden "  >
                <div  className="w-[800px] m-auto p-[20px] " id="resume-content">
                <h1 className="text-3xl font-bold text-center uppercase " >Saurav kumar jha</h1>
                <div className="h-[2px] w-[90%] bg-gray-600 my-2 mx-auto "></div>

                <div className="h-auto w-[95%] mx-auto text-base font-medium flex justify-evenly mt-[-5px]">
                    <p>+91 9934787172</p>
                    <p>skjsaurav1@gmail.com</p>
                    <p>https://linkedin/saurav</p>
                </div>

                <div className="h-auto w-[95%] mx-auto my-2  ">
                    <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-[23px] font-semibold text-center ">Summary</h2>
                    <p className="text-base ml-3 font-medium ">Results-driven and highly skilled [Your Profession] with [X] years of experience in [Industry/Field]. Adept at [list of key skills or tasks], with a proven track record of [mention key achievements or outcomes such as increasing revenue, improving efficiency, etc.]. Possesses strong abilities in [specific areas], and a passion for [specific field or value you bring to the role]. Committed to delivering top-quality work while collaborating effectively within teams and driving business success.</p>
                </div>

                <div className="h-auto w-[95%] mx-auto my-2 ">
                    <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-2xl font-semibold text-center ">Profession Experience</h2>
                    <div className="h-auto w-[98%] mx-auto my-2 ">
                        <p className="text-xl font-semibold" > Marketing Manager</p>
                        <p className="text-base ml-1 font-semibold flex justify-between"><span>Innovate Digital Solutions | San Francisco, CA</span> June 2019 – Present</p>
                        <ol className="list-disc break-words ml-6 text-base font-medium ">
                            <li>Led the development and execution of digital marketing strategies, increasing website traffic by 30%.</li>
                            <li>Managed a team of 5 marketing specialists, fostering collaboration and professional growth.</li>
                            <li>Spearheaded social media campaigns that resulted in a 25% increase in customer engagement.</li>
                        </ol>
                    </div>
                    <div className="h-auto w-[98%] mx-auto my-2 ">
                        <p className="text-xl font-semibold" > Marketing Manager</p>
                        <p className="text-base ml-1 font-semibold flex justify-between"><span>Innovate Digital Solutions | San Francisco, CA</span> June 2019 – Present</p>
                        <ol className="list-disc break-words ml-6 text-base font-medium ">
                            <li>Led the development and execution of digital marketing strategies, increasing website traffic by 30%.</li>
                            <li>Managed a team of 5 marketing specialists, fostering collaboration and professional growth.</li>
                            <li>Spearheaded social media campaigns that resulted in a 25% increase in customer engagement.</li>
                        </ol>
                    </div>
                    <div className="h-auto w-[98%] mx-auto my-2 ">
                        <p className="text-xl font-semibold" > Marketing Manager</p>
                        <p className="text-base ml-1 font-semibold flex justify-between"><span>Innovate Digital Solutions | San Francisco, CA</span> June 2019 – Present</p>
                        <ol className="list-disc break-words ml-6 text-base font-medium ">
                            <li>Led the development and execution of digital marketing strategies, increasing website traffic by 30%.</li>
                            <li>Managed a team of 5 marketing specialists, fostering collaboration and professional growth.</li>
                            <li>Spearheaded social media campaigns that resulted in a 25% increase in customer engagement.</li>
                        </ol>
                    </div>
                </div>

                <div className="h-auto w-[95%] mx-auto my-2 ">
                    <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-2xl font-semibold text-center ">Education Detail</h2>
                    <div className="w-[98%] mx-auto text-base font-medium  my-1">
                        <p className="flex justify-between">Patliputra University, Patna <span>2019-2023</span> </p>
                        <p className="mt-[-8px] ml-2 ">Bachelor of Commerce</p>
                    </div>
                    <div className="w-[98%] mx-auto text-base font-medium  my-1 ">
                        <p className="flex justify-between">Patliputra University, Patna <span>2019-2023</span> </p>
                        <p className="mt-[-8px] ml-2 ">Bachelor of Commerce</p>
                    </div>
                </div>

                <div className="h-auto w-[95%] mx-auto my-2 ">
                    <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-2xl font-semibold text-center ">Skills</h2>
                    <p className="text-base font-medium my-[-2px] ml-2 "><span className="text-lg font-semibold">Technical SKill:- </span> Python, Java, C++, JavaScript, SQL </p>
                    <p className="text-base font-medium my-[-2px] ml-2 "><span className="text-lg font-semibold">Technical SKill:- </span> Python, Java, C++, JavaScript, SQL </p>
                    <p className="text-base font-medium my-[-2px] ml-2 "><span className="text-lg font-semibold">Technical SKill:- </span> Python, Java, C++, JavaScript, SQL </p>
                </div>
                </div>
            </section>

            <button className="h-auto w-auto px-5 py-2 bg-slate-700 rounded-lg my-3 hover:bg-red-500 ml-14 text-white font-bold  " onClick={handleDownload}>{loading ? "Generating...":"print"} </button>
        </>
    )
}