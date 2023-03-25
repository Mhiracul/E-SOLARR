import React, {useState} from 'react'
import tw from 'tailwind-styled-components'; 


const Table = tw.table`
  w-full
  border-collapse
  border
  border-gray-500
  bg-white
  justify-center
  
`;

const TH = tw.th`
  p-2
  text-left
  text-[#dc2626]
  border
  border-gray-500
  
`;

const TD = tw.td`
  p-2
  text-left
  border
  border-gray-500
  hover:text-[#dc2626]
`;

const Input = tw.input`
  p-1
  text-right
  border
  border-gray-500
`;
const Calculate = () => {
    
    const [appliances, setAppliances] = useState({
        TV: 0,
        Fridge: 0,
        AC: 0,
        WashingMachine: 0,
        Microwave: 0,
        Lights: 0,
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAppliances({ ...appliances, [name]: parseInt(value) });
      };
      
    
      const getTotalKVA = (appliance) => {
        const kvaValues = {
          TV: 0.2,
          Fridge: 0.5,
          AC: 1.5,
          WashingMachine: 0.8,
          Microwave: 1.0,
          Lights: 0.1,
        };
        return kvaValues[appliance];

       
        };
      
        
      
        const [totalPower, setTotalPower] = useState(0);
        
         
        const calculateTotalPower = () => {
            const totalKVA = Object.keys(appliances).reduce(
              (total, appliance) => total + getTotalKVA(appliance) * appliances[appliance],
              0
            );
            setTotalPower(totalKVA);
          };
          
          const getQuote = () => {
            if (totalPower >= 1.0 && totalPower <= 1.7) {
              // Download PDF for range 1.0 - 1.7
              const pdfUrl = 'https://example.com/range1.pdf';
              const link = document.createElement('a');
              link.href = pdfUrl;
              link.download = 'quote.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else if (totalPower > 1.7 && totalPower <= 2.5) {
              // Download PDF for range 1.8 - 2.5
              const pdfUrl = 'https://example.com/range2.pdf';
              const link = document.createElement('a');
              link.href = pdfUrl;
              link.download = 'quote.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              console.log('No quote available for this range');
            }
          };
          
          
  
  return (
    <div className='mx-auto px-4 shadow-lg shadow-white'>
        <div className='text-[#ffffff] hover:text-[#dc2626] font-bold text-center p-4 text-2xl ]'>E-SOLAR CALCULATION HERE👇 </div>
      <Table>
        <thead>
          <tr>
            <TH>Appliance</TH>
            <TH>kVA</TH>
            <TH>Quantity</TH>
            <TH>Total value</TH>
          </tr>
        </thead>
        <tbody>
          {Object.keys(appliances).map((appliance) => (
            <tr key={appliance}>
              <TD>{appliance}</TD>
              <TD>{getTotalKVA(appliance)}</TD>
              <TD>
                <Input
                  type="number"
                  name={appliance}
                  value={appliances[appliance]}
                  onChange={(event) => {
                    handleInputChange(event);
                    calculateTotalPower();
                  }}
                />
              </TD>
              <TD>{getTotalKVA(appliance) * appliances[appliance]}</TD> 
            </tr>
          ))}
        </tbody>
        
  
      </Table>
      <button
    className="bg-[#dc2626] text-white hover:text-base hover:bg-[#ff4141] py-2 px-4 rounded mt-4"
    onClick={calculateTotalPower}
  >
    Calculate Total Power
  </button>
  <button
    className="bg-[#dc2626] text-white py-2 px-4 flex-col rounded mt-4 ml-4 hover:bg-[#dc2626] hover:text-white justify-end"
    onClick={getQuote}
  >
    Get Quote
  </button>


      <p className = "mt-4 text-white font-bold">Total Power: {totalPower}KVA</p>
    </div>
   
  )
}

export default Calculate