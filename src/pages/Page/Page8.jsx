import React from "react";
import page8img from "../../assets/page8img.jpeg";

function Page8() {
  return (
    <div id="page8">
      <div className="flex justify-end">
        <h1 className="text-[50px] border-2 rounded-xl text-[#ff8a1c] border-[#ff8a1c] px-3 inline mr-8">
          वैदिक-ज्ञानम्
        </h1>
      </div>
      <div className="m-7 grid grid-cols-2 max-[600px]:grid-cols-1">
        <div>
          <img src={page8img} alt="" className="rounded-xl" />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[60px] text-[#ff8a1c] font-rozha">
            वेदस्य अर्थः ज्ञानम्
          </p>
        </div>
      </div>
      <div className="m-7 bg-[#ffa21776] rounded-xl p-3 text-center">
        <p className="font-rozha text-[22px]">
          प्रत्येकस्य व्यक्तिस्य शरीरे विद्यमाना एषा आन्तरिकबुद्धिः स्वस्य
          पूर्णसङ्गठनशक्तिं प्रदर्शयितुं प्राकृतिकनियमानां ऊर्ध्वदिशि मानवजीवनं
          व्यवहारं च विकसितुं पूर्णतया सक्रियं कर्तुं शक्यते, एतत् कृत्वा कोऽपि
          व्यक्तिः प्राकृतिकनियमानां स्वामी भवितुम् अर्हति न उल्लङ्घनं करोति तथा
          च कोऽपि व्यक्तिः स्वस्य वा समाजे अन्यस्य वा कृते दुःखस्य भूमिं न
          सृजति। यदा वयं वैदिकप्रक्रियाभिः बुद्धिं जीवन्तं कुर्मः तदा वयं
          जीवनस्य त्रयः अपि क्षेत्राणि युगपत् जीवन्तं कुर्मः : आध्यात्मिक
          (चेतनायाः पारलौकिकस्तरः), आध्यात्मिकः (चेतनायाः बौद्धिकः मानसिकः च
          स्तरः) आध्यात्मिकः (भौतिकशरीरं शासयति इति चैतन्यम् - भौतिक सृष्टिः)
          एकत्र जीवति।
        </p>
      </div>
      <div className="grid grid-cols-3 break-words whitespace-normal text-justify leading-relaxed gap-4 m-7 max-[650px]:grid-cols-1 border-b-8 rounded-xl border-[#ff8a1c] pb-6">
        <div>
          <p>
            <span class="text-[55px] text-orange-500">वे</span>
            दस्य अर्थः ज्ञानम्, वैदिकमार्गस्य अर्थः सः मार्गः यः ज्ञानाधारितः
            अस्ति - पूर्णज्ञानम् - शुद्धज्ञानम् - प्राकृतिकनियमस्य पूर्णशक्तिः,
            सः एव सृष्टेः प्रशासनस्य च मुख्यः आधारः, यः सृष्टेः अनन्तविविधतायाः
            पूर्णक्रमं प्रदाति अत एव वेदाः अपि जगतः संविधानम् इति उच्यन्ते।
            प्राकृतिकनियमस्य एषा आन्तरिकबुद्धिः व्यक्तिगतस्तरस्य मानवशरीरस्य
            संरचनायाः कार्यस्य च आधारः भवति तथा च तत्सहकालं स्थूलस्तरस्य
            ब्रह्माण्डीयसंरचनायाः सृष्टेः च आधारः भवति यथा मानवस्य शरीररचना तथा
            विश्वम् ।<br />
            <br />
            <b className="text-center block">'शरीराणां विश्वं च इव' ।</b>
            <br />
            प्रत्येकस्य व्यक्तिस्य शरीरे विद्यमाना एषा आन्तरिकबुद्धिः स्वस्य
            पूर्णसङ्गठनशक्तिं प्रदर्शयितुं प्राकृतिकनियमानां ऊर्ध्वदिशि
            मानवजीवनं व्यवहारं च विकसितुं पूर्णतया सक्रियं कर्तुं शक्यते, एतत्
            कृत्वा कोऽपि व्यक्तिः प्राकृतिकनियमानां स्वामी भवितुम् अर्हति न
            उल्लङ्घनं करोति तथा च कोऽपि व्यक्तिः स्वस्य वा समाजे अन्यस्य वा कृते
            दुःखस्य भूमिं न सृजति। यदा वयं वैदिकप्रक्रियाभिः बुद्धिं जीवन्तं
            कुर्मः तदा वयं जीवनस्य त्रयः अपि क्षेत्राणि युगपत् जीवन्तं कुर्मः
            आध्यात्मिक (चेतनायाः पारलौकिकस्तरः),
          </p>
        </div>
        <div>
          <p>
            {" "}
            आध्यात्मिकः (चेतनायाः बौद्धिकः मानसिकः च स्तरः) आध्यात्मिकः
            (भौतिकशरीरं शासयति इति चैतन्यम् - भौतिक सृष्टिः) एकत्र जीवति।
            प्राकृतिकनियमस्य सिद्धिः प्रत्येकस्य व्यक्तिस्य आत्मा अस्ति। इदं
            सुप्तं पारमार्थिकं च यतोहि तस्मिन् स्तरे तस्मिन् स्तरे चैतन्यस्य
            सर्वाणि सम्भावनाः जागृताः एव तिष्ठन्ति - एषा चैतन्यस्य सम्पूर्णा
            व्यक्तिपरकदशा - विषयत्वस्य, वस्तुनिष्ठतायाः, तेषां सम्बन्धानां च
            सर्वेषां मूल्यानां एकीकृता अवस्था।
            <br />
            चैतन्यस्य एतत् सम्पूर्णं व्यक्तिपरकं स्वरूपं वैदिकसाहित्यस्य ४०
            क्षेत्रेषु वर्गीकृतानां बुद्धिगुणानां ४० सन्दर्भे सुविश्लेषितं
            परीक्षणं च कृतम् अस्ति तथा च महर्षिजी इत्यस्य दिव्यमार्गदर्शने एतानि
            ४० क्षेत्राणि वैज्ञानिकैः भागरूपेण विकसितानि सन्ति मानवशरीरविज्ञानम्
            आधारे अन्वेषितम् अस्ति।
            <br />
            एषः एव जीवनः यः प्राकृतिकनियमस्य अनुसरणं करोति – त्रुटिरहितं जीवनं
            समस्या-दुःख-रहितं जीवनं च। अस्य आधारेण वयं निष्कर्षं प्राप्नुमः यत्
            अस्माभिः वैदिकमार्गः स्वीक्रियताम्, वैदिकज्ञानस्य आधारेण व्यक्तिं,
            समाजं, भारतं च आदर्शं कर्तुं अस्माकं योजनाः कार्यक्रमाः च करणीयाः।
            <br />
            एषा वैज्ञानिक अन्वेषणं अस्माकं स्पष्टं बोधं ददाति यः प्रत्येकः
            व्यक्ति जीवंत वेदः अस्ति - प्रत्येकः व्यक्ति वेदस्य अभिव्यक्ति
            अस्ति। एषः बोधः आधारभूत्य अत्र निष्कर्षं प्राप्नुमः यः - वैदिक
            पद्धति जीवनस्य एकीकरणं, पूर्णतां च प्रगति च प्रत्यक्षं पद्धतिः
            अस्ति।
          </p>
        </div>
        <div>
          <p>
            ऋषि-देव-छन्दानां गुणानुसारं महर्षिजी वेद-वैदिक-साहित्यस्य सर्वाणि ४०
            क्षेत्राणि एकस्मिन् रेखाचित्रे एव निर्मितवन्तः। एते 40 क्षेत्राणि
            निम्नलिखितरूपेण सन्ति- ऋग्वेदः, सामवेदः, यजुर्वेदः, अथर्ववेदः,
            शिक्षा, कल्पः, व्याकरणम्, ज्योतिषम्, छन्दः, निरुक्तम्, न्यायः,
            वैशेषिकम्, सांख्यः, वेदान्तः, कर्ममीमांसा, योगः, गन्धर्ववेदः,
            धनुरवेदः, वेदः, कश्यप संहिता, भेल संहिता, हरित संहिता, चरक संहिता,
            सुश्रुत संहिता, वाग्भट्ट संहिता, भवप्रकाश संहिता, शग्गधर संहिता,
            माधव निदान संहिता, उपनिषदः, आरण्यक, ब्राह्मण, स्मृति, पुराण,
            इतिहासः, प्रतिशाखम्, शुक्ल यजुर्वेदः प्रतिशाख्य, अथर्ववेद
            प्रतिशाख्य, सामवेद प्रतिशाख्य (पुष्प सूत्रमधा), कृष्ण यजुर्वेद
            प्रतिशाख्य (तैत्तिरीय), अथर्ववेद प्रतिशाख्य (चतुर्ध्यायी)।
            <br />
            वेदवैदिकसाहित्यस्य एतेभ्यः ४० क्षेत्रेभ्यः कला, विज्ञान इत्यादयः
            ज्ञानक्षेत्राणि उत्पन्नानि सन्ति । अतः अत्यन्तं महत्त्वपूर्णं यत् यः
            कश्चित् ज्ञानक्षेत्रम् अधीते सः वेदस्य सम्पूर्णज्ञानस्य
            मौलिकसिद्धान्तान् अवश्यं अध्ययनं करोति । ज्ञानक्षेत्रस्य विशिष्टस्य
            अध्ययनं अपूर्णम् अस्ति । सिद्धेः परं जीवनस्य वास्तविकता। अद्यत्वे
            प्रत्येकस्मिन् क्षेत्रे असफलतायाः मूलं एतत् एव । अपूर्णं ज्ञानं
            भयङ्करं भवति। व्यक्तिनां, सर्वेषां राष्ट्रानां, सर्वेषां धर्मानां,
            सर्वेषां विश्वासानां निष्ठानां च अन्येषां बहूनां प्रवृत्तीनां च
            सर्वेषां असन्तुष्टीनां, शोकस्य, तनावस्य, दबावस्य, अशान्तिस्य,
            रोगस्य, अपराधस्य, संघर्षस्य, युद्धस्य, आत्महत्यायाः, असफलतायाः च
            मूलकारणम् अस्ति।
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page8;
