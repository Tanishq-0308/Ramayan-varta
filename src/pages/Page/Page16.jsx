import React from "react";
import page16img1 from "../../assets/page16img1.jpeg";
import page16img2 from "../../assets/page16img2.jpeg";
import page16img3 from "../../assets/page16img3.jpeg";
import page16img4 from "../../assets/page16img4.jpeg";
import page16img5 from "../../assets/page16img5.jpeg";
import page16img6 from "../../assets/page16img6.jpeg";
import page16img7 from "../../assets/page16img7.jpeg";
import page16img8 from "../../assets/page16img8.jpeg";

function Page16() {
  return (
    <div id="page16">
      <div className="flex justify-center">
        <h1 className="text-[50px] max-[735px]:text-[30px] max-[460px]:text-[20px] border-2 px-3 rounded-xl text-[#b11818] border-[#b11818]">
          रामायण अनुसन्धान परिषद् समाचारः
        </h1>
      </div>
      <div className="grid grid-cols-2 max-[460px]:grid-cols-1 grid-rows-2 m-7 gap-3 ">
        <div>
          <img src={page16img1} alt="" className="rounded-xl" />
        </div>
        <div>
          <img src={page16img2} alt="" className="rounded-xl" />
        </div>
        <div>
          <img src={page16img3} alt="" className="rounded-xl" />
        </div>
        <div className="relative w-full">
          <img
            src={page16img4}
            alt=""
            className=" absolute object-cover rounded-xl inset-0 w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 m-7 gap-7 max-[750px]:grid-cols-1">
        <div className="col-start-1 col-end-3 grid ">
          <div>
            <p className="font-rozha text-center bg-blue-400 rounded-xl text-[18px] max-[800px]:text-[15px]">रामायण अनुसन्धान परिषद् सीतामढ्यां विगते पञ्चवर्षाणां यावत्
            जनजागरणकार्यक्रमं सञ्चालयति। जगज्जननीमातुः सीतायाः प्राकट्यस्थले
            सीतामढ्यां माता सीता जगति सर्वतो उच्चतमा प्रतिमा स्थापयिष्यते।
            परिषदस्य मतं अस्ति यत् एषा केवलं प्रतिमायाः स्थापना नास्ति, अपितु
            माता सीता प्रथमवारं भगवत्याः रूपेण स्थास्यति। अतः एतत् स्थलम्
            शक्तिपीठं पर्यटकस्थलञ्च रूपेण विकसितं कर्तुं, भगवत्याः एकं
            तीर्थस्थलं रूपेण च निर्मातुं संकल्पितम् अस्ति। अस्य क्रमस्य
            अन्तर्गतं परिषदस्य पदाधिकारीणां कृते 'रामायण वार्ता' नामकस्य
            पाक्षिकपत्रिकायाः प्रचारप्रसारः दिल्ली, पटना, भोपाल, उदयपुर नगरेषु
            कृतः। जनाः 'रामायण वार्ता' पत्रिकां प्रति उत्साहपूर्णाः आसन्। अतीते
            दिवसेषु, ११ सितम्बर दिनाङ्के विवेकानन्दस्य शिकागो
            सम्भाषणजयंतीसमारोहे रामायणमञ्चस्य बालव्यासः पण्डितः वेदान्तः नामकः
            दशवर्षीयः बालकः मुम्बईस्थे सावरकरसभागारे विवेकानन्दस्य श्रीरामस्य च
            जीवनस्य आदर्शेषु विषये विस्तरेण उपदेशं दत्तवान्। यम् उपदेशं श्रुत्वा
            जनाः अत्यन्तं उत्साहिताः आसन् तथा तस्य बालकस्य बहु चर्चाः अपि अभवन्।
            सर्वे मिलित्वा उक्तवन्तः यत् सनातनस्य हेतु एतादृशस्य बालकस्य
            नितान्तम् आवश्यता अस्ति इति, तं प्रोत्साहितवन्तः च।</p>
          </div>
          <div className="grid grid-cols-2 max-[460px]:grid-cols-1">
            
            <div className=" flex justify-center items-center"><img src={page16img5} alt="" className="w-[87%]"/></div>
            <div className="grid grid-rows-2">
                <div className="flex items-center justify-center">
                    <img src={page16img6} alt="" className=""/>
                </div>
                <div className="flex justify-center items-center">
                    <img src={page16img7} alt="" />
                </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={page16img8} alt="" className="rounded-tl-[58px] rounded-tr-[70px] rounded-bl-[30px] rounded-br-[30px] w-[80%]" />
        </div>
      </div>
      <div className="m-7">
        <p className="text-center text-[18px] font-rozha">
        संस्कृत पाक्षिक समाचार पत्र रामायण वार्ता- रामायण रिसर्च काउंसिल के लिए प्रकाशक, मुद्रक: कुमार सुशांत द्वारा साई प्रिटिंग प्रेस बी-42, सेक्टर-7, नोएडा 201301, उप्र. से मुद्रित कराकर, प््लॉट नं. 52/53, एफ ब्लॉक, उत्तम नगर, ओम विहार, डीके मोहन गार्डेन, पश्चिमी दिल्ली से प्रकाशित। * संपादक- चंद्रशेखर मिश्रा। समस्त विवादों का न्याय क्षेत्र दिल्ली मान्य होगा।
        </p>
      </div>
    </div>
  );
}

export default Page16;
