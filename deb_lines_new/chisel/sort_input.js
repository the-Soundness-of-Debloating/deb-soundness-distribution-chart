export const chisel_sort_input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,782,783,785,828,829,830,831,832,833,834,835,874,875,876,877,878,879,880,881,882,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,930,931,932,933,934,959,975,991,1023,1039,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1118,1119,1120,1250,1251,1252,1253,1257,1258,1259,1260,1261,1263,1264,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1528,1529,1530,1531,1532,1777,1778,1779,1780,1781,1782,1783,1784,1833,1834,1835,1843,1844,1845,1846,1847,1848,1879,1880,1881,1882,1918,1919,1920,1921,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1963,1964,1965,1966,1984,1985,1996,1997,2007,2016,2017,2018,2019,2020,2021,2022,2023,2025,2026,2027,2028,2029,2030,2031,2176,2177,2201,2202,2203,2204,2205,2206,2239,2240,2241,2274,2275,2276,2277,2278,2279,2280,2281,2282,2291,2292,2293,2294,2295,2296,2297,2298,2299,2300,2301,2698,2699,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2729,2730,2731,2732,2733,2734,2735,2736,2737,2738,2739,2740,2741,2936,2937,2938,2939,2940,2941,2942,2943,2944,2945,2946,2947,2948,2949,2950,2951,2952,2953,2954,2955,2956,2957,2958,2959,3228,3679,3682,3683,3684,3686,3687,3688,3689,3705,3706,3804,3805,3806,3807,3808,3834,3835,4745,4746,4747,4748,4749,4750,4901,4970,4973,4974,4975,4976,4977,5011,5047,5048,5049,5050,5051,5052,5053,5054,5055,5094,5095,5096,5097,5098,5099,5100,5101,5102,5103,5104,5121,5212,5214,5215,5216,5264,5265,5275,5276,5277,5346,5347,5348,5349,5350,5351,5352,5353,5354,5355,5356,5357,5358,5359,5360,5361,5364,5365,5380,5381,5382,5395,5396,5397,5425,5426,5427,5428,5479,5480,5481,5482,6092,6093,6094,6095,6096,6493,6494,6495,6496,6684,6685,6687,6688,6689,6690,6691,6692,6693,6694,6695,6696,6697,6698,6699,6700,6701,6702,6703,6704,6705,6706,6707,6708,6709,6710,6711,6712,6713,6714,6715,6716,6717,6718,6910,6911,6912,6913,6914,6915,6916,6917,6918,6919,6920,6921,6922,6923,6924,6925,6929,6930,6931,6932,6933,6934,6935,6939,6948,6949,6950,6958,6964,6965,6967,6969,6970,6971,6973,6977,6979,6982,6983,6984,7046,7047,7048,7049,7071,7072,7090,7091,7120,7121,7612,7613,7625,7626,7652,7670,7671,7672,7673,7729,7730,7731,7732,7733,7734,7735,7736,7764,7765,7766,7767,7768,7769,7781,7782,7783,7817,7818,7819,7820,8097,8098,8099,8100,8151,8227,8271,8272,8273,8274,8275,8276,8277,8278,8279,8280,8281,8282,8283,8284,8285,8313,8314,8315,8316,8317,8318,8319,8320,8321,8322,8323,8324,8325,8326,8327,8328,8329,8330,8331,8332,8333,8334,8335,8336,8337,8338,8339,8340,8341,8342,8343,8344,8345,8346,8348,8349,8350,8351,8352,8353,8354,8355,8356,8357,8358,8359,8360,8361,8362,8363,8364,8365,8366,8367,8368,8369,8370,8371,8372,8373,8374,8375,8376,8377,8378,8379,8380,8381,8382,8383,8384,8393,8394,8395,8396,8397,8398,8399,8400,8401,8402,8414,8415,8416,8417,8418,8419,8468,8469,8470,8471,8476,8489,8492,8498,8499,8500,8501,8518,8656,8657,8658,8659,8660,8661,8662,8663,8664,8665,8666,8667,8668,8669,8670,8671,8672,8673,8674,8675,8676,8677,8678,8679,8680,8681,8682,8683,8684,8685,8686,8687,8688,8689,8690,8691,8692,8693,8694,8695,8696,8745,8914,8986,8987,8990,8991,8992,8993,8994,8999,9000,9001,9003,9004,9007,9008,9009,9010,9011,9013,9014,9015,9020,9021,9022,9645,9646,9647,9717,9718,9719,9720,9721,9722,9724,9725,9726,9727,9728,9732,9733,9734,9735,9736,9738,9739,9743,9744,9745,9746,9747,9963,9965,9966,9968,9969,9970,9971,9972,9973,9974,9975,9976,9977,9978,9979,9982,9986,9988,9990,9991,9996,10000,10001,10002,10003,10004,10005,10006,10007,10011,10012,10013,10014,10015,10019,10020,10021,10022,10024,10037,10038,10039,10040,10041,10044,10045,10046,10047,10048,10049,10050,10052,10053,10054,10055,10061,10085,10086,10087,10088,10092,10095,10096,10097,10100,10101,10106,10108,10109,11669,11670,11671,11672,11673,11674,11675,11690,11691,11694,11702,11703,11704,11705,11706,11707,11708,11709,11710,11711,11712,11713,11714,11717,11718,11719,11720,11721,11722,11723,11724,11725,11726,11727,11728,11729,11737,11738,11739,11740,11770,11773,11779,11781,11782,12214,12215,12216,12217,12218,12219,12220,12221,12222,12223,12224,12225,12226,12227,12228,12229,12230,12231,12232,12233,12234,12235,12236,12237,12238,12239,12240,12241,12242,12243,12244,12245,12246,12247,12248,12249,12250,12251,12252,12253,12254,12256,12257,12258,12259,12260,12261,12262,12263,12264,12265,12266,12267,12268,12269,12270,12271,12272,12273,12274,12275,12276,12277,12278,12279,12280,12281,12282,12283,12284,12285,12286,12287,12288,12289,12290,12291,12294,12295,12296,12297,12299,12301,12302,12303,12304,12305,12306,12307,12308,12309,12310,12312,12313,12314,12315,12316,12317,12318,12319,12320,12321,12322,12326,12327,12328,12329,12330,12339,12340,12346,12347,12348,12349,12356,12357,12358,12359,12360,12361,12362,12363,12368,12369,12376,12379,12380,12381,12382,12383,12384,12393,12395,12403,12404,12405,12406,12424,12425,12426,12427,12428,12429,12430,12431,12432,12436,12437,12438,12459,12461,12466,12467,12468,12471,12477,12478,12479,12480,12482,12483,12488,12493,12494,12495,12496,12497,12498,12499,12500,12501,12502,12503,12504,12505,12506,12507,12508,12509,12510,12512,12513,12514,12515,12516,12517,12518,12520,12521,12527,12531,12532,12533,12602,12603,12604,12605,12611,12612,12613,12614,12617,12618,12619,12620,12621,12622,12623,12624,12625,12626,12627,12628,12629,12630,12631,12641,12642,12643,12644,12645,12646,12647,12648,12654,12655,12656,12657,12658,12659,12660,12661,12662,12663,12664,12665,12666,12667,12669,12670,12671,12672,12673,12675,12677,12678,12680,12682,12683,12684,12685,12692,12693,12704,12705,12706,12707,12710,12711,12712,12713,12720,12721,12722,12726,12727,12728,12729,12730,12731,12732,12733,12734,12735,12738,12739,12740,12741,12742,12744,12745,12747,12748,12749,12750,12751,12752,12764,12765,12766,12767,12773,12774,12775,12777,12804,12805,12806,12807,12808,12809,12810,12811,12812,12813,12814,12815,12816,12817,12818,12822,12823,13075,13076,13077,13080,13081,13082,13083,13084,13085,13087,13088,13089,13091,13092,13093,13094,13095,13100,13104,13108,13109,13110,13111,13113,13122,13123,13126,13127,13128,13129,13130,13134,13135,13148,13149,13154,13155,13172,13177,13178,13179,13180,13181,13182,13183,13187,13188,13189,13194,13197,13198,13221,13222,13245,13246,13247,13248,13261,13262,13263,13264,13348,13349,13351,13432,13438,13441,13442,13445,13461,13471,13474,13477,13482,13483,13488,13491,13497,13507,13509,13564,13565,13569,13577,13583,13645,13646,13687,13688,13689,13692,13699,13730,13731,13732,13787,13788,13789,13793,13794,13795,13878,13881,13882,13883,13889,13890,13892,14003,14037,14038,14039,14056,14057,14069,14070,14073,14074,14202,14259,14260,14261,14262,14263,14264,14265,14268,14275,14276,14285,14286,]
