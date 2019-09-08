let global: any = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://public.kryptonchain.org/node-api/',
    trustedDaemonsAddresses: [
        'http://public.kryptonchain.org:12888/'
    ],
    phpRelay: typeof window !== 'undefined' ? true : false,
    mainnetExplorerUrl: "https://explorer.kryptonchain.org",
    mainnetExplorerUrlHash: "https://explorer.kryptonchain.org/tx/{ID}",
    mainnetExplorerUrlBlock: "https://explorer.kryptonchain.org/block/{ID}",
    testnetExplorerUrl: "https://testnet.kryptonchain.org",
    testnetExplorerUrlHash: "https://testnet.kryptonchain.org/tx/{ID}",
    testnetExplorerUrlBlock: "https://testnet.kryptonchain.org/block/{ID}",
    testnet: false,
    coinUnitPlaces: 6,
    txMinConfirms: 20,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 20, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    addressPrefix: 0x1cf58b,
    integratedAddressPrefix: 0,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('100'),
    dustThreshold: new JSBigInt('1'),
    defaultMixin: 0, // default mixin value

    idleTimeout: 30,
    idleWarningDuration: 20,

    coinSymbol: 'ZOD',
    openAliasPrefix: "zod",
    coinName: 'Krypton',
    coinUriPrefix: 'krypton:',
    avgBlockTime: 60,
    maxBlockNumber: 500000000,

    donationAddresses: [
        'QQQ1ULhovJFX6Mau76zUZqXXpcheeaq1hXUdNTjMEBBNQNcH91oSotZNS7jGC9eTZ1QeDctbppKxJ28mtSWLNJiV7DecXMoJu2',
    ]
};
