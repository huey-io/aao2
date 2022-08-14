import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};

const
    originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'],
    originalPages = [{ text: "Section 1" }, { text: "Section 2" }, { text: "Section 3" }];

const Home = () => {
    const
        [sectionsColor, setsectionsColor] = useState([...originalColors]),
        [fullpages, setfullpages] = useState([...originalPages]);

    const
        onLeave = (origin, destination, direction) => {
            console.log("onLeave", { origin, destination, direction });
            // arguments are mapped in order of fullpage.js callback arguments do something
            // with the event
        },

        handleChangeColors = () => {
            const newColors =
                sectionsColor[0] === "yellow"
                    ? [...originalColors]
                    : ["yellow", "blue", "white"];
            return setsectionsColor(newColors);
        },

        handleAddSection = () => {
            const { length } = fullpages;
            fullpages.push({
                text: `section ${length + 1}`,
                id: Math.random()
            });
            return setfullpages([...fullpages])
        },

        handleRemoveSection = () => {
            const newPages = [...fullpages];
            newPages.pop();
            return setfullpages(newPages)
        },

        moveSectionDown = () => {
            return fullpage_api.moveSectionDown();
        };

    const Menu = () => (
      <div className="fixed top-0 inset-x-0 p-6 z-10">
        <div className="flex justify-between items-center">
          <span className="font-bold text-3xl">AAAAAAO</span>
          <span className="text-lg font-semibold">info@aao.com</span>
        </div>
      </div>
        //<div
        //    className="menu"
        //    style={{
        //        position: "fixed",
        //        top: 0,
        //        zIndex: 100
        //    }}
        //>
        //    <ul className="actions">
        //        <li>
        //            <button onClick={handleAddSection}> Add Section </button>
        //            <button onClick={handleRemoveSection}> Remove Section </button>
        //            <button onClick={handleChangeColors}> Change background colors </button>
        //            <button onClick={moveSectionDown}> Move Section Down </button>
        //        </li>
        //    </ul>
        //</div>
    );

    const Footer = () => (
      <footer className="fixed bottom-0 inset-x-0 z-10 p-6">
        <div className="flex justify-between">
          <div className="max-w-xs">
            <p className="font-bold text-lg">
            Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
            </p>
            <p className="text-sm font-light">© {new Date().getFullYear()} AAO things</p>
            <p className="font-semibold mt-2 text-lg">Privacy Policy</p>
          </div>
        </div>
      </footer>
    )

    return (
        <div className="App">
            <Head>
                <title>My styled page</title>
                <link href="/static/styles.css" rel="stylesheet" />
            </Head>
            <Menu />
            <ReactFullpage
                navigation
                pluginWrapper={pluginWrapper}
                onLeave={onLeave}
                scrollHorizontally = {true}
                sectionsColor={sectionsColor}
                render={() =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                            {/*{fullpages.map(({ text }) => (
                                <div key={text} className="section">
                                    <h1>{text}</h1>
                                </div>
                            ))}*/}
                            <div className="section flex items-center justify-center">
                              <h1>we could add any contkkent here</h1>
                            </div>
                            <div className="section flex items-center justify-center">
                              <h1>we could add any contkkent here</h1>
                            </div>
                            <div className="section flex items-center justify-center">
                              <h1>we could add any contkkent here</h1>
                            </div>
                            <div className="section flex items-center justify-center">
                              <h1>we could add any contkkent here</h1>
                            </div>
                            <div className="section flex items-center justify-center">
                              <h1>we could add any contkkent here</h1>
                            </div>
                            <div className="section flex items-center justify-center">
                              <h1>we could add any contkkent here</h1>
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
            <Footer />
        </div>
    );
}

export default Home;