import React,{useState} from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./InputData.css";

export default function InputData() {
  const options: string[] = ["Number", "Uppercase", "Lowercase", "Symbol"];
  // Assigned default value to state
  const [selectedOptions, setselectedOptions] = useState(options)
  // TODO: What type and How to assign ?
  const [password, setPassword] = useState("")

  const getPassword = (values:any) => {

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "zyxwvutsrqponmlkjihgfedcba"
    const number = "1234567890"
    const symbol = "!@#$%^&*()_{}[]+="

    var length:Number = 15
    var password:string = ""
    // console.log("PPPPPPPPPPPPPPPPPPPPPPPPPP ",selectedOptions)
    for(let i=0;i<length;i++){
      var name = selectedOptions[(i % selectedOptions.length)]
      switch (name) {
        case "Number":
          password += number.charAt(Math.floor(Math.random() * number.length));
          break;
        case "Uppercase":
          password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
          break;
        case "Lowercase":
          password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
          break;
        case "Symbol":
          password += symbol.charAt(Math.floor(Math.random() * symbol.length));
          break;
      
        default:
          console.error("Specify other symbol in switch")
          break;
      }
      // console.log(selectedOptions)
    }
    console.log('Password Generated',password);
    setPassword(password)
  };

  const getOptions = (values:any)=>{
    if(values.length === 0){
      message.error("Should have at least one value",3)
    }else{
      // console.log("SET ",values)
      setselectedOptions(values)
    }
    
  }

  const copyToClipBoard = ()=>{
    navigator.clipboard.writeText(password);
    message.info("Copied successfully",2)
  }
  return (
    <div className="myform">
      <Form className="myform--password" onFinish={getPassword} >
        <Form.Item name="password"  labelCol={{
        span: 8,
        offset:30,
      }}>
          <Input value={password}/>
          <Button
            className="copy-button"
            icon={
              <CopyOutlined
                id="copy-outline"
                onClick={copyToClipBoard}
              />
            }
          />
        </Form.Item>
        <Checkbox.Group options={options} defaultValue={options} onChange={getOptions}/>
        <br /> <br />
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Generate Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
