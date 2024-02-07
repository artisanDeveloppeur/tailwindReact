import { Accordion } from "src/components/Navigation/Accordion/Faq";
import { Tab } from "src/components/Navigation/Tabs/Tab";

export function Home() {

  return <>
    <div className="grid grid-cols-1 gap-4">
      <h1 className="flex justify-center	mb-6 pl-6 text-3xl font-bold">Design system</h1>
    </div >

    <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
      <div>
        <h2 className="mb-6 pl-6 font-bold">Frequently asked questions</h2>
        <p className="component__decription">Accordion is a vertically collapsing element to show and hide content via class changes.</p>
        <Accordion />



      </div>

      <div>
        <Tab />
      </div>
    </div>


  </>
}