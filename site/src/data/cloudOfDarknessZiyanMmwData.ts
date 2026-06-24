import type {ChaoticStrat} from './cloudOfDarknessChaoticData';

export const ziyanMmwStrat: ChaoticStrat = {
  "stratName": "ziyan",
  "stratUrl": {
    "bilibili": "https://www.bilibili.com/video/BV1KMPVeSEbr",
    "kanatan": "http://kanatan.info/archives/38822195.html",
    "raidplan": "https://raidplan.io/plan/BBhK6qoMdxoGX_0C"
  },
  "description": "子言+MMW视频内提到的イディル改（田园郡改@idyllshireinfo）打法",
  "notes": "东西平台都是以场外为12点",
  "strats": [
    {
      "alliance": "A",
      "role": "Tank",
      "party": 1,
      "notes": "左侧/西侧平台上，拉Boss朝场外，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈内 靠北 和H2一组",
          "imageUrl": "./strats/ziyan/platform-pairs-west.png",
          "mask": "radial-gradient(circle at 50% 33%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "西北偏北",
          "imageUrl": "./strats/ziyan/platform-spread-west.png",
          "mask": "radial-gradient(circle at 40% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/platform-towers-west.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "不引导，站在小云妈脚下",
          "imageUrl": "./strats/ziyan/platform-west-brambles.png",
          "mask": "radial-gradient(circle at 14.3% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠东",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 80% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台外侧",
          "imageUrl": "./strats/ziyan/platform-west-swap.png",
          "mask": "radial-gradient(circle at 18% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 35.9% 39.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 20.5% 64.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.9% 49.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 59.7% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 19.8% 34.7%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.2% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Tank",
      "party": 2,
      "notes": "华容道的西北角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-brambles-pre.png",
          "mask": "radial-gradient(circle at 65% 38%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 84% 72.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 63% 42.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-swap.png",
          "mask": "radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在危险区： 优先级最高往安全区走",
          "imageUrl": "./strats/ziyan/tiles-north-cw.png",
          "mask": "radial-gradient(circle at 81.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在安全区： 去水平方向的突起",
          "imageUrl": "./strats/ziyan/tiles-north-ccw.png",
          "mask": "radial-gradient(circle at 6.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapWarning": "请迅速挑衅重新建立仇恨，T需要拉Boss朝场外",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 北 和D3一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠东",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 20% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 35.9% 39.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 20.5% 64.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.9% 49.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 59.7% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 19.8% 34.7%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.2% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Healer",
      "party": 1,
      "notes": "华容道的西北角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-brambles-pre.png",
          "mask": "radial-gradient(circle at 41.1% 17.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 49.2% 35.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 37.2% 24.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-swap.png",
          "mask": "radial-gradient(circle at 52.7% 51.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在危险区： 优先级次于T往安全区走",
          "imageUrl": "./strats/ziyan/tiles-north-cw.png",
          "mask": "radial-gradient(circle at 68.7% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在安全区： 去垂直方向的突起",
          "imageUrl": "./strats/ziyan/tiles-north-ccw.png",
          "mask": "radial-gradient(circle at 18.7% 16.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 西 和D2一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠西",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 20% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Healer",
      "party": 2,
      "notes": "左侧/西侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈外 北 和MT一组",
          "imageUrl": "./strats/ziyan/platform-pairs-west.png",
          "mask": "radial-gradient(circle at 50% 16%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "东北偏北",
          "imageUrl": "./strats/ziyan/platform-spread-west.png",
          "mask": "radial-gradient(circle at 65% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/platform-towers-west.png",
          "mask": "radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "外侧靠东的种子",
          "imageUrl": "./strats/ziyan/platform-west-brambles.png",
          "mask": "radial-gradient(circle at 30% 31%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠西",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 80% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台外侧",
          "imageUrl": "./strats/ziyan/platform-west-swap.png",
          "mask": "radial-gradient(circle at 18% 77%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Melee",
      "party": 1,
      "notes": "左侧/西侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈内 西 和D3一组",
          "imageUrl": "./strats/ziyan/platform-pairs-west.png",
          "mask": "radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "西",
          "imageUrl": "./strats/ziyan/platform-spread-west.png",
          "mask": "radial-gradient(circle at 6.6% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/platform-towers-west.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "不引导，站在小云妈脚下",
          "imageUrl": "./strats/ziyan/platform-west-brambles.png",
          "mask": "radial-gradient(circle at 14.3% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠东",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 34.5% 37.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台外侧",
          "imageUrl": "./strats/ziyan/platform-west-swap.png",
          "mask": "radial-gradient(circle at 18% 15.4%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Melee",
      "party": 2,
      "notes": "左侧/西侧平台,以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈内 东 和D4一组",
          "imageUrl": "./strats/ziyan/platform-pairs-west.png",
          "mask": "radial-gradient(circle at 72% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "东",
          "imageUrl": "./strats/ziyan/platform-spread-west.png",
          "mask": "radial-gradient(circle at 91% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/platform-towers-west.png",
          "mask": "radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "内侧靠东的种子",
          "imageUrl": "./strats/ziyan/platform-west-brambles.png",
          "mask": "radial-gradient(circle at 74.6% 33.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠西",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 40% 35%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台内侧",
          "imageUrl": "./strats/ziyan/platform-west-swap.png",
          "mask": "radial-gradient(circle at 87.7% 18.0%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈外 西\n和原内场的奶一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 17.9% 46.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠西",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 67.5% 38.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 38.1% 32.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Ranged",
      "party": 1,
      "notes": "左侧/西侧平台,以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈外 西 和D1一组",
          "imageUrl": "./strats/ziyan/platform-pairs-west.png",
          "mask": "radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "西北偏西",
          "imageUrl": "./strats/ziyan/platform-spread-west.png",
          "mask": "radial-gradient(circle at 15% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/platform-towers-west.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "平台内侧靠西的种子",
          "imageUrl": "./strats/ziyan/platform-west-brambles.png",
          "mask": "radial-gradient(circle at 74.1% 66.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 东侧塔附近",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.8% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 83.3% 31.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台内侧",
          "imageUrl": "./strats/ziyan/platform-west-swap.png",
          "mask": "radial-gradient(circle at 87.7% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈外 北 和原内场T一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 50.0% 10.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 东侧塔附近",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 71.5% 83.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 83.6% 28.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ]
    },
    {
      "alliance": "A",
      "role": "Ranged",
      "party": 2,
      "notes": "左侧/西侧平台,以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈外 东 和D2一组",
          "imageUrl": "./strats/ziyan/platform-pairs-west.png",
          "mask": "radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "东北偏东",
          "imageUrl": "./strats/ziyan/platform-spread-west.png",
          "mask": "radial-gradient(circle at 86.8% 22.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/platform-towers-west.png",
          "mask": "radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "外侧靠西的种子",
          "imageUrl": "./strats/ziyan/platform-west-brambles.png",
          "mask": "radial-gradient(circle at 28.3% 65.4%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 西侧塔附近",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 29.1% 83.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 16.1% 29.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台内侧",
          "imageUrl": "./strats/ziyan/platform-west-swap.png",
          "mask": "radial-gradient(circle at 87.7% 82%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(90deg)"
          }
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈外 东\n和原内场DPS一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 84.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 西侧塔附近",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 72.5% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 16.7% 27.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Tank",
      "party": 1,
      "notes": "华容道西南角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-brambles-pre.png",
          "mask": "radial-gradient(circle at 65% 62%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 82.7% 27.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 63.5% 50%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-swap.png",
          "mask": "radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在安全区： 去水平方向的突起",
          "imageUrl": "./strats/ziyan/tiles-south-cw.png",
          "mask": "radial-gradient(circle at 6.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在危险区： 优先级最高往安全区走",
          "imageUrl": "./strats/ziyan/tiles-south-ccw.png",
          "mask": "radial-gradient(circle at 81.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapWarning": "请迅速挑衅重新建立仇恨，T需要拉Boss朝场外",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 北 和D3一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠东",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 20% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 35.9% 39.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 20.5% 64.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.9% 49.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 59.7% 35.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 19.8% 34.7%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.2% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Tank",
      "party": 2,
      "notes": "华容道东南角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-brambles-pre.png",
          "mask": "radial-gradient(circle at 35% 62%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 16% 27.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 37% 50%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-swap.png",
          "mask": "radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在危险区： 优先级最高往安全区走",
          "imageUrl": "./strats/ziyan/tiles-south-cw.png",
          "mask": "radial-gradient(circle at 19.2% 48.9%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在安全区： 去水平方向的突起",
          "imageUrl": "./strats/ziyan/tiles-south-ccw.png",
          "mask": "radial-gradient(circle at 93.6% 49.1%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapWarning": "请迅速挑衅重新建立仇恨，T需要拉Boss朝场外",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 北 和D3一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠东",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 80% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 40.9% 62.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 78.6% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 70.0% 49.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 64.3% 58.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 79.2% 33.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 70.1% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Healer",
      "party": 1,
      "notes": "华容道西南角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-brambles-pre.png",
          "mask": "radial-gradient(circle at 15.6% 59.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 66.2% 43.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 36.4% 29.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-swap.png",
          "mask": "radial-gradient(circle at 52.7% 17.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在安全区： 去十字路口北侧的格子准备领跑；激光开动后跟着激光往前走一个格子",
          "imageUrl": "./strats/ziyan/tiles-south-cw.png",
          "mask": "radial-gradient(circle at 18.5% 21.2%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在危险区： 优先级次于T往安全区走",
          "imageUrl": "./strats/ziyan/tiles-south-ccw.png",
          "mask": "radial-gradient(circle at 68.8% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 西 和D2一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠西",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 20% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Healer",
      "party": 2,
      "notes": "华容道东南角",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-brambles-pre.png",
          "mask": "radial-gradient(circle at 84.4% 59.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 33.9% 42.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 61.7% 29.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-swap.png",
          "mask": "radial-gradient(circle at 47.3% 17.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在危险区： 优先级次于T往安全区走",
          "imageUrl": "./strats/ziyan/tiles-south-cw.png",
          "mask": "radial-gradient(circle at 31.2% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在安全区： 去十字路口北侧的格子准备领跑；激光开动后跟着激光往前走一个格子",
          "imageUrl": "./strats/ziyan/tiles-south-ccw.png",
          "mask": "radial-gradient(circle at 81.5% 21.2%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 西 和D2一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠西",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 80% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Melee",
      "party": 1,
      "notes": "华容道的西北角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-brambles-pre.png",
          "mask": "radial-gradient(circle at 16.5% 37.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 66.9% 55.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 38.0% 64.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-swap.png",
          "mask": "radial-gradient(circle at 52.1% 82.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在危险区： 优先级最后往安全区走",
          "imageUrl": "./strats/ziyan/tiles-north-cw.png",
          "mask": "radial-gradient(circle at 59.4% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在安全区： 去十字路口南侧的格子准备领跑；激光开动后跟着激光往前走一个格子",
          "imageUrl": "./strats/ziyan/tiles-north-ccw.png",
          "mask": "radial-gradient(circle at 18.7% 80.9%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内东\n和A队的D4一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠东",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 65.5% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Melee",
      "party": 2,
      "notes": "华容道东北角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-brambles-pre.png",
          "mask": "radial-gradient(circle at 83.5% 37.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 33.1% 55.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 62.0% 64.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-swap.png",
          "mask": "radial-gradient(circle at 49.9% 82.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在安全区： 去十字路口南侧的格子准备领跑；激光开动后跟着激光往前走一个格子",
          "imageUrl": "./strats/ziyan/tiles-north-cw.png",
          "mask": "radial-gradient(circle at 81.3% 80.9%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在危险区： 优先级最后往安全区走",
          "imageUrl": "./strats/ziyan/tiles-north-ccw.png",
          "mask": "radial-gradient(circle at 39.6% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内东\n和C队的D4一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠东",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 34.5% 37.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Ranged",
      "party": 1,
      "notes": "华容道西南角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-brambles-pre.png",
          "mask": "radial-gradient(circle at 41.1% 82.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 48.9% 62.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 38.1% 72.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-swap.png",
          "mask": "radial-gradient(circle at 52.7% 48.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在安全区： 去垂直方向的突起",
          "imageUrl": "./strats/ziyan/tiles-south-cw.png",
          "mask": "radial-gradient(circle at 18.7% 83.3%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在危险区： 优先级最低往安全区走",
          "imageUrl": "./strats/ziyan/tiles-south-ccw.png",
          "mask": "radial-gradient(circle at 59.4% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了东侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内东\n和A队的D4一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠东",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 65.5% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的东北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 46.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 65.3% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 35.4% 50.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 47.6% 36.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.6% 70.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.2% 26.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的东南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-chaser-pre.png",
          "mask": "radial-gradient(circle at 89.0% 64.9%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 53.2% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 37.1% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 49.6% 61.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 52.4% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 52.8% 75.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "B",
      "role": "Ranged",
      "party": 2,
      "notes": "华容道东南角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-brambles-pre.png",
          "mask": "radial-gradient(circle at 58.9% 82.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-wc.png",
          "mask": "radial-gradient(circle at 51.1% 62.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 61.9% 72.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southeast-swap.png",
          "mask": "radial-gradient(circle at 47.3% 48.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在危险区： 优先级最低往安全区走",
          "imageUrl": "./strats/ziyan/tiles-south-cw.png",
          "mask": "radial-gradient(circle at 40.6% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在安全区： 去垂直方向的突起",
          "imageUrl": "./strats/ziyan/tiles-south-ccw.png",
          "mask": "radial-gradient(circle at 81.3% 83.3%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内东\n和C队的D4一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 72.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠东",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 34.5% 37.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Tank",
      "party": 1,
      "notes": "右侧/东侧平台，拉Boss朝场外，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈内 北 和H2一组",
          "imageUrl": "./strats/ziyan/platform-pairs-east.png",
          "mask": "radial-gradient(circle at 50% 33%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "西北偏北",
          "imageUrl": "./strats/ziyan/platform-spread-east.png",
          "mask": "radial-gradient(circle at 40% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/platform-towers-east.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "不引导，站在小云妈脚下",
          "imageUrl": "./strats/ziyan/platform-east-brambles.png",
          "mask": "radial-gradient(circle at 85.7% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠东",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 20% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台外侧",
          "imageUrl": "./strats/ziyan/platform-east-swap.png",
          "mask": "radial-gradient(circle at 82% 48%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 40.9% 62.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 78.6% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 70.0% 49.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 64.3% 58.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 79.2% 33.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 70.1% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Tank",
      "party": 2,
      "notes": "华容道东北角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-brambles-pre.png",
          "mask": "radial-gradient(circle at 35% 38%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 16% 72.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 37% 42.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-swap.png",
          "mask": "radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在安全区： 去水平方向的突起",
          "imageUrl": "./strats/ziyan/tiles-north-cw.png",
          "mask": "radial-gradient(circle at 93.8% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在危险区： 优先级最高往安全区走",
          "imageUrl": "./strats/ziyan/tiles-north-ccw.png",
          "mask": "radial-gradient(circle at 18.8% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapWarning": "请迅速挑衅重新建立仇恨，T需要拉Boss朝场外，",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 北 和D3一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 51% 30%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠东",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 80% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 40.9% 62.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 78.6% 63.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 70.0% 49.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速挑衅重新建立仇恨 T需要换到逆时针方向的路口上（如潜地炮预站位）",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 64.3% 58.6%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 79.2% 33.4%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 70.1% 52.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Healer",
      "party": 1,
      "notes": "华容道东北角",
      "startingArea": "Tiles",
      "strats": [
        {
          "mechanic": "基础站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-idle.png"
        },
        {
          "mechanic": "种子弹预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-brambles-pre.png",
          "mask": "radial-gradient(circle at 58.9% 17.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "种子弹放置",
          "description": "\n\n优先级: H > D > T"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-wc.png",
          "mask": "radial-gradient(circle at 49.8% 35.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-aoe-spread.png",
          "mask": "radial-gradient(circle at 61.9% 24.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        },
        {
          "mechanic": "换线",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northeast-swap.png",
          "mask": "radial-gradient(circle at 47.3% 51.8%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        }
      ],
      "activePivot": [
        {
          "mechanic": "回旋式波动炮-顺时针",
          "description": "你在安全区： 去垂直方向的突起",
          "imageUrl": "./strats/ziyan/tiles-north-cw.png",
          "mask": "radial-gradient(circle at 81.3% 16.7%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        },
        {
          "mechanic": "回旋式波动炮-逆时针",
          "description": "你在危险区： 优先级次于T往安全区走",
          "imageUrl": "./strats/ziyan/tiles-north-ccw.png",
          "mask": "radial-gradient(circle at 31.3% 50%, black 7%, rgba(0, 0, 0, 0.2) 7%)"
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈内 西 和D2一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 27.5% 47.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠西",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 80% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Healer",
      "party": 2,
      "notes": "右侧/东侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈外 北 和MT一组",
          "imageUrl": "./strats/ziyan/platform-pairs-east.png",
          "mask": "radial-gradient(circle at 50% 16%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "东北偏北",
          "imageUrl": "./strats/ziyan/platform-spread-east.png",
          "mask": "radial-gradient(circle at 65% 10%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/platform-towers-east.png",
          "mask": "radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "外侧靠东的种子",
          "imageUrl": "./strats/ziyan/platform-east-brambles.png",
          "mask": "radial-gradient(circle at 73.2% 66.5%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台内侧 靠西",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 20% 37.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 37.5% 80%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台外侧",
          "imageUrl": "./strats/ziyan/platform-east-swap.png",
          "mask": "radial-gradient(circle at 82% 77%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Melee",
      "party": 1,
      "notes": "右侧/东侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈内 西 和D3一组",
          "imageUrl": "./strats/ziyan/platform-pairs-east.png",
          "mask": "radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "西",
          "imageUrl": "./strats/ziyan/platform-spread-east.png",
          "mask": "radial-gradient(circle at 6.6% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/platform-towers-east.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "不引导，站在小云妈脚下",
          "imageUrl": "./strats/ziyan/platform-east-brambles.png",
          "mask": "radial-gradient(circle at 85.7% 50%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠东",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 65.5% 62.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 62.5% 34.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台外侧",
          "imageUrl": "./strats/ziyan/platform-east-swap.png",
          "mask": "radial-gradient(circle at 82% 15.4%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        }
      ],
      "anotherSwapNote": "我换到了华容道的西北角！现在怎么站?",
      "anotherSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "anotherSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-northwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.4% 35.1%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 46.6% 10.3%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-wc.png",
          "mask": "radial-gradient(circle at 65.2% 50.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.4% 36.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-northwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.2% 70.0%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 48.8% 26.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ],
      "thirdSwapNote": "我换到了华容道的西南角！现在怎么站?",
      "thirdSwapWarning": "请迅速去突起上站好（参考潜地炮预站位），优先级H≈D>T",
      "thirdSwapStrats": [
        {
          "mechanic": "潜地炮预站位",
          "description": "",
          "imageUrl": "./strats/ziyan/tiles-southwest-chaser-pre.png",
          "mask": "radial-gradient(circle at 11.5% 52.6%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 34.9% 88.9%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "凝缩式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-wc.png",
          "mask": "radial-gradient(circle at 63.0% 46.0%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 51.5% 61.2%, black 12%, rgba(0, 0, 0, 0.2) 12%)"
        },
        {
          "mechanic": "分散式波动炮",
          "description": "",
          "imageUrl": "./strats/ziyan/postswap-tiles-southwest-aoe-spread.png",
          "mask": "radial-gradient(circle at 49.8% 30.9%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 49.4% 75.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)"
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Melee",
      "party": 2,
      "notes": "右侧/东侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈内 东 和D4一组",
          "imageUrl": "./strats/ziyan/platform-pairs-east.png",
          "mask": "radial-gradient(circle at 72% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "东",
          "imageUrl": "./strats/ziyan/platform-spread-east.png",
          "mask": "radial-gradient(circle at 91% 45%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/platform-towers-east.png",
          "mask": "radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "内侧靠东的种子",
          "imageUrl": "./strats/ziyan/platform-east-brambles.png",
          "mask": "radial-gradient(circle at 25.6% 68.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠西",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 67.5% 38.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 38.1% 32.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台内侧",
          "imageUrl": "./strats/ziyan/platform-east-swap.png",
          "mask": "radial-gradient(circle at 12.3% 18.0%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈外 西\n和原内场的奶一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 17.9% 46.5%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "平台外侧 靠西",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 40% 35%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Ranged",
      "party": 1,
      "notes": "右侧/东侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈外 西 和D1一组",
          "imageUrl": "./strats/ziyan/platform-pairs-east.png",
          "mask": "radial-gradient(circle at 15% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "西北偏西",
          "imageUrl": "./strats/ziyan/platform-spread-east.png",
          "mask": "radial-gradient(circle at 15% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "北/西",
          "imageUrl": "./strats/ziyan/platform-towers-east.png",
          "mask": "radial-gradient(circle at 18% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 22%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "内侧靠西的种子",
          "imageUrl": "./strats/ziyan/platform-east-brambles.png",
          "mask": "radial-gradient(circle at 23.4% 30.6%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 东侧塔附近",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 71.5% 83.6%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 83.6% 28.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台内侧",
          "imageUrl": "./strats/ziyan/platform-east-swap.png",
          "mask": "radial-gradient(circle at 12.3% 49%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈外 北 和原内场T一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 50.0% 10.0%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 东侧塔附近",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 31.8% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 83.3% 31.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ]
    },
    {
      "alliance": "C",
      "role": "Ranged",
      "party": 2,
      "notes": "右侧/东侧平台，以场外作为12点",
      "startingArea": "Platform",
      "strats": [
        {
          "mechanic": "分摊",
          "description": "目标圈外 东 和D2一组",
          "imageUrl": "./strats/ziyan/platform-pairs-east.png",
          "mask": "radial-gradient(circle at 85% 50%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散",
          "description": "东北偏东",
          "imageUrl": "./strats/ziyan/platform-spread-east.png",
          "mask": "radial-gradient(circle at 86.8% 22.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/platform-towers-east.png",
          "mask": "radial-gradient(circle at 82% 50%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 50% 78%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(90deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "引导种子",
          "description": "外侧靠西的种子",
          "imageUrl": "./strats/ziyan/platform-east-brambles.png",
          "mask": "radial-gradient(circle at 71.3% 26.9%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 西侧塔附近",
          "imageUrl": "./strats/ziyan/platform-east-aoe-spread.png",
          "mask": "radial-gradient(circle at 72.5% 16.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-east-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 16.7% 27.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        },
        {
          "mechanic": "换线",
          "description": "平台内侧",
          "imageUrl": "./strats/ziyan/platform-east-swap.png",
          "mask": "radial-gradient(circle at 12.3% 82%, black 15%, rgba(0, 0, 0, 0.2) 15%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "",
            "relative": "rotate(270deg)"
          }
        }
      ],
      "swapNote": "我换到了西侧的平台上！现在怎么站?",
      "swapStrats": [
        {
          "mechanic": "踩塔",
          "description": "南/东",
          "imageUrl": "./strats/ziyan/postswap-platform-towers.png",
          "mask": "radial-gradient(circle at 50.0% 78.5%, black 20%, rgba(0, 0, 0, 0.2) 20%), radial-gradient(circle at 78.9% 48.8%, black 20%, rgba(0, 0, 0, 0.2) 20%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分摊",
          "description": "目标圈外 东\n和原内场DPS一组",
          "imageUrl": "./strats/ziyan/postswap-platform-pairs.png",
          "mask": "radial-gradient(circle at 84.4% 46.1%, black 12%, rgba(0, 0, 0, 0.2) 12%)",
          "alignmentTransforms": {
            "original": "",
            "truenorth": "rotate(270deg)",
            "relative": ""
          }
        },
        {
          "mechanic": "分散式波动炮",
          "description": "外环上 西侧塔附近",
          "imageUrl": "./strats/ziyan/platform-west-aoe-spread.png",
          "mask": "radial-gradient(circle at 29.1% 83.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)",
          "alignmentImages": {
            "original": "",
            "truenorth": "",
            "relative": "./strats/ziyan/platform-west-aoe-spread-rotated.png"
          },
          "alignmentMasks": {
            "original": "",
            "truenorth": "",
            "relative": "radial-gradient(circle at 16.1% 29.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)"
          }
        }
      ]
    }
  ]
};
