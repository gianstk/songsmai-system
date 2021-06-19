import React, {
  useState,
  useEffect
} from 'react';
import InputGroup from './InputGroup';

import SizeCalculation from './../../logics/sizeCalculation';

import './../Utilities.css';
import './SizeCalculator.css';

const SizeCalculator = () => {

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState("");
  const [a9, setA9] = useState("");
  const [a10, setA10] = useState("");

  useEffect(() => {
    printValues()
  }, [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10])

  const printValues = () => {
    // console.log("a1:", a1);
    // console.log("a2:", a2);
    // console.log("a3:", a3);
    // console.log("a4:", a4);
    // console.log("a5:", a5);
  }

  const handleChange = (newValue, tag) => {
    console.log("handleChange parent");
    console.log(newValue);
    switch(tag) {
      case "a1":
        setA1(newValue);
        break;
      case "a2":
        setA2(newValue);
        break;
      case "a3":
        setA3(newValue);
        break;
      case "a4":
        setA4(newValue);
        break;
      case "a5":
        setA5(newValue);
        break;
      case "a6":
        setA6(newValue);
        break;
      case "a7":
        setA7(newValue);
        break;
      case "a8":
        setA8(newValue);
        break;
      case "a9":
        setA9(newValue);
        break;
      case "a10":
        setA10(newValue);
        break;
    }
    
  }

  const calculateSize = () => {
    if (!a1 || !a2 || !a6 || !a7 || !a8 || !a10) {
      alert("กรุณากรอกข้อมูลให้ครบ\nไหล่ แขนยาว อก เอว สะโพก คอ");
    }

    const measurement = {
      a1: parseInt(a1),
      a2: parseInt(a2),
      a3: parseInt(a3),
      a4: parseInt(a4),
      a5: parseInt(a5),
      a6: parseInt(a6),
      a7: parseInt(a7),
      a8: parseInt(a8),
      a9: parseInt(a9),
      a10: parseInt(a10),
    }

    const cal = new SizeCalculation(measurement);
    cal.getSize();

    
  }



  return (
    <div className="sizeCalculator" style={{marginTop: "30px"}}>
      <h1>ใบวัดตัว</h1>
      <div className="flex" style={{flexDirection: "row", marginTop: "10px"}}>

        {/* Column 1 */}
        <div className="flex" style={{flexDirection: "column", justifyContent: "flex-start", width: "30%"}}>
          <h2 style={{marginBottom: "20px"}}>ส่วนที่ 1</h2>
          <InputGroup name="ไหล่" placeholder="" value={a1} onChange={handleChange} tag="a1"/>
          <InputGroup name="แขนยาว" placeholder="" value={a2} onChange={handleChange} tag="a2"/>
          <InputGroup name="ปลายแขน" placeholder="" value={a3} onChange={handleChange} tag="a3"/>
          <InputGroup name="บ่าหน้า" placeholder="" value={a4} onChange={handleChange} tag="a4"/>
          <InputGroup name="บ่าหลัง" placeholder="" value={a5} onChange={handleChange} tag="a5"/>
          <InputGroup name="อก" placeholder="" value={a6} onChange={handleChange} tag="a6"/>
          <InputGroup name="เอว" placeholder="" value={a7} onChange={handleChange} tag="a7"/>
          <InputGroup name="สะโพก" placeholder="" value={a8} onChange={handleChange} tag="a8"/>
          <InputGroup name="เสื้อยาว" placeholder="" value={a9} onChange={handleChange} tag="a9"/>
          <InputGroup name="คอ" placeholder="" value={a10} onChange={handleChange} tag="a10"/>
        </div>

        {/* Column 2 */}
        <div className="flex" style={{flexDirection: "column", justifyContent: "flex-start", width: "30%"}}>
        <h2 style={{marginBottom: "20px"}}>ส่วนที่ 2</h2>
          <InputGroup name="เอว" placeholder=""/>
          <InputGroup name="สะโพก" placeholder=""/>
          <InputGroup name="เป้า" placeholder=""/>
          <InputGroup name="โคนขา" placeholder=""/>
          <InputGroup name="รอบเข่า" placeholder=""/>
          <InputGroup name="ยาว" placeholder=""/>
          <InputGroup name="ปลายขา" placeholder=""/>
        </div>


        <div style={{width: "30%"}}>
          <h2 style={{marginBottom: "20px"}}>ผลลัพท์</h2>
          <button className="calculate-btn" onClick={calculateSize}>
            คำนวณขนาด
          </button>

          <div style={{width: "100%", height: "500px", backgroundColor: "#ddd"}}></div>

        </div>
        

        



      </div>
    </div>
  );
}

export default SizeCalculator;