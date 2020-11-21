window.BENCHMARK_DATA = {
  "lastUpdate": 1605956433920,
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
      }
    ]
  }
}