if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.md.83003d1e.js",revision:"8dd707c31c6b3c1b591579355e7affff"},{url:"assets/404.md.83003d1e.lean.js",revision:"508af461e63766b2333e377f00f69033"},{url:"assets/AlgoliaSearch.dd3b3840.js",revision:"bf5749e87ea4b0215439f6482cff1c70"},{url:"assets/animation-controllers_animation-controllers.md.5b8af590.js",revision:"e833527e69f836a90b8bc05d466e292e"},{url:"assets/animation-controllers_animation-controllers.md.5b8af590.lean.js",revision:"e833527e69f836a90b8bc05d466e292e"},{url:"assets/animation-controllers_beginners-guide.md.703455cb.js",revision:"4e0d97f30e47a98d1ca7756449f530be"},{url:"assets/animation-controllers_beginners-guide.md.703455cb.lean.js",revision:"4e0d97f30e47a98d1ca7756449f530be"},{url:"assets/animation-controllers_death-effects.md.bce12489.js",revision:"213f3242c00d932c7e6255b856be6a32"},{url:"assets/animation-controllers_death-effects.md.bce12489.lean.js",revision:"5dbcad33b408348b1f53957e45429ab4"},{url:"assets/animation-controllers_entity-commands.md.b6e3dc8e.js",revision:"1fb485cc42fb91dad98a111076e6da90"},{url:"assets/animation-controllers_entity-commands.md.b6e3dc8e.lean.js",revision:"f0d20cb7b116ed37773add5aa8e6c49e"},{url:"assets/animation-controllers_index.md.ab827e71.js",revision:"ac65119fe96a561f40f8febb5a48e4da"},{url:"assets/animation-controllers_index.md.ab827e71.lean.js",revision:"ac65119fe96a561f40f8febb5a48e4da"},{url:"assets/animation-controllers_respawn-commands.md.e6422b16.js",revision:"e25e1488f7088409d36b326f8ea38ef5"},{url:"assets/animation-controllers_respawn-commands.md.e6422b16.lean.js",revision:"eecfc42b2d084233752b9d6036f19199"},{url:"assets/app.b7ad1e10.js",revision:"12a7353d3a91d68391bf7b7eda2775e9"},{url:"assets/behavior_pack_applied.f329cc9a.js",revision:"a1ba2e5fc8ce09892852e3e7151cb27d"},{url:"assets/blocks_block-materials.md.8c000f8e.js",revision:"24c10e7277bcac9602b4777f9496be16"},{url:"assets/blocks_block-materials.md.8c000f8e.lean.js",revision:"859a19b48b482a48b599e097a1f49934"},{url:"assets/blocks_block-shapes.md.ad267351.js",revision:"540d73e2d1ac713381789ec0adb01a04"},{url:"assets/blocks_block-shapes.md.ad267351.lean.js",revision:"d68a75f86418df772bcefdeaf825ef36"},{url:"assets/blocks_block-tags.md.d94cd560.js",revision:"5b07d81ce2d468ff431a91aba9ed138d"},{url:"assets/blocks_block-tags.md.d94cd560.lean.js",revision:"a87bf36d7c1e938da7529c3dab7f5408"},{url:"assets/blocks_block-texture-variation.md.0d79318e.js",revision:"21d0bd2944d719b2d79cbcbfad225980"},{url:"assets/blocks_block-texture-variation.md.0d79318e.lean.js",revision:"56fa06562dec37caa8e28d0f90ad057b"},{url:"assets/blocks_documentation.md.3ff4c712.js",revision:"75e8093846350c475b1df64ef8c27058"},{url:"assets/blocks_documentation.md.3ff4c712.lean.js",revision:"18ccdda0af1842ca7e9ec6333ed7b259"},{url:"assets/blocks_fake-blocks.md.e7c74c91.js",revision:"13a2b5056a489ab26c583ef02088f76a"},{url:"assets/blocks_fake-blocks.md.e7c74c91.lean.js",revision:"2b97b79f95e9e895a7c242086610fb31"},{url:"assets/blocks_guide.md.b8cc7a0b.js",revision:"20b26b073b36ad0b23f3e78357c13b79"},{url:"assets/blocks_guide.md.b8cc7a0b.lean.js",revision:"20b26b073b36ad0b23f3e78357c13b79"},{url:"assets/blocks_index.md.d4a94f23.js",revision:"397e43339d1252f57797c1cdf12cdd45"},{url:"assets/blocks_index.md.d4a94f23.lean.js",revision:"397e43339d1252f57797c1cdf12cdd45"},{url:"assets/commands_beginner-commands.md.18137cb1.js",revision:"da62c4d0018ce6dd1c483331d9a73684"},{url:"assets/commands_beginner-commands.md.18137cb1.lean.js",revision:"18f69dc562c84ddce7368f1ccf25a269"},{url:"assets/commands_index.md.4b771c37.js",revision:"9060a66dc95600ca32d56947f6661fc0"},{url:"assets/commands_index.md.4b771c37.lean.js",revision:"9060a66dc95600ca32d56947f6661fc0"},{url:"assets/commands_mcfunction.md.e187312f.js",revision:"201222d20b79cad9fba8e2b18db1ce56"},{url:"assets/commands_mcfunction.md.e187312f.lean.js",revision:"692c8b76db862a2f13124ea864d54fe2"},{url:"assets/commands_nbt-commands.md.91018f7c.js",revision:"d6a6451956f92b0b00816f3665d19f6d"},{url:"assets/commands_nbt-commands.md.91018f7c.lean.js",revision:"a22a84215412940cdc83925202292ec7"},{url:"assets/concepts_bedrock-modeling.md.a34ccba9.js",revision:"a0e9c99fd9678c9a682f5b04cb22123c"},{url:"assets/concepts_bedrock-modeling.md.a34ccba9.lean.js",revision:"16ba1cf02593beada49bb77324d2e99e"},{url:"assets/concepts_entity-properties.md.08ca33b5.js",revision:"f870aa69dd6a6f2c1822ce455576ffce"},{url:"assets/concepts_entity-properties.md.08ca33b5.lean.js",revision:"8346e5b2f0075799b7e6af0da329d258"},{url:"assets/concepts_format-version.md.d22d7b35.js",revision:"eb7d04cb486e219ab5393f69905870eb"},{url:"assets/concepts_format-version.md.d22d7b35.lean.js",revision:"680426dd15bb36e746f4b5b87f12d5f5"},{url:"assets/concepts_index.md.5f40b155.js",revision:"e7135050aa58a3a17c66f971d1784585"},{url:"assets/concepts_index.md.5f40b155.lean.js",revision:"e7135050aa58a3a17c66f971d1784585"},{url:"assets/concepts_json-ui.md.80d77806.js",revision:"de3fdadd935df4f04002ff5a1ad457d2"},{url:"assets/concepts_json-ui.md.80d77806.lean.js",revision:"0c70714cfdf4a8d7977f4dcb6aea1a55"},{url:"assets/concepts_lang.md.110e6791.js",revision:"76d81f0096f9690771625567225b1ac0"},{url:"assets/concepts_lang.md.110e6791.lean.js",revision:"a81cb03a5c811608cbada12d8b5b02ff"},{url:"assets/concepts_materials.md.b99e854b.js",revision:"de5e27c6a7c73c81a57c980452bdc972"},{url:"assets/concepts_materials.md.b99e854b.lean.js",revision:"d3e23b65eb3ddbe23d913bf8f46d21a6"},{url:"assets/concepts_math-based-animations.md.71d15a69.js",revision:"4ef98333e2638f1c4896127c8409578a"},{url:"assets/concepts_math-based-animations.md.71d15a69.lean.js",revision:"a5f6491e7fbcce9e6be836acefa49d2a"},{url:"assets/concepts_mcstructure.md.2ab557e8.js",revision:"6ae658106584a9fe3312c3f2a68d4bdf"},{url:"assets/concepts_mcstructure.md.2ab557e8.lean.js",revision:"c308eb5d5a9f124dd581fdc797bf162e"},{url:"assets/concepts_namespaces.md.96efebbc.js",revision:"c889a1ad7c76373ea59fa0c252bd1648"},{url:"assets/concepts_namespaces.md.96efebbc.lean.js",revision:"b09c1956dbeb7bdd6214750229eff094"},{url:"assets/concepts_render-controller.md.926782d3.js",revision:"3574d3b3e789142ab126aa30ff22d1c8"},{url:"assets/concepts_render-controller.md.926782d3.lean.js",revision:"efdfeda0ae77114373ac2355c78257f6"},{url:"assets/concepts_shaders.md.71732a4f.js",revision:"120ecbf88723903dcd71075b9bd5e972"},{url:"assets/concepts_shaders.md.71732a4f.lean.js",revision:"120ecbf88723903dcd71075b9bd5e972"},{url:"assets/concepts_sounds.md.60ec928a.js",revision:"827054e336e80b17b6b33f957b9a27fe"},{url:"assets/concepts_sounds.md.60ec928a.lean.js",revision:"c854af950e7479cc7bd4223ffd6609c4"},{url:"assets/concepts_textures-list.md.43e6f601.js",revision:"533e753b1e33c5bd3d99cc10457bb32a"},{url:"assets/concepts_textures-list.md.43e6f601.lean.js",revision:"d7ff813df245b52b0c9f3ff61e29ddf3"},{url:"assets/contribute.md.3a42a9bd.js",revision:"8ee4ef83f4b4bdc86563c8a676b1daaa"},{url:"assets/contribute.md.3a42a9bd.lean.js",revision:"733a42b3d538e7a4b142cc7052d6b214"},{url:"assets/create_entity_animation_4.4fc3d031.js",revision:"fd1b2a78670ab2b86267b6143ac801fb"},{url:"assets/discord.md.42000c38.js",revision:"6f848a9556507e34c57c1265190f8588"},{url:"assets/discord.md.42000c38.lean.js",revision:"6f848a9556507e34c57c1265190f8588"},{url:"assets/documentation_color-codes.md.46f208de.js",revision:"d5b8dc09e02de85d4ba4dc5b35df6317"},{url:"assets/documentation_color-codes.md.46f208de.lean.js",revision:"077ddac66cd460255cdfb0431dcf0c45"},{url:"assets/documentation_dummy-components.md.2f9bed9a.js",revision:"9606c72c88ea4cd2ad65a48ebc3f9517"},{url:"assets/documentation_dummy-components.md.2f9bed9a.lean.js",revision:"5883ee8b7300ef7b49132aabca8fde4a"},{url:"assets/documentation_emojis.md.c5db2b8f.js",revision:"4f2fdb110f4e50feb0c911307bc9de71"},{url:"assets/documentation_emojis.md.c5db2b8f.lean.js",revision:"4f2fdb110f4e50feb0c911307bc9de71"},{url:"assets/documentation_fog-ids.md.afcef20e.js",revision:"b40ba9af17f3808795c2e5d357d87ff0"},{url:"assets/documentation_fog-ids.md.afcef20e.lean.js",revision:"b1b4768691295b8c8593ac851ac9dbfa"},{url:"assets/documentation_index.md.0eefcbca.js",revision:"7cad0b986c99a1a565b12f94c9c09100"},{url:"assets/documentation_index.md.0eefcbca.lean.js",revision:"7cad0b986c99a1a565b12f94c9c09100"},{url:"assets/documentation_json-ui.md.b0bdc4ce.js",revision:"4febb0fca6b6c960f37f050e0a8510b3"},{url:"assets/documentation_json-ui.md.b0bdc4ce.lean.js",revision:"d9dc49f632b5142360878376cb0ecf23"},{url:"assets/documentation_materials.md.808415e8.js",revision:"417f29fdb65fba95acd9d6c5bff7a6ab"},{url:"assets/documentation_materials.md.808415e8.lean.js",revision:"ef2cc7e537de2bfac23e482172abaf9b"},{url:"assets/documentation_particles.md.f4b62a49.js",revision:"b844d3f859f60256fa81da53ef98c1f1"},{url:"assets/documentation_particles.md.f4b62a49.lean.js",revision:"fd1d5bcb6eb6eb3be1111b2485fd47ab"},{url:"assets/documentation_projectiles.md.9b411c21.js",revision:"cdbdf0c6df7e0c66ca7230b79918512f"},{url:"assets/documentation_projectiles.md.9b411c21.lean.js",revision:"e38fc038ca48edb1e8d788e44b4e0543"},{url:"assets/documentation_queries.md.305784d5.js",revision:"f940ea4591b378bcd39082dcdf3ef821"},{url:"assets/documentation_queries.md.305784d5.lean.js",revision:"4859f2656d58b83fa129fb82c766895b"},{url:"assets/documentation_runtime-identifier.md.a8285f9a.js",revision:"fb8593dfd2c471de854a788731fae162"},{url:"assets/documentation_runtime-identifier.md.a8285f9a.lean.js",revision:"43fa39ca9d87e1fd925fe15e7506df2e"},{url:"assets/documentation_sound-definitions.md.61c63f99.js",revision:"8b4d7c6cd2c617a0e17c67b6071c4f48"},{url:"assets/documentation_sound-definitions.md.61c63f99.lean.js",revision:"4ac52465e6eb63869708ef9e5d8f88cd"},{url:"assets/documentation_subpacks.md.123790d5.js",revision:"6d451587948276b11de878d5ae585b3a"},{url:"assets/documentation_subpacks.md.123790d5.lean.js",revision:"8371d50d4f4840a3ec2b43d8371159af"},{url:"assets/documentation_tellraw.md.10106164.js",revision:"89f4e3d99a2f5c31dbd3a4d3fa08b2b9"},{url:"assets/documentation_tellraw.md.10106164.lean.js",revision:"89f4e3d99a2f5c31dbd3a4d3fa08b2b9"},{url:"assets/entities_boat-entities.md.58fbff65.js",revision:"79aabd4f28c658b11902b0ae8e590e5c"},{url:"assets/entities_boat-entities.md.58fbff65.lean.js",revision:"ca3d3d837dd99baa3ee79c4cc246840c"},{url:"assets/entities_cancelling-death-animations.md.73b9440e.js",revision:"bf8783170ab59b61e8d692d835099c28"},{url:"assets/entities_cancelling-death-animations.md.73b9440e.lean.js",revision:"d88649f8a02e31bb90ea131599f0f3aa"},{url:"assets/entities_components-events-groups.md.b7cb87f5.js",revision:"e3c552b53688f53de514145bf0b42b4c"},{url:"assets/entities_components-events-groups.md.b7cb87f5.lean.js",revision:"bf1de5fa146171c161c42d7c8a17ce0e"},{url:"assets/entities_dummy-entities.md.20affc25.js",revision:"686688e47c590a8beb9127aae9d1b72a"},{url:"assets/entities_dummy-entities.md.20affc25.lean.js",revision:"af583bd1188db8ba2847f6707b89f59d"},{url:"assets/entities_entity-events.md.c54d6e0e.js",revision:"ded4631e3871a01156d1bb59346f4e1d"},{url:"assets/entities_entity-events.md.c54d6e0e.lean.js",revision:"cacee464c19c1d7963331471398dc641"},{url:"assets/entities_entity-holds-item.md.b458e301.js",revision:"2a27bc2c82ebf0391b1c88194f1f2ae1"},{url:"assets/entities_entity-holds-item.md.b458e301.lean.js",revision:"2a27bc2c82ebf0391b1c88194f1f2ae1"},{url:"assets/entities_entity-movement.md.6ae641d4.js",revision:"be3d7bf483fbbf2776db510fdb3068b6"},{url:"assets/entities_entity-movement.md.6ae641d4.lean.js",revision:"c555d372c6eb39956de8683f089e2ad6"},{url:"assets/entities_flying-entities.md.1d019f7f.js",revision:"289cf468a0053af545c2507def0a5320"},{url:"assets/entities_flying-entities.md.1d019f7f.lean.js",revision:"ca85b2a9d604ae974247a995052ef7df"},{url:"assets/entities_index.md.dcdfc18c.js",revision:"63402e4ec2aa5f8ae869c81b46b5dbe9"},{url:"assets/entities_index.md.dcdfc18c.lean.js",revision:"63402e4ec2aa5f8ae869c81b46b5dbe9"},{url:"assets/entities_invulnerable-entities.md.03c4fe73.js",revision:"3b912ac3dd10fd052a3934107a4aa48f"},{url:"assets/entities_invulnerable-entities.md.03c4fe73.lean.js",revision:"fd9828cebbd850c6b914715ae082e9d2"},{url:"assets/entities_pathfinding-entities.md.3889e452.js",revision:"ca8f4b4988521ed8b7281f1ac2fed4d8"},{url:"assets/entities_pathfinding-entities.md.3889e452.lean.js",revision:"dcd9127a2492ebeaa56105bf4ad8a0f4"},{url:"assets/entities_render-controller.md.b89f4954.js",revision:"773bd5820275dbc68fd678fedb29ded1"},{url:"assets/entities_render-controller.md.b89f4954.lean.js",revision:"1124be395afc434a394663b4896dc0e8"},{url:"assets/entities_solid-entities.md.7cfe915f.js",revision:"a2d80bdc4500e7db1e6e2494038319ac"},{url:"assets/entities_solid-entities.md.7cfe915f.lean.js",revision:"e67eedaba1ded2254c5ab7a68d62c45a"},{url:"assets/entities_timers.md.47348282.js",revision:"6e9a468dd3f3332c90a7908d4a838163"},{url:"assets/entities_timers.md.47348282.lean.js",revision:"551fde25d4b8fb1f6fc7a75d75f533db"},{url:"assets/entities_troubleshooting.md.2ddf1fcb.js",revision:"24eeb32c19ae915861c4ad181f545286"},{url:"assets/entities_troubleshooting.md.2ddf1fcb.lean.js",revision:"689f838ead72fc3b7476b10eea12d4f0"},{url:"assets/guide_appendix.md.f41db309.js",revision:"828eb88ff03d428a543c0d6341dc9b13"},{url:"assets/guide_appendix.md.f41db309.lean.js",revision:"0674e7b9d9bf9a6373f18e2c62a31862"},{url:"assets/guide_creating-entity-visuals.md.ed74366f.js",revision:"85b82d7c047a28380675154b969c3939"},{url:"assets/guide_creating-entity-visuals.md.ed74366f.lean.js",revision:"85b82d7c047a28380675154b969c3939"},{url:"assets/guide_custom-entity-full.md.1694925f.js",revision:"2258db6f7749d0b18bdc47bb2f6fdaa9"},{url:"assets/guide_custom-entity-full.md.1694925f.lean.js",revision:"2258db6f7749d0b18bdc47bb2f6fdaa9"},{url:"assets/guide_custom-particles.md.5921b959.js",revision:"33d58af9052ba11ad514c44efb4c3e6a"},{url:"assets/guide_custom-particles.md.5921b959.lean.js",revision:"33d58af9052ba11ad514c44efb4c3e6a"},{url:"assets/guide_custom-skin-packs.md.057492da.js",revision:"9c9c411a6cc1445849553bfddbd5d4ee"},{url:"assets/guide_custom-skin-packs.md.057492da.lean.js",revision:"9d4d95ad209811d74f6664d07d4b30d8"},{url:"assets/guide_custom-trades.md.7b57f97a.js",revision:"3409ac93bb12643d8e0451e3c5d9dc2d"},{url:"assets/guide_custom-trades.md.7b57f97a.lean.js",revision:"3409ac93bb12643d8e0451e3c5d9dc2d"},{url:"assets/guide_download-packs.md.fc7a69c7.js",revision:"ae59a233209cda3f3585314e3b140434"},{url:"assets/guide_download-packs.md.fc7a69c7.lean.js",revision:"aa51ac51fd37465c5999f0e21e166a08"},{url:"assets/guide_index.md.50df23ae.js",revision:"29750ced28f9842ac1e25d0b87643f8e"},{url:"assets/guide_index.md.50df23ae.lean.js",revision:"52d1f703cb4103311508171ba80280a7"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.0fa1c1e9.js",revision:"9efce8a7640c9b26c22f12590b5c00f9"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.0fa1c1e9.lean.js",revision:"ff6cf4de901d06846b65706810803855"},{url:"assets/guide_project-setup.md.20ff346f.js",revision:"27ca4f8a8079ea41db8efacba2dcd70f"},{url:"assets/guide_project-setup.md.20ff346f.lean.js",revision:"27ca4f8a8079ea41db8efacba2dcd70f"},{url:"assets/guide_render-controllers.md.10678624.js",revision:"b62d9a32217bc5c468169fa6af2f438e"},{url:"assets/guide_render-controllers.md.10678624.lean.js",revision:"b62d9a32217bc5c468169fa6af2f438e"},{url:"assets/guide_software-preparation.md.ea8903d1.js",revision:"27020b59890c5ec1b4d1f26c5a54ae31"},{url:"assets/guide_software-preparation.md.ea8903d1.lean.js",revision:"27020b59890c5ec1b4d1f26c5a54ae31"},{url:"assets/guide_understanding-json.md.52dd8b8d.js",revision:"ea5f19c72c0b150cbb9aed2a7a4c63b8"},{url:"assets/guide_understanding-json.md.52dd8b8d.lean.js",revision:"af9f8a4f1a4e676b9f7cf39a55806a1d"},{url:"assets/index.md.ecb4c000.js",revision:"8f1334190155a0c9025e54836155cd78"},{url:"assets/index.md.ecb4c000.lean.js",revision:"8f1334190155a0c9025e54836155cd78"},{url:"assets/items_3d-items.md.92fa912f.js",revision:"f537b67f9ec261efc962be4417e30032"},{url:"assets/items_3d-items.md.92fa912f.lean.js",revision:"93478abbc361a502c87a6655fcfa159d"},{url:"assets/items_documentation.md.fc286114.js",revision:"120782c7eaebd1a5f3ea90bdf6f640c5"},{url:"assets/items_documentation.md.fc286114.lean.js",revision:"a357638d11a39cfeb10073fdac85f204"},{url:"assets/items_guide.md.63a33720.js",revision:"4d0fe4bc4bb2b2ee4522567f1d462746"},{url:"assets/items_guide.md.63a33720.lean.js",revision:"0a697943a9f2e4f4341b2755d7179818"},{url:"assets/items_index.md.3f525417.js",revision:"d6736d82e92b84d1df6ac8ea1061f160"},{url:"assets/items_index.md.3f525417.lean.js",revision:"d6736d82e92b84d1df6ac8ea1061f160"},{url:"assets/items_item-categories.md.1e5cded5.js",revision:"de778d077ef5c830bee3cb3c1f1336f2"},{url:"assets/items_item-categories.md.1e5cded5.lean.js",revision:"f78c5c50084053828c2c60740778f534"},{url:"assets/items_spawning-items.md.813c7d2a.js",revision:"69f1ed7ab660943038d392a5fc41e893"},{url:"assets/items_spawning-items.md.813c7d2a.lean.js",revision:"09d5c096865d72f02b46242a6461be0e"},{url:"assets/meta_addon-performance.md.ad64c126.js",revision:"4c2761ebf81bfead78a14db97ea5a966"},{url:"assets/meta_addon-performance.md.ad64c126.lean.js",revision:"ab95dd49c2fe5754abff941ed2a1249e"},{url:"assets/meta_addon-programming.md.86ba2877.js",revision:"6d1887338629d192ec4ccf156e719f31"},{url:"assets/meta_addon-programming.md.86ba2877.lean.js",revision:"8a377a82ae87b51fa937f1992f0db5dd"},{url:"assets/meta_index.md.3b09f0b1.js",revision:"a191f3c91015f31a8c7854bf04643d7e"},{url:"assets/meta_index.md.3b09f0b1.lean.js",revision:"a191f3c91015f31a8c7854bf04643d7e"},{url:"assets/meta_jq.md.83b6d084.js",revision:"e6602c568ffc820ede7ec182950df428"},{url:"assets/meta_jq.md.83b6d084.lean.js",revision:"44b5037fe5dee8e57be5ed223d777805"},{url:"assets/meta_style-guide.md.71d9defe.js",revision:"321a1796981533335b17435ce4b6d37d"},{url:"assets/meta_style-guide.md.71d9defe.lean.js",revision:"2708c48f77fbef097d8d65b5f526de05"},{url:"assets/meta_troubleshooting.md.e76d8095.js",revision:"ff4baa5c0579ac126cc7129aa67f23ad"},{url:"assets/meta_troubleshooting.md.e76d8095.lean.js",revision:"7a863ca87b8c03e25b5a30385dc5d1b7"},{url:"assets/meta_useful-links.md.14fadd62.js",revision:"50727453f6edd64ccd82094aad0e5967"},{url:"assets/meta_useful-links.md.14fadd62.lean.js",revision:"8566167cba4e0038cc016bd72782b52a"},{url:"assets/meta_using-schemas.md.5b3086bd.js",revision:"f6b393f5ca6a1328aea781aeaac52c37"},{url:"assets/meta_using-schemas.md.5b3086bd.lean.js",revision:"45606a9ef92da3fd7fc8f050bc5098f2"},{url:"assets/meta_version-control.md.b8960f00.js",revision:"a2b7c746ca77afff14ee048650338ca5"},{url:"assets/meta_version-control.md.b8960f00.lean.js",revision:"f457ccad634795d538a06b91dc6f14b7"},{url:"assets/new-guide_blockbench.md.7eb8e29f.js",revision:"61ecfba057c0179b5b01601b9dd7e00f"},{url:"assets/new-guide_blockbench.md.7eb8e29f.lean.js",revision:"61ecfba057c0179b5b01601b9dd7e00f"},{url:"assets/new-guide_custom-entity.md.136c3fcc.js",revision:"3b43c678d515d1630c6f2894b22a459c"},{url:"assets/new-guide_custom-entity.md.136c3fcc.lean.js",revision:"a01470df31e88bea04e9c093ec6811b8"},{url:"assets/new-guide_custom-item.md.0719a028.js",revision:"7e87ff71266a30aef82794a676c3cc90"},{url:"assets/new-guide_custom-item.md.0719a028.lean.js",revision:"7f52804ba884b0409ef403b0d56213c4"},{url:"assets/new-guide_index.md.ef0b4c10.js",revision:"32792acb1477c3f4e09846e19548827e"},{url:"assets/new-guide_index.md.ef0b4c10.lean.js",revision:"32792acb1477c3f4e09846e19548827e"},{url:"assets/new-guide_introduction.md.a6d73d01.js",revision:"14ba231e43bc7018a460239a1f3abe52"},{url:"assets/new-guide_introduction.md.a6d73d01.lean.js",revision:"39b5d20b6adc01b586440cd31278f416"},{url:"assets/new-guide_loot-spawn-recipes.md.a99c14d6.js",revision:"250e65e8123f14f272609ffd8e3f94e8"},{url:"assets/new-guide_loot-spawn-recipes.md.a99c14d6.lean.js",revision:"d6dae0ccbf19ffb8b3046373ad3beef5"},{url:"assets/new-guide_project-setup.md.ea2d93b8.js",revision:"7f2aa7777de72004e0a4cf3fe87e4536"},{url:"assets/new-guide_project-setup.md.ea2d93b8.lean.js",revision:"7f2aa7777de72004e0a4cf3fe87e4536"},{url:"assets/scripting_game-tests.md.76461c25.js",revision:"b6568ebd1d990a4dffbd4911ace5fb4f"},{url:"assets/scripting_game-tests.md.76461c25.lean.js",revision:"b35ddd3d1ab70af3faa0aa4ae321fcd6"},{url:"assets/scripting_guide.md.d61b9892.js",revision:"b5dd5c73ffe2cdfc2c22014039aa9570"},{url:"assets/scripting_guide.md.d61b9892.lean.js",revision:"305c5dfa1d38070febeba14f4b12d3ec"},{url:"assets/scripting_index.md.a18211c4.js",revision:"e8a9cb4f3f43ef6ab353f7eadf0c51ba"},{url:"assets/scripting_index.md.a18211c4.lean.js",revision:"e8a9cb4f3f43ef6ab353f7eadf0c51ba"},{url:"assets/scripting_saving-loading.md.183636d4.js",revision:"4c34a52e0c40ecad3ed77f2fc8b8ba2b"},{url:"assets/scripting_saving-loading.md.183636d4.lean.js",revision:"f6c9f450853f60e64969839665217205"},{url:"assets/scripting_typescript.md.ed00e2fe.js",revision:"cc7504a6f0123159ad50fd6ad06987a7"},{url:"assets/scripting_typescript.md.ed00e2fe.lean.js",revision:"cc7504a6f0123159ad50fd6ad06987a7"},{url:"assets/style.d5bfc7c7.css",revision:"8a7724a52ecbca0aa1fbe152217cbad1"},{url:"assets/tutorials_craftable-spawneggs.md.caf2baee.js",revision:"fff9ba3566d192b6c08d1d89a61101f1"},{url:"assets/tutorials_craftable-spawneggs.md.caf2baee.lean.js",revision:"8dea131be860a5273ee8f9b60cacefa8"},{url:"assets/tutorials_custom-armor.md.f0c752b5.js",revision:"fdfa4323ed3ce7ffa54504762524f7a9"},{url:"assets/tutorials_custom-armor.md.f0c752b5.lean.js",revision:"fdfa4323ed3ce7ffa54504762524f7a9"},{url:"assets/tutorials_disabling-particles.md.cea36ab9.js",revision:"035a39ee9f1f36efd5024a1e956095d1"},{url:"assets/tutorials_disabling-particles.md.cea36ab9.lean.js",revision:"64a55aae8fc47748d81f73189a44fbd4"},{url:"assets/tutorials_disabling-team-damage.md.0eddddab.js",revision:"dfb01aac5bc442d5a861c0b68ba5e967"},{url:"assets/tutorials_disabling-team-damage.md.0eddddab.lean.js",revision:"24f54470a7989b8df11ef0e430533ed2"},{url:"assets/tutorials_egg-drops.md.56aad8c8.js",revision:"780d9a4259dcbb84a045d20a4bd0f97f"},{url:"assets/tutorials_egg-drops.md.56aad8c8.lean.js",revision:"1432c6b47b9bfee1330f91f76745ed77"},{url:"assets/tutorials_index.md.528a32bc.js",revision:"dd2b226e6ffd836df75b40742a99d3c0"},{url:"assets/tutorials_index.md.528a32bc.lean.js",revision:"dd2b226e6ffd836df75b40742a99d3c0"},{url:"assets/tutorials_player-geometry.md.4047b56b.js",revision:"e0e2c2fe944f96bedea141b12b61946a"},{url:"assets/tutorials_player-geometry.md.4047b56b.lean.js",revision:"3e961af9c4cf8b369974b80bc11a752a"},{url:"assets/tutorials_remove-shadows.md.bf96ea8c.js",revision:"8b6c7eced8c99e6e0cf753e80b4f6156"},{url:"assets/tutorials_remove-shadows.md.bf96ea8c.lean.js",revision:"294d1a0ac0b838bff921b726dbe3bd91"},{url:"assets/tutorials_retexturing-spawn-eggs.md.8c728239.js",revision:"6f748446220251ed8946c1701e0ea57a"},{url:"assets/tutorials_retexturing-spawn-eggs.md.8c728239.lean.js",revision:"489656266c62ec4c45d12d9654a73cb4"},{url:"assets/tutorials_text-localization.md.ec5a8c77.js",revision:"05cf6a2d1d608b80159beac302f25509"},{url:"assets/tutorials_text-localization.md.ec5a8c77.lean.js",revision:"ea9b0842a1feed708d2a28fe256923d1"},{url:"assets/world-generation_beginners-guide.md.956ff66f.js",revision:"e28bfa78bb2d4831f575f89007494fc2"},{url:"assets/world-generation_beginners-guide.md.956ff66f.lean.js",revision:"e28bfa78bb2d4831f575f89007494fc2"},{url:"assets/world-generation_biome-tags.md.49fdf8ec.js",revision:"ab7409af9eaee9f9c576ed1e44236f8e"},{url:"assets/world-generation_biome-tags.md.49fdf8ec.lean.js",revision:"06e5b1b2740ce9b580c2fe9497d4192b"},{url:"assets/world-generation_biomes.md.ad82fb72.js",revision:"9b9b1ed41028d2a3bfc1150a654aeedb"},{url:"assets/world-generation_biomes.md.ad82fb72.lean.js",revision:"9431eee54f339a95a942df1e3cb72b73"},{url:"assets/world-generation_feature-types.md.2b7be8fb.js",revision:"a66473f4f8efbb96468513ddfb9c2abf"},{url:"assets/world-generation_feature-types.md.2b7be8fb.lean.js",revision:"5546b548d8cda050f43b7ceb77b3e451"},{url:"assets/world-generation_index.md.cc932adc.js",revision:"3c450c126df84a89e94ff79bb1159473"},{url:"assets/world-generation_index.md.cc932adc.lean.js",revision:"3c450c126df84a89e94ff79bb1159473"},{url:"registerSW.js",revision:"3be22912fd14291c200edaae7ff5f610"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map