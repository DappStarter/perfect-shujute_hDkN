require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soap attitude heavy produce bone gaze'; 
let testAccounts = [
"0xfb198551b5db2f91e01eef6c6409909e25408f0605d30f3d342625018dc8622f",
"0xa01af1603932c1c723a50a3226b3411fb430b9afad178a76132269ddc95df477",
"0x3dedfab352ba7d51571d77dbbd84d48f4cdda12b0d823a9e29861df188d78af5",
"0x108732152f6bd80adb56d267e48c639b48a0d1f62bd4f0358d9b6c5b636a9c18",
"0xc81e8cd83b04fafba2b0a24720870e6fb9c9c213d7abb938354a30acea575af9",
"0xe497c093d893c28599c77d5007c1eb3943de85939f090b544f91ba09e431164d",
"0xe7d39429406643593472e58c2a911d09ff01627b0ae447c052d9c4140dae9d8a",
"0xd98e33cf1984049bae792d9694594918f6d9e43b30159a98edad98d26d5f4481",
"0xebd42219ab44ef0010a4bdfdfadf1fb95d11868edebf3d2af3bcd454ec73715b",
"0xd45a75e158a4bd26f117163d25cfb171fedd613b885cebc8d31246b5ecaa1c1c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

