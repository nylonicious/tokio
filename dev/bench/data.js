window.BENCHMARK_DATA = {
  "lastUpdate": 1607463588576,
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
      }
    ]
  }
}