export const blade_gzip_input = [1,2,3,4,5,6,7,8,9,10,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,103,104,105,106,107,110,111,112,113,115,116,117,118,120,121,122,123,124,125,126,127,128,131,132,137,147,148,149,150,152,153,154,155,156,157,158,159,160,161,162,165,175,808,810,811,812,831,832,834,835,836,1177,1178,1179,1180,1181,1502,1503,1536,1537,1547,1548,1549,1550,1551,1552,1553,1554,1574,1575,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1656,1657,1658,1666,1667,1668,1669,1670,1671,1675,1676,1678,1679,1680,1681,1682,1683,1684,1688,1689,1690,1691,1692,1693,1697,1698,1699,1700,1701,1702,1704,1705,1706,1707,1708,1717,1718,1720,1721,1746,1747,1748,1749,1754,1755,1910,1911,1912,1913,1917,1929,1930,1931,1932,1933,1934,1935,1940,1942,1943,1972,1976,1977,1980,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2116,2117,2118,2119,2120,2121,2122,2123,2124,2130,2131,2132,2133,2134,2135,2136,2137,2138,2139,2140,2141,2142,2143,2144,2145,2146,2147,2148,2152,2153,2154,2155,2166,2167,2168,2172,2173,2184,2185,2186,2187,2188,2189,2190,2192,2205,2206,2212,2213,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2234,2235,2236,2237,2238,2239,2240,2241,2242,2243,2244,2245,2246,2247,2248,2249,2250,2251,2252,2253,2254,2255,2256,2259,2260,2261,2262,2263,2264,2265,2266,2267,2268,2269,2270,2271,2272,2273,2274,2275,2276,2277,2278,2279,2280,2281,2282,2283,2289,2290,2294,2295,2296,2297,2298,2299,2300,2301,2307,2308,2309,2311,2312,2313,2314,2315,2326,2327,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2390,2391,2392,2393,2394,2395,2397,2398,2399,2400,2401,2402,2403,2404,2405,2413,2415,2416,2417,2418,2419,2421,2422,2423,2437,2438,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,2450,2451,2452,2454,2455,2456,2457,2458,2459,2461,2462,2463,2464,2468,2470,2471,2472,2473,2474,2475,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2497,2498,2499,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,2510,2512,2513,2514,2515,2516,2523,2524,2525,2527,2530,2532,2533,2535,2536,2537,2538,2540,2542,2543,2544,2545,2546,2547,2548,2549,2550,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563,2564,2565,2566,2567,2568,2569,2570,2571,2572,2573,2574,2577,2578,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593,2594,2595,2596,2597,2598,2599,2600,2601,2602,2603,2604,2605,2606,2607,2608,2609,2610,2611,2612,2613,2614,2618,2621,2640,2641,2642,2643,2647,2648,2649,2650,2651,2652,2653,2654,2655,2656,2657,2658,2659,2660,2661,2662,2663,2664,2667,2668,2669,2670,2671,2672,2673,2674,2675,2676,2677,2678,2679,2680,2681,2682,2683,2684,2685,2686,2687,2688,2689,2690,2691,2692,2693,2694,2695,2696,2697,2698,2699,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,2725,2726,2727,2728,2729,2730,2731,2732,2733,2734,2735,2736,2737,2738,2740,2741,2960,2961,2962,2963,2964,2965,2966,2967,2968,2969,2970,2971,2972,2973,2974,2975,2976,2977,2978,2979,2981,2982,2984,2985,2986,2987,2988,2989,2990,2991,2992,2995,2996,3007,3009,3010,3011,3012,3014,3015,3016,3017,3019,3020,3021,3023,3026,3028,3029,3031,3032,3033,3034,3035,3036,3037,3038,3039,3040,3041,3043,3044,3045,3047,3050,3052,3053,3054,3055,3056,3057,3058,3059,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,3070,3071,3074,3075,3076,3077,3078,3079,3080,3081,3082,3083,3091,3092,3093,3094,3095,3096,3097,3098,3099,3100,3101,3102,3103,3104,3105,3106,3107,3108,3109,3111,3112,3113,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3124,3125,3126,3127,3128,3129,3130,3131,3132,3133,3134,3135,3136,3137,3138,3139,3140,3141,3150,3151,3154,3155,3156,3157,3158,3159,3160,3161,3162,3163,3164,3165,3166,3167,3168,3169,3170,3171,3174,3175,3176,3177,3178,3179,3180,3181,3182,3183,3184,3185,3186,3187,3188,3189,3190,3191,3193,3212,3213,3214,3215,3216,3217,3219,3220,3221,3222,3223,3224,3225,3226,3227,3228,3229,3230,3231,3232,3233,3323,3324,3325,3326,3327,3328,3329,3330,3332,3333,3345,3347,3348,3361,3365,3368,3370,3371,3372,3373,3374,3375,3376,3378,3382,3385,3386,3387,3388,3389,3390,3391,3392,3393,3394,3395,3396,3397,3398,3399,3402,3403,3404,3405,3406,3407,3408,3409,3410,3411,3412,3414,3431,3432,3433,3434,3435,3436,3437,3438,3439,3440,3441,3442,3443,3444,3445,3447,3449,3457,3458,3459,3460,3461,3463,3468,3469,3470,3471,3473,3474,3481,3482,3483,3484,3485,3486,3487,3500,3501,3502,3503,3504,3505,3510,3511,3576,3582,3606,3607,3611,3612,3613,3629,3630,3632,3828,3829,3830,3831,3832,3833,3838,3839,3840,3841,3842,3843,3844,3849,3851,3852,3853,3854,3855,3858,3859,3860,3861,3862,3863,3864,3865,3873,3874,3876,3877,3878,3879,3880,3882,3883,3884,3886,3887,3888,3889,3890,3891,3892,3893,3894,3895,3896,3897,3898,3899,3900,3901,3902,3903,3904,3905,3906,3907,3908,3909,3910,3911,3912,3913,3914,3915,3916,3917,3918,3923,3924,3953,3954,3955,3966,3967,4058,4062,4063,4064,4065,4066,4067,4068,4069,4070,4071,4072,4073,4074,4075,4076,4077,4078,4079,4080,4081,4082,4083,4084,4085,4086,4087,4088,4089,4090,4091,4092,4093,4094,4095,4096,4097,4103,4104,4105,4106,4114,4115,4116,4117,4118,4119,4120,4121,4122,4123,4124,4129,4138,4139,4140,4141,4142,4143,4144,4145,4146,4147,4148,4149,4150,4151,4152,4153,4154,4155,4156,4157,4158,4159,4160,4161,4162,4163,4165,4166,4167,4168,4169,4170,4171,4172,4173,4174,4175,4176,4177,4178,4179,4180,4181,4182,4183,4184,4185,4186,4187,4188,4189,4190,4191,4192,4193,4194,4195,4196,4197,4198,4199,4200,4201,4202,4203,4204,4205,4206,4207,4208,4209,4210,4211,4212,4213,4214,4215,4216,4217,4218,4219,4221,4222,4223,4224,4226,4228,4229,4230,4231,4242,4243,4244,4255,4256,4257,4299,4300,4301,4303,4304,4305,4306,4307,4308,4309,4310,4311,4312,4313,4314,4315,4316,4317,4318,4319,4320,4321,4322,4323,4324,4325,4326,4327,4328,4329,4330,4331,4332,4333,4334,4335,4336,4337,4338,4339,4340,4341,4342,4343,4344,4347,4348,4349,4353,4354,4355,4356,4357,4358,4359,4360,4361,4362,4363,4364,4365,4366,4367,4368,4369,4370,4371,4372,4373,4374,4375,4376,4377,4378,4379,4380,4381,4382,4383,4384,4385,4386,4387,4388,4389,4390,4391,4392,4393,4394,4395,4397,4398,4399,4400,4403,4406,4407,4408,4409,4413,4414,4417,4421,4422,4423,4424,4425,4426,4427,4428,4429,4430,4431,4432,4433,4434,4435,4436,4437,4438,4439,4440,4441,4442,4447,4448,4449,4450,4451,4461,4462,4463,4464,4465,4526,4527,4528,4529,4530,4531,4532,4533,4534,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,4548,4549,4550,4551,4552,4553,4554,4555,4556,4557,4558,4562,4563,4564,4565,4566,4568,4569,4570,4571,4573,4574,4575,4576,4577,4578,4579,4580,4581,4582,4585,4586,4587,4588,4589,4590,4592,4594,4595,4596,4597,4598,4599,4600,4601,4602,4603,4604,4605,4606,4607,4608,4609,4610,4611,4612,4613,4614,4615,4616,4638,4639,4640,4642,4643,4644,4645,4646,4647,4648,4649,4650,4651,4652,4653,4654,4655,4656,4657,4658,4659,4660,4661,4662,4663,4664,4665,4666,4667,4668,4669,4670,4671,4677,4678,4679,4680,4681,4682,4683,4684,4685,4686,4687,4688,4689,4690,4691,4692,4693,4694,4695,4696,4697,4698,4700,4701,4702,4703,4704,4705,4706,4707,4709,4710,4715,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4732,4733,4734,4735,4736,4738,4739,4740,4741,4742,4748,4756,4758,4759,4772,4773,4774,4775,4776,4777,4778,4779,4780,4781,4782,4783,4784,4785,4787,4788,4790,4791,4793,4798,4799,4800,4801,4802,4803,4804,4805,4806,4807,4809,4810,4811,4813,4815,4816,4817,4818,4819,4820,4821,4822,4823,4824,4825,4826,4827,4828,4829,4830,4831,4834,4835,4836,4837,4838,4840,4841,4842,4843,4857,4859,4860,4873,4874,4875,4876,4877,4878,4879,4880,4881,4882,4883,4884,4885,4886,4887,4888,4889,4890,4891,4896,4897,4898,4899,4900,4901,4902,4904,4905,4906,4907,4908,4909,4910,4911,4912,4913,4914,4915,4916,4917,4918,4919,4920,4921,4922,4923,4924,4925,4926,4927,4928,4929,4930,4931,4932,4934,4935,4936,4939,4940,4941,4947,4948,4949,4950,4954,4969,4983,4985,4989,4991,4992,4993,4994,4995,4997,5001,5002,5003,5004,5006,5007,5009,5010,5011,5012,5013,5014,5015,5016,5017,5018,5019,5020,5021,5022,5023,5024,5025,5026,5027,5028,5029,5030,5031,5032,5033,5034,5035,5036,5037,5038,5039,5040,5041,5042,5043,5044,5045,5046,5047,5048,5050,5051,5052,5053,5054,5055,5056,5057,5058,5059,5060,5061,5062,5063,5064,5065,5066,5067,5068,5069,5070,5071,5072,5080,5083,5084,5085,5086,5087,5088,5089,5090,5091,5092,5093,5094,5095,5096,5097,5098,5099,5100,5101,5104,5105,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5116,5117,5118,5119,5120,5121,5122,5123,5124,5125,5127,5128,5129,5130,5132,5133,5134,5135,5136,5137,5138,5139,5140,5141,5142,5143,5144,5146,5147,5148,5149,5151,5152,5153,5154,5155,5156,5157,5158,5160,5162,5163,5164,5171,5175,5209,5210,5216,5217,5218,5221,5222,5223,5224,5226,5227,5228,5230,5232,5233,5234,5235,5236,5237,5238,5239,5240,5241,5242,5246,5247,5248,5251,5263,5268,5269,5271,5272,5273,5288,5301,5313,5314,5315,5316,5317,5319,5320,5322,5325,5327,5328,5330,5331,5332,5333,5334,5335,5336,5337,5338,5339,5340,5341,5342,5343,5344,5345,5346,5347,5348,5349,5350,5351,5352,5353,5354,5355,5356,5357,5358,5359,5360,5361,5362,5363,5364,5365,5366,5367,5368,5369,5370,5371,5372,5373,5374,5375,5376,5377,5378,5379,5380,5381,5382,5383,5384,5385,5386,5433,5434,5435,5436,5437,5438,5439,5440,5441,5442,5443,5447,5448,5449,5450,5451,5452,5453,5454,5455,5456,5457,5458,5459,5460,5461,5462,5463,5464,5465,5466,5467,5468,5469,5470,5471,5472,5473,5477,5478,5479,5480,5481,5483,5486,5487,5488,5489,5490,5491,5492,5493,5494,5495,5496,5497,5498,5499,5500,5501,5502,5503,5504,5505,5506,5507,5508,5509,5510,5511,5512,5513,5514,5516,5517,5518,5519,5520,5521,5522,5523,5526,5527,5528,5529,5536,5540,5541,5542,5651,5652,5653,5654,5655,5656,5659,5660,5661,5662,5663,5664,5672,5673,5674,5675,5676,5677,5678,5679,5680,5681,5682,5683,5684,5686,5687,5688,5689,5690,5691,5695,5696,5697,5698,5699,5700,5701,5702,5703,5704,5705,5706,5707,5708,5709,5710,5711,5712,5713,5714,5715,5716,5717,5718,5719,5720,5721,5722,5723,5724,5725,5726,5727,5728,5729,5730,5742,5743,5744,5745,5746,5747,5748,5749,5750,5751,5757,5758,5759,5760,5761,5762,5763,5764,5765,5766,5767,5768,5769,5770,5772,5780,5782,5783,5784,5785,5786,5797,5798,5799,5800,5801,5802,5803,5805,5806,5808,5809,5810,5811,5812,5814,5815,5818,5819,5823,5828,5829,5832,5833,5836,5837,5840,5841,5846,5851,5854,5855,5856,5862,5863,5864,5870,5871,5872,5882,5890,5891,5892,5893,5894,5895,5915,5916,5917,5918,5919,5920,5939,5941,5942,5943,5945,5947,5953,5954,5955,5986,5988,5989,5991,5992,5993,5994,5995,5996,6016,6017,6018,6019,6020,6021,6041,6042,6043,6044,6045,6046,6066,6067,6068,6069,6070,6071,6090,6092,6093,6095,6096,6097,6098,6099,6100,6108,6109,6110,6111,6112,6113,6114,6152,6153,6179,6214,6227,6229,6230,6238,6239,6240,6241,6242,6243,6244,6245,6246,6247,6248,6249,6250,6251,6256,6257,6266,6272,6386,6387,6388,6390,6400,6403,6404,6416,6420,6466,6467,6469,6470,6471,6472,6473,6474,6475,6477,6478,6485,6486,6487,6489,6573,6574,6576,6578,6580,6581,6582,6612,6670,6671,6674,6675,6676,6678,6679,6686,6726,6748,6750,6751,6753,6754,6755,6757,6758,6760,6761,6762,6763,6764,6774,6775,6776,6777,6778,6786,6787,6788,6789,6790,6798,6861,6862,6863,6864,6865,6866,6867,6872,6873,6874,6875,6881,6884,6889,6890,6891,6892,6893,6899,6906,6908,6909,6910,6912,6913,6934,6935,6954,6955,6956,6963,6976,6977,7089,7099,7102,7104,7105,7106,7253,7254,7607,7608,7609,7610,7618,7619,7620,7622,7623,7625,7628,7631,7634,7637,7640,7678,7679,7682,7711,7717,7718,7719,7720,7722,7724,7725,7726,7728,7731,7733,7735,7736,7737,7738,7739,7740,7741,7742,7743,7744,7745,7746,7747,7748,7749,7750,7751,7753,7754,7755,7757,7760,7762,7774,7777,7780,7783,7785,7826,7829,7832,7834,7837,7840,7843,7845,7848,7851,7854,7856,7859,7862,7865,7867,7875,7877,7881,7883,8133,8134,8135,8136,8137,8139,8144,8145,8162,8163,8168,8176,8299,8300,8316,8317,8319,8321,8324,8326,8327,8335,8348,8349,8350,8351,8352,8353,8366,8367,8371,8470,8471,8472,8493,8494,8514,8515,8615,8616,8617,8620,8621,8625,8645,8646,8647,8650,8709,8710,8711,8713,8721,8722,8732,8777,8778,8779,8780,8781,8782,8783,8784,8785,8804,8805,8806,8807,8808,8817,8818,]
