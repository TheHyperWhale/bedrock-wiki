import{r as t,o as e,c as n,b as a,w as s,d as o}from"./app.4a348b8b.js";const l='{"title":"Entity Holds Item","description":"","frontmatter":{"layout":"page","title":"Entity Holds Item","parent":"Tutorials","badge":"NEW","badge_color":"blue"},"headers":[{"level":2,"title":"Setting up the model in blockbech","slug":"setting-up-the-model-in-blockbech"},{"level":2,"title":"Setting up behaviorpack-side entity","slug":"setting-up-behaviorpack-side-entity"},{"level":2,"title":"Setting up the loot table","slug":"setting-up-the-loot-table"}],"relativePath":"tutorials/entity-holds-item.md","lastUpdated":1617465201083}',i={},p=a("h1",{id:"entity-holds-item"},[a("a",{class:"header-anchor",href:"#entity-holds-item","aria-hidden":"true"},"#"),o(" Entity Holds Item")],-1),r=o("Intermediate"),c=o("This tutorial assumes you have a basic understanding of entities, loot tables and Blockbench. Make sure to check out the "),u=a("a",{href:"/guide/custom-entity-full"},"tutorial",-1),h=o(" on entities, the "),d=a("a",{href:"/guide/loot_tables-recipes-spawn_rules"},"tutorial",-1),m=o(" on loot tables and the "),k=a("a",{href:"/concepts/creating-entity-visuals"},"tutorial",-1),b=o(" on blockbench before starting this tutorial."),g=a("p",null,[o("In this tutorial you will learn to have an entity spawn with an item in its hand. I'll be using a custom "),a("code",null,"mandalorian_armorer' entity and a custom "),o("hammer` item for the examples.")],-1),y=a("h1",{id:"basic-usage"},[a("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),o(" Basic Usage")],-1),f=a("p",null,"This section covers the main features of entities for them to spawn with an item in their hand.",-1),v=a("h2",{id:"setting-up-the-model-in-blockbech"},[a("a",{class:"header-anchor",href:"#setting-up-the-model-in-blockbech","aria-hidden":"true"},"#"),o(" Setting up the model in blockbech")],-1),w=a("p",null,"First of all, you'll need to have a model in Blockbench that has a map called 'rightArm'. Within this map, there needs to be a submap called 'rightItem'. Position the pivot point of this submap so it sits in the place you want the entity to hold the item at.",-1),_=a("p",null,[a("img",{src:"/bedrock-wiki-vite/assets/images/tutorials/entity-holds-item/blockbench.png",alt:""})],-1),I=a("h2",{id:"setting-up-behaviorpack-side-entity"},[a("a",{class:"header-anchor",href:"#setting-up-behaviorpack-side-entity","aria-hidden":"true"},"#"),o(" Setting up behaviorpack-side entity")],-1),j=a("p",null,[o("Now you'll need to add a "),a("code",null,"minecraft:equipment"),o(" component in the component list for you entity and add a loot table with the desired item.")],-1),S=a("p",null,"In our example it will look like this:",-1),B=a("p",null,'{% include filepath.html path="BP/entity/mandolorian.json"%}',-1),P=a("div",{class:"language-json"},[a("pre",null,[a("code",null,[a("span",{class:"token property"},'"components"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"{"),o("\n    "),a("span",{class:"token property"},'"minecraft:equipment"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"{"),o("\n        "),a("span",{class:"token property"},'"table"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},'"loot_tables/entities/gear/mandolorian.json"'),o("\n    "),a("span",{class:"token punctuation"},"}"),o("\n"),a("span",{class:"token punctuation"},"}"),o("\n")])])],-1),T=a("h2",{id:"setting-up-the-loot-table"},[a("a",{class:"header-anchor",href:"#setting-up-the-loot-table","aria-hidden":"true"},"#"),o(" Setting up the loot table")],-1),x=a("p",null,[o("Finally, add the loot table for the entity. It needs to be in "),a("code",null,"loot_tables/entities/<your_loot_table_name>.json"),o(" in the behavior pack. In our case, it's called "),a("code",null,"mandolorian.json"),o(".")],-1),E=a("p",null,[a("code",null,"Warning:"),o(" This isn' the same loot table as what it drops on death. So make sure it has a different name. To have the entity always spawn with the same item, add the following loot table:")],-1),H=a("p",null,'{% include filepath.html path="BP/loot_tables/entities/gear/mandolorian.json"%}',-1),W=a("div",{class:"language-json"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),o("\n  "),a("span",{class:"token property"},'"pools"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"["),o("\n    "),a("span",{class:"token punctuation"},"{"),o("\n      "),a("span",{class:"token property"},'"rolls"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),o("\n      "),a("span",{class:"token property"},'"entries"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"["),o("\n        "),a("span",{class:"token punctuation"},"{"),o("\n          "),a("span",{class:"token property"},'"type"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},'"item"'),a("span",{class:"token punctuation"},","),o("\n          "),a("span",{class:"token property"},'"name"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},'"dd:hammer"'),a("span",{class:"token punctuation"},","),o(),a("span",{class:"token comment"},"// Custom item named 'hammer' with the identifier 'dd'."),o("\n          "),a("span",{class:"token property"},'"weight"'),a("span",{class:"token operator"},":"),o(),a("span",{class:"token number"},"1"),o("\n        "),a("span",{class:"token punctuation"},"}"),o("\n      "),a("span",{class:"token punctuation"},"]"),o("\n    "),a("span",{class:"token punctuation"},"}"),o("\n  "),a("span",{class:"token punctuation"},"]"),o("\n"),a("span",{class:"token punctuation"},"}"),o("\n")])])],-1),q=a("p",null,"If everything went well, you'll have something looking like this:",-1),F=a("p",null,[a("img",{src:"/bedrock-wiki-vite/assets/images/tutorials/entity-holds-item/finished_result.png",alt:""})],-1);i.render=function(o,l,i,N,U,A){const C=t("Label"),L=t("Panel");return e(),n("div",null,[p,a(C,{color:"yellow"},{default:s((()=>[r])),_:1}),a(L,{type:"notice"},{default:s((()=>[c,u,h,d,m,k,b])),_:1}),g,y,f,v,w,_,I,j,S,B,P,T,x,E,H,W,q,F])};export default i;export{l as __pageData};