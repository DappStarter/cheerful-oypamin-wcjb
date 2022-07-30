require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember upset idea arena fog talent'; 
let testAccounts = [
"0xb6c8817ff6ea978f224a38ca310eb5286031925533fa90d112dbc137a9c4d354",
"0x2bbac2f1a91dad3f44180fdd67dfdcad61c03319b76734d6e65fa02657db9ab5",
"0x732b5024ed67759fac4fc1e52e67d535d0ad7754972181e4774ff67680e49ada",
"0x7e9f08991f2209f8a3f06855be82a9ec273a885dfb2948197a35232d0d81b9a9",
"0xf546024bb1d8b3cd1e9951cc2c166eb78e4cfcb5769014ca8485b325fea4e4a0",
"0x9d5d3d57aaa2302846c2be5e3d318ceaee8f4da3cc2ee1213641a9377a888719",
"0x8815898ea083ba5a06390256b30e262be81db6df220340582c3ce8a54d822de8",
"0x46a95a9b4c20ef6efd90585ebe94b8bf11ee21e301d13c6bd445fc18ced8de48",
"0x00f321241b4a7e45d09f9f95fc51e2c3bd6d4b431624b6249c92c8019de6fdec",
"0x38eef13afc7beb366e52dcfa540eb3b466fb4f52a3e3d60468306f18498da842"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


