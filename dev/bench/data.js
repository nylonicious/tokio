window.BENCHMARK_DATA = {
  "lastUpdate": 1608268227942,
  "repoUrl": "https://github.com/nylonicious/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/nylonicious/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605956332404,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179311,
            "range": "± 16366",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 755327,
            "range": "± 246467",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4252708,
            "range": "± 605974",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19237626,
            "range": "± 2419296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/nylonicious/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606502244143,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 214468,
            "range": "± 48918",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 735159,
            "range": "± 152399",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5091804,
            "range": "± 1505862",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20648847,
            "range": "± 2611059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/nylonicious/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607285495101,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 187267,
            "range": "± 24006",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 721472,
            "range": "± 207207",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5088493,
            "range": "± 513947",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20868811,
            "range": "± 2016192",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/nylonicious/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607463587664,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 180641,
            "range": "± 26349",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 686946,
            "range": "± 98086",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4877549,
            "range": "± 1393348",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19148577,
            "range": "± 2541629",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/nylonicious/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607560747421,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156286,
            "range": "± 8393",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 621667,
            "range": "± 24493",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4732661,
            "range": "± 366371",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18035690,
            "range": "± 2323829",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/nylonicious/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607624791583,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158570,
            "range": "± 10917",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 642808,
            "range": "± 46952",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4897864,
            "range": "± 468505",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18756075,
            "range": "± 2815075",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/nylonicious/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607744955513,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158229,
            "range": "± 2405",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 642163,
            "range": "± 32483",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4610280,
            "range": "± 879342",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18315163,
            "range": "± 1887723",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/nylonicious/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608268224153,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 198487,
            "range": "± 56426",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 781149,
            "range": "± 271765",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5540992,
            "range": "± 664376",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21710124,
            "range": "± 2481606",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/nylonicious/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605956433113,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6965072,
            "range": "± 2536289",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7073525,
            "range": "± 1489573",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6489832,
            "range": "± 2551852",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 595,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 586,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 581,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 40856,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 855,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1123185,
            "range": "± 268220",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 798864,
            "range": "± 95108",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/nylonicious/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606502286157,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7135229,
            "range": "± 2758347",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6807855,
            "range": "± 2280370",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6673477,
            "range": "± 3486523",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 923,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 923,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 940,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 63424,
            "range": "± 15085",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1084,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1164818,
            "range": "± 220021",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768327,
            "range": "± 193530",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/nylonicious/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607285544689,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7108131,
            "range": "± 2539729",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6826837,
            "range": "± 1649995",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6573737,
            "range": "± 2559367",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 902,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 908,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 899,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66158,
            "range": "± 6638",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1128,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1146578,
            "range": "± 95225",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 820487,
            "range": "± 32348",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/nylonicious/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607463638447,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6207192,
            "range": "± 2039616",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6633799,
            "range": "± 1533653",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6344864,
            "range": "± 2517892",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 522,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 517,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 518,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 38017,
            "range": "± 3334",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 901,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1124970,
            "range": "± 88886",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 772726,
            "range": "± 69834",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/nylonicious/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607560743453,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5764114,
            "range": "± 2337019",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5559170,
            "range": "± 1130546",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5069796,
            "range": "± 1869146",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 517,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 513,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 505,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 44436,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 753,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 954867,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 684563,
            "range": "± 2103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/nylonicious/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607624879242,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6619075,
            "range": "± 1686431",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6877247,
            "range": "± 1661766",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5965796,
            "range": "± 2341153",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 711,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 677,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 667,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 54146,
            "range": "± 6019",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 980,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1119452,
            "range": "± 84930",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 816805,
            "range": "± 94851",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/nylonicious/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607744988077,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6377637,
            "range": "± 2257218",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6566014,
            "range": "± 1498267",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5905749,
            "range": "± 2193207",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 649,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 649,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 649,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52433,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 906,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1105318,
            "range": "± 84393",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 764939,
            "range": "± 57300",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/nylonicious/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605956524357,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1015,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14558,
            "range": "± 5918",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1046,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15201,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 598,
            "range": "± 23",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/nylonicious/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606502231207,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 907,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14303,
            "range": "± 4749",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 925,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13742,
            "range": "± 3823",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 543,
            "range": "± 114",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/nylonicious/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607285498400,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1013,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15249,
            "range": "± 3662",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1044,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15153,
            "range": "± 4343",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 597,
            "range": "± 31",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/nylonicious/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607463584752,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 713,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12081,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 724,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12272,
            "range": "± 3374",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 419,
            "range": "± 185",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/nylonicious/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607560758018,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1007,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17138,
            "range": "± 7150",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1042,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16673,
            "range": "± 6182",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 590,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/nylonicious/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607624791068,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1010,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14332,
            "range": "± 3496",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1053,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14563,
            "range": "± 3078",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 591,
            "range": "± 50",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/nylonicious/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607744986478,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1003,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15087,
            "range": "± 4518",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1025,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14157,
            "range": "± 3510",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 587,
            "range": "± 39",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/nylonicious/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605956614098,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13691,
            "range": "± 4793",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 922,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 516,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14322,
            "range": "± 4931",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 837,
            "range": "± 212",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/nylonicious/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606502248799,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14973,
            "range": "± 4167",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 962,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 561,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14923,
            "range": "± 5786",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 958,
            "range": "± 176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/nylonicious/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607285515681,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15685,
            "range": "± 4364",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1090,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15578,
            "range": "± 6259",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1091,
            "range": "± 25",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/nylonicious/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607463623078,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16008,
            "range": "± 6778",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1119,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 631,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16283,
            "range": "± 6790",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1128,
            "range": "± 232",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/nylonicious/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607560741995,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13998,
            "range": "± 2701",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 929,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 538,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 12818,
            "range": "± 6581",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 944,
            "range": "± 111",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/nylonicious/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607624829778,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16408,
            "range": "± 5571",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 944,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 577,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16299,
            "range": "± 7610",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 966,
            "range": "± 186",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/nylonicious/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607745004128,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16123,
            "range": "± 5264",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1077,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 578,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15159,
            "range": "± 4923",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1159,
            "range": "± 220",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/nylonicious/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608268222393,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14693,
            "range": "± 3289",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1025,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 615,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16054,
            "range": "± 8945",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1023,
            "range": "± 73",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}