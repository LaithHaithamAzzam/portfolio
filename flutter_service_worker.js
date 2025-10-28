'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d053966573731468f4b852169914729",
"assets/AssetManifest.bin.json": "bb311e395d973b7773b80c57887e196a",
"assets/AssetManifest.json": "a751db8de7d2b0f45e4564df7cdbff26",
"assets/assets/fonts/Inter-Regular.ttf": "19efebbad6fdf0140cf23e4491f2ecd6",
"assets/assets/fonts/K2D-Regular.ttf": "550931f95350dc1f7ffe8b06001f0517",
"assets/assets/fonts/Protfolio_Icon.ttf": "d009c2c856911b015f596f1459bee6ed",
"assets/assets/images/Certificates/1.png": "1156d215f48c44ed1d4c5ac3da9e03f2",
"assets/assets/images/Certificates/1e.png": "94b1612693329b837dc8ea7c9487b494",
"assets/assets/images/Certificates/1eic.jpg": "d8fcd90c808237f1ad593b5234a56698",
"assets/assets/images/Certificates/2.png": "e9747e1c56f2331265956c2b65347d6b",
"assets/assets/images/Certificates/3.png": "97f60d9c41ed64da6bd050d0096ac5d0",
"assets/assets/images/Certificates/3k.jpg": "ddf7fe32489f80ea648fe02ce8c48b2d",
"assets/assets/images/Certificates/hmk.jpg": "5be5b5d236f917288074c8162b617d18",
"assets/assets/images/Certificates/hmkcert.png": "fd3e267a3b6c6f984d5d986506717695",
"assets/assets/images/Certificates/masa.png": "35558d30c4687319648d6da6bb2d1766",
"assets/assets/images/Certificates/takharog.png": "cd1e0382f993bf81064ace5015d3d71d",
"assets/assets/images/Certificates/VMS.png": "cd1e0382f993bf81064ace5015d3d71d",
"assets/assets/images/comp.svg": "7d324e03179a300c1e89718bd01d285e",
"assets/assets/images/computer.svg": "2d3a8fb25201d4b2261b4bf244e773f3",
"assets/assets/images/cours.svg": "c6749d30053c75faaaac40a46d46e174",
"assets/assets/images/cs.svg": "92513988c6dd8b5bc2d5f6d925ac5d60",
"assets/assets/images/csql.svg": "ac35739dc81d628008869a97bc466138",
"assets/assets/images/css.svg": "28b9fa41ce29cfa3ff909fc8bc387cdb",
"assets/assets/images/cv.pdf": "3e6de0c5057219a7c50ebfb301897876",
"assets/assets/images/dart.svg": "3cd963899807130e0cd371806c73a7cc",
"assets/assets/images/dms.jpg": "996a67a4b52e1cca8def2bcf0377c8a5",
"assets/assets/images/edrak.jpg": "2c2add74a7dd8eb32bf1fb887bf4de23",
"assets/assets/images/EIC.jpg": "0c5100c8ef17d1e4e07da470192755d3",
"assets/assets/images/figma.svg": "205530162e02d4a05a87075eeb3b9c08",
"assets/assets/images/flutter.svg": "fe7bd937f40ecc50fbccfbb0df478551",
"assets/assets/images/HotelApp/1.jpg": "e34f951ab27acf9dd74f8092f46ba926",
"assets/assets/images/HotelApp/10.jpg": "535c81f6b4f5e2af5a9c11af613c0be1",
"assets/assets/images/HotelApp/11.jpg": "923c2edeeb6807e111dd4972a38d991c",
"assets/assets/images/HotelApp/12.jpg": "bd543d18216952f516a94f3a96662265",
"assets/assets/images/HotelApp/13.jpg": "65b95609111f4afb31b16c2b086c8aac",
"assets/assets/images/HotelApp/14.jpg": "79af4a693fe8801291255f4636b307cb",
"assets/assets/images/HotelApp/15.jpg": "673d7677c4743b9ab464ecdc70e9ccdc",
"assets/assets/images/HotelApp/16.jpg": "30527a97e0908800bacf147da377a276",
"assets/assets/images/HotelApp/2.jpg": "e6ad99b7017bdd159a2cfd0f42c42735",
"assets/assets/images/HotelApp/3.jpg": "1252c67fdf105d864b451b34499a6eaa",
"assets/assets/images/HotelApp/4.jpg": "bf5593f10e89a6a57dbec11f2dfa0e52",
"assets/assets/images/HotelApp/5.jpg": "592fec377de997eef938af0070d2fcd4",
"assets/assets/images/HotelApp/6.jpg": "bbf20321d352d51e7a48f23c192e19c8",
"assets/assets/images/HotelApp/7.jpg": "c64521c44799cf1fc099466390a75593",
"assets/assets/images/HotelApp/8.jpg": "cc6d1feedf9dad5007f72d7a6c286e19",
"assets/assets/images/HotelApp/9.jpg": "a63c375b3b4767911014dde1dd706a01",
"assets/assets/images/html.svg": "5befabb677e91fd39a0e335b56f47fa6",
"assets/assets/images/javascript.svg": "5f2e26b41b18dfcba7afd481f6e2b6e7",
"assets/assets/images/kc.png": "9b49418917d05661affe4220cbc35374",
"assets/assets/images/masa.png": "81f15c918904255c0a51ceb732f5263d",
"assets/assets/images/mult.svg": "4cbc4ca4793511e6d7fa4f0a606f42d9",
"assets/assets/images/person.svg": "10c0e03a554e0008886e53dff3200222",
"assets/assets/images/Phone.svg": "7a63d6e44b6c6f05742d854f29db097d",
"assets/assets/images/photo.svg": "aa3cf1fba1fd9a52a9ef521dacd64912",
"assets/assets/images/plan.svg": "8566c97e82aa15caf516d5b2804da2ce",
"assets/assets/images/profile.jpg": "42697a5f0e68dc69dcf004a7f44b6ed0",
"assets/assets/images/profile1.png": "98a05b6dc07726385da74aa0b1048def",
"assets/assets/images/projground/d1.jpg": "2033c35885654adf6e29b23620a728c6",
"assets/assets/images/projground/d2.jpg": "e8b2484a77a2cf9f3b9413a38a1ede76",
"assets/assets/images/projground/otel.jpg": "6f15858ae4a9ed68543add63b74c971c",
"assets/assets/images/projground/slp.jpg": "13675809db223571217e37d2c193636c",
"assets/assets/images/projground/twenty.jpg": "a8f3ff7fc36336b845460fecee371091",
"assets/assets/images/projground/wlest.jpg": "a8000630c03fe6b66b55e3cc01ade92e",
"assets/assets/images/settings.svg": "3008758046c61ac883df6b80465ce107",
"assets/assets/images/SmartLocationPhoneApp/1.jpg": "483a05bb586bfba3839db90d6737ff5a",
"assets/assets/images/SmartLocationPhoneApp/2.jpg": "4f62e9b7062ac7873f1510b1982ec56a",
"assets/assets/images/SmartLocationPhoneApp/3.jpg": "b6139b15262ee7feb04c4e077e7dee62",
"assets/assets/images/SmartLocationPhoneApp/4.jpg": "24020e230db400fa70983394921a1371",
"assets/assets/images/SmartLocationPhoneApp/5.jpg": "13666dc722256ee8345432ec429211b4",
"assets/assets/images/soltan/1.jpg": "919c7206d680296d65916163971707e5",
"assets/assets/images/soltan/10.jpg": "bca8d5e29cfb9e95902af4a59da78588",
"assets/assets/images/soltan/11.jpg": "4364a2fe6e6b1878e883286d1f789430",
"assets/assets/images/soltan/12.jpg": "672311217659873e30537eb3e61893cb",
"assets/assets/images/soltan/13.jpg": "4dc10e5fb3412f42c9df1ecb73e88d52",
"assets/assets/images/soltan/14.jpg": "2d43f80b9a2e8940dfe9ea1b63bfb84d",
"assets/assets/images/soltan/15.jpg": "e03c27ee29d36ebb2d05b95fad43a0b6",
"assets/assets/images/soltan/16.jpg": "83c6e6c925af8b6538e174cef1eb2e79",
"assets/assets/images/soltan/17.jpg": "071f5024d8e4901c26d8c67320612481",
"assets/assets/images/soltan/18.jpg": "656df99bf92a5025007c78c21060e6cc",
"assets/assets/images/soltan/19.jpg": "903b7c4bf01979e0a280fb2998afe041",
"assets/assets/images/soltan/2.jpg": "f99d7bf310b4c347d4b128bf6d6ce201",
"assets/assets/images/soltan/20.jpg": "6aa26a958dfd8673c468172413585185",
"assets/assets/images/soltan/21.jpg": "ddad699a08381fadc754ad24b4785c33",
"assets/assets/images/soltan/22.jpg": "e2037c82f6ed90b18c465a435cba7e20",
"assets/assets/images/soltan/23.jpg": "da690bc9a295bf8fe012a33503159341",
"assets/assets/images/soltan/24.jpg": "0eee5b7cc91add510e08a82f3e06f830",
"assets/assets/images/soltan/25.jpg": "bdb047b1582d3470922febd17392ad1f",
"assets/assets/images/soltan/26.jpg": "c65eac24443bee53c68c988d7c6e5e65",
"assets/assets/images/soltan/3.jpg": "baea54e939dfec5d3f8e77b19d4894f6",
"assets/assets/images/soltan/4.jpg": "0d507762f7576990af5e66a690cf5497",
"assets/assets/images/soltan/5.jpg": "98324d49fd29bb675b5da49d6493aced",
"assets/assets/images/soltan/6.jpg": "215958d45731736be6c791642e5dac62",
"assets/assets/images/soltan/7.jpg": "c90f5ff49ef9aa918af755dc2e302bae",
"assets/assets/images/soltan/8.jpg": "f916d83191c79704203687281b5b6150",
"assets/assets/images/soltan/9.jpg": "b70931e04436acba4e99fa74c80bc7ee",
"assets/assets/images/soltan/splash.jpg": "13f2228b3aa2fd2b7c174c5d454b094e",
"assets/assets/images/soltan.svg": "1016dad58f5a09a14731c923b10d72b6",
"assets/assets/images/sql.svg": "41133fc576ec48d88a263d2c5f3d2982",
"assets/assets/images/TwentyApp/1.jpg": "a3f7bf3dad3f3cee653083c89ab0ff52",
"assets/assets/images/TwentyApp/10.jpg": "4ed4adf3f613dd9d4c146ba92377db6b",
"assets/assets/images/TwentyApp/11.jpg": "dc41945daa12ca50cbcd104f5b610cdd",
"assets/assets/images/TwentyApp/12.jpg": "1780ef1879917353e8e59ed727b0345d",
"assets/assets/images/TwentyApp/13.jpg": "549b921e8a488f091a85e8efd7c2e433",
"assets/assets/images/TwentyApp/14.jpg": "7bb01dc0edae0f3e5e8aa3423e84d2cc",
"assets/assets/images/TwentyApp/15.jpg": "0e0dbd2ac5e510a98c0e8b230761afe8",
"assets/assets/images/TwentyApp/2.jpg": "81506e0078754b00fac8c7bf79ffd8cb",
"assets/assets/images/TwentyApp/3.jpg": "e12f8dea947d72c20143b286cc20392d",
"assets/assets/images/TwentyApp/4.jpg": "3eb8435a6206652e20243e431722a948",
"assets/assets/images/TwentyApp/5.jpg": "de7e162e6003868befb2377af8ad38ec",
"assets/assets/images/TwentyApp/6.jpg": "7ae6c7910c6e60ada90dfd2daabd2736",
"assets/assets/images/TwentyApp/7.jpg": "636e57f60d825729eb3e0c943049a0de",
"assets/assets/images/TwentyApp/8.jpg": "988d393a771dc1569b577499ce4ec4d5",
"assets/assets/images/TwentyApp/9.jpg": "ff8ab9e2d194fabd9c75ae6f5534d1c2",
"assets/assets/images/ux.svg": "804952807047c841c0b6387bf4408e03",
"assets/assets/images/VMS/1.png": "0d4b798f60740c3fe3d83eb6c8d50483",
"assets/assets/images/VMS/10.png": "ea30e501f1d1dc42610e54da50d4b7ee",
"assets/assets/images/VMS/11.png": "6b0ef5b92c836b37702f5458572c278c",
"assets/assets/images/VMS/12.png": "0f9652afb36de845931640d210e234e0",
"assets/assets/images/VMS/13.png": "4c542fb7a79867484ca40b29c9210ebc",
"assets/assets/images/VMS/14.png": "bfd0540c25a1721266dc34ddff85a606",
"assets/assets/images/VMS/15.png": "eb28e32e33af6a910c99f4809df05144",
"assets/assets/images/VMS/16.png": "eca684da8de4c12c46270267d81e7694",
"assets/assets/images/VMS/17.png": "446fcff553a1de7a72ed1c28bfcc738a",
"assets/assets/images/VMS/18.png": "dfa579f5df8dc6eec0e44fbe27dcedc0",
"assets/assets/images/VMS/19.png": "17496ce8429782e0b129bbf542dd1fa7",
"assets/assets/images/VMS/2.png": "1a77e48f3bb8a40414859563d867f329",
"assets/assets/images/VMS/20.png": "be1abcb3107bec22803d62c4cc83ea1d",
"assets/assets/images/VMS/21.png": "d481fe051fa688d76f8503722ad0d7f4",
"assets/assets/images/VMS/22.png": "2ac8d6d0845e25a026a02e7b8e5119f9",
"assets/assets/images/VMS/23.png": "7aaec6d493651db8d2f93faec14f4719",
"assets/assets/images/VMS/24.png": "0def7d4ea00b60a68d9c943669b07f3a",
"assets/assets/images/VMS/25.png": "eb4c6dff9ec7a8f2e62c6156367ca52b",
"assets/assets/images/VMS/26.png": "a72c7b645d3bcf9f0603dbfd1db956d8",
"assets/assets/images/VMS/27.png": "0e634cb81bbb28b00b424fc336a21457",
"assets/assets/images/VMS/28.png": "43f4856602da300493ff3a86057eb04f",
"assets/assets/images/VMS/29.png": "da0a779f0d3bca010cd14a1e3f5bfd61",
"assets/assets/images/VMS/3.png": "d5d2301eb70fd03fe96f2aa9371c87dc",
"assets/assets/images/VMS/30.png": "a04b39d24f50c4b6ddf78c21873ee560",
"assets/assets/images/VMS/31.png": "6a96092ef461f86df194527112d2d96a",
"assets/assets/images/VMS/32.png": "7403a4ae761d228454ddfde0e29d9bcf",
"assets/assets/images/VMS/33.png": "90a9d27adde4ca7f21fa147564b2e5f5",
"assets/assets/images/VMS/4.png": "68704c07a213dbf5103f8018a09906c9",
"assets/assets/images/VMS/5.png": "78ae5def6e9829f84ac148956bfa979e",
"assets/assets/images/VMS/6.png": "028ef52b513e4e0855da8e439bf9d3ed",
"assets/assets/images/VMS/7.png": "5d1a6183f07d72ad7e4db52cb1d6efeb",
"assets/assets/images/VMS/8.png": "593538aefa452be91b45196651a58f2b",
"assets/assets/images/VMS/9.png": "80d31322816a25947192e5e527ec12fb",
"assets/assets/images/VMS/splash.png": "2107a9ca0ab9fdeee61c0f6e750b44e4",
"assets/assets/images/VMSc.svg": "95b71b0f02a04ca888b2ae5100ba1292",
"assets/assets/images/vmslogo.png": "3b8af0ab7eea7da4954055fb2831db59",
"assets/assets/images/VMSsyria.svg": "12082caad54886c5f147332af4488a86",
"assets/assets/images/WanderlustApp/1.jpg": "de9ce4af8a812de115fa6664da7d3365",
"assets/assets/images/WanderlustApp/10.jpg": "2029b50e5c812c011e22f3f552035d20",
"assets/assets/images/WanderlustApp/11.jpg": "23030a42addf309f31bca619d6912f1e",
"assets/assets/images/WanderlustApp/12.jpg": "6436b3205b3465a66a2f7fc43c4783fa",
"assets/assets/images/WanderlustApp/2.jpg": "2657b72e659c83d42a2ca831fb9b16fa",
"assets/assets/images/WanderlustApp/3.jpg": "6aea3a4a53dfe3dc1c6d95e56a7c6c98",
"assets/assets/images/WanderlustApp/4.jpg": "0eac56c87299a429389251d163485b86",
"assets/assets/images/WanderlustApp/5.jpg": "b62c802956430f684f1847cd907ff79b",
"assets/assets/images/WanderlustApp/6.jpg": "2e63a9870f3a4bf0ce93fcfe61e6d19d",
"assets/assets/images/WanderlustApp/7.jpg": "b331524abdaf67fd48eb93c867d4d1d8",
"assets/assets/images/WanderlustApp/8.jpg": "e95e13bd2bdc2bd41a6f64d5df5f9a5d",
"assets/assets/images/WanderlustApp/9.jpg": "01cf61382006d3e565af06956cb15d23",
"assets/assets/images/webdev.svg": "be69890f08e85da18f009e5864b63ddd",
"assets/assets/images/xd.svg": "f96680ea608ab8f803e765a288a515cd",
"assets/assets/UIDesign/HajjApp/0.jpg": "5193720463dd6264f6bf2a639e876087",
"assets/assets/UIDesign/HajjApp/1.jpg": "3c77070b344f22b14546bd0ee520b4dd",
"assets/assets/UIDesign/HajjApp/10.jpg": "9038861a08ed928d5abaac3e5012e43d",
"assets/assets/UIDesign/HajjApp/11.jpg": "cc445c21ad50e1cb2acf26e6a6bb3d6c",
"assets/assets/UIDesign/HajjApp/12.jpg": "8442c2549d6d9fb931396f25c5b6c142",
"assets/assets/UIDesign/HajjApp/13.jpg": "0743888505f5e84998879badc51dfa24",
"assets/assets/UIDesign/HajjApp/14.jpg": "766ff2a030cdbb1e09a192ddcf918fac",
"assets/assets/UIDesign/HajjApp/15.jpg": "f613a49df3b49393682e74012946e986",
"assets/assets/UIDesign/HajjApp/16.jpg": "62de810baaee26149ba8fd6cc60989dc",
"assets/assets/UIDesign/HajjApp/2.jpg": "64604588eb2a0059aeb5958cff566569",
"assets/assets/UIDesign/HajjApp/3.jpg": "14c709600f6aa6c85baae9e4ce39949d",
"assets/assets/UIDesign/HajjApp/4.jpg": "080892f41dc7becaf9e793555ca3f844",
"assets/assets/UIDesign/HajjApp/5.jpg": "6c32e697bc899ecb412722bac2064ad9",
"assets/assets/UIDesign/HajjApp/6.jpg": "a168b0c3e2f0c185888ac3af8e3049a4",
"assets/assets/UIDesign/HajjApp/7.jpg": "4f3981a58ea8ad2963eb9d1e34792f26",
"assets/assets/UIDesign/HajjApp/8.jpg": "62891be2423a77d0ce27c2392cf09110",
"assets/assets/UIDesign/HajjApp/9.jpg": "a099d409cac87e19ded6d4edab6b3817",
"assets/assets/UIDesign/HajjApp/Splash.jpg": "30211e2aff1f6444e0e77c0331be5f12",
"assets/assets/UIDesign/laza/1.png": "dd291863aa251a3f04077749706fb3c9",
"assets/assets/UIDesign/laza/10.png": "6ec38f667de8af685c5cd4b6b6d91b8a",
"assets/assets/UIDesign/laza/11.png": "5c3637f7bccbbe4f11125bdd3aa71ee4",
"assets/assets/UIDesign/laza/12.png": "078dadefbac8b94eb1981ffc79b010df",
"assets/assets/UIDesign/laza/13.png": "72c036d86e471099949e5d19bfe9ff1c",
"assets/assets/UIDesign/laza/14.png": "c0da0fe14e8605671ccb9f8b8ffd1fb4",
"assets/assets/UIDesign/laza/15.png": "7b0bc6f5918a318dfb97cea5be7cc61d",
"assets/assets/UIDesign/laza/16.png": "7ebeb3e747b2cdf44c77b88e294195d9",
"assets/assets/UIDesign/laza/17.png": "0c7f18c53222dee75966aa164cb94da3",
"assets/assets/UIDesign/laza/18.png": "296461bb8bb9617dee476178e7763468",
"assets/assets/UIDesign/laza/19.png": "f0129cbf072ac39b5d5902e20109c272",
"assets/assets/UIDesign/laza/2.png": "96301090b449960f2940c38e06a5585d",
"assets/assets/UIDesign/laza/20.png": "7897c7125d1a5542e4ba6986aa48302e",
"assets/assets/UIDesign/laza/3.png": "852cec8b5e6208f39fa56e7b66c7321c",
"assets/assets/UIDesign/laza/4.png": "d279ba356b3ceac65eb85c87ce05316e",
"assets/assets/UIDesign/laza/5.png": "570aa15d90f49de6758db194530fd614",
"assets/assets/UIDesign/laza/6.png": "ab59f0cddc1ee3635a262b56e93271ee",
"assets/assets/UIDesign/laza/7.png": "4d84506a546a2aa937988d80c78da031",
"assets/assets/UIDesign/laza/8.png": "9032cec28fd157a2336dd61a8b8ec897",
"assets/assets/UIDesign/laza/9.png": "e33d947b0365caff53fd0f45e11c0c77",
"assets/assets/UIDesign/laza/splash.png": "1283f3d6bdffc7d2cba2d576108b49ce",
"assets/assets/UIDesign/lens/1.jpg": "66fc6a606fb80fffa7226c22087340ed",
"assets/assets/UIDesign/lens/2.jpg": "c46d004557b3db99edf5d1f749a1fffc",
"assets/assets/UIDesign/lens/3.jpg": "02dce5f6b354e3f3a03c379650441fca",
"assets/assets/UIDesign/lens/splash.png": "3f30513fd7b557d1921c0a5c4d2f1b78",
"assets/FontManifest.json": "82705eb66109e479ef3b7f0cca3c4e53",
"assets/fonts/MaterialIcons-Regular.otf": "7a0930e05b48b9b24ed83c2ce797c878",
"assets/NOTICES": "16977ef751d1a28ad8eb9b2085a00f3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "8ad64ca295a186eaf0a018d0efb3bf8f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "ae2d88d4db9eb9813204271d89f146b3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "1011c7af6af0064ae7a1778f8df4168e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b0b1f6f3839c6a9bfee55e0a9fce7c17",
"icons/Icon-192.png": "1011c7af6af0064ae7a1778f8df4168e",
"index.html": "c6216af1b3e942d7635c6aee591bc786",
"/": "c6216af1b3e942d7635c6aee591bc786",
"main.dart.js": "ebcebb7a4e37ad9802f1e3f8a0b7ac8d",
"manifest.json": "1ec5035b85582a7684b7ae82df4a368c",
"splash/img/dark-1x.gif": "716441950ceee147e83c9d1c27289f62",
"splash/img/dark-1x.png": "7082d30fc0bb8152be35d98a1591af28",
"splash/img/dark-2x.gif": "0cc7c832d3bd10c3fcd10dcdd51953a8",
"splash/img/dark-2x.png": "d3d97922e98a38b60e4e127dbb4fc905",
"splash/img/dark-3x.gif": "791973f6d2a067078b13a96442d85bd3",
"splash/img/dark-3x.png": "09a7c7e9c75209709ea5801ae14d0b45",
"splash/img/dark-4x.gif": "d04c38e27f0edce519cba9ecaed3b117",
"splash/img/dark-4x.png": "72aff0b3d6744623c8971df276565e80",
"splash/img/light-1x.gif": "716441950ceee147e83c9d1c27289f62",
"splash/img/light-1x.png": "7082d30fc0bb8152be35d98a1591af28",
"splash/img/light-2x.gif": "0cc7c832d3bd10c3fcd10dcdd51953a8",
"splash/img/light-2x.png": "d3d97922e98a38b60e4e127dbb4fc905",
"splash/img/light-3x.gif": "791973f6d2a067078b13a96442d85bd3",
"splash/img/light-3x.png": "09a7c7e9c75209709ea5801ae14d0b45",
"splash/img/light-4x.gif": "d04c38e27f0edce519cba9ecaed3b117",
"splash/img/light-4x.png": "72aff0b3d6744623c8971df276565e80",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
