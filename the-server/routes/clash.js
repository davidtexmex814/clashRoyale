const express = require("express");
const router = express.Router();
const clashapi = require("clashapi");
const axios = require("axios");

router.get("/api/cards", (req, res, next) => {
  clashapi.cards().then(result => {
    result.map(c => {
      const name = c.idName;
      // c.arena = c.arena.toString();
      c.elixirCost = c.elixirCost.toString();
      c.image = `http://www.clashapi.xyz/images/cards/${name}.png`;
    });
    res.json(result);
  });
});

router.get("/api/cards/:id", (req, res, next) => {
  clashapi.cards(req.params.id).then(result => {
    const name = result.idName;
    result.life = result.order + result._id.replace(/[^1-9.]/g, "").slice(10, 11) + 2;
    result.damage = result.order + result._id.replace(/[^1-9.]/g, "").slice(9, 11);
    result.order = result.order.toString();
    result.order = result.order.slice(0, 1);
    result.attackSpeed = 0 + "." + (result.elixirCost * result.order).toString().split("");
    result.image = `http://www.clashapi.xyz/images/cards/${name}.png`;
    if(result.life > result.damage){
      result.attackMe = result.life - result.damage;
      result.attackMe = result.attackMe.toString();
    // const receiveDamage = c => {
    //   return c.attackMe = c.life - c.damage;
    // }
    // result.attackMe = [];
    //   result.attackMe.push(receiveDamage(result));
  }
    res.json(result);
  });
});

router.get("/api/randomCards", (req, res, next) => {
  clashapi.cards().then(result => {
    result.map(c => {
      const name = c.idName;
      c.image = `http://www.clashapi.xyz/images/cards/${name}.png`;
    });
    let random = result.slice(0);
    let cardRandom = [];
    for (let i = 0; i < 8; i++) {
      let cartas = random[Math.floor(Math.random() * random.length)];
      let index = random.indexOf(cartas);
      random.splice(index, 1);
      cardRandom.push(cartas);
    }
    // console.log(cardRandom);
    return res.json(cardRandom);
  });
});

router.get("/api/chests", (req, res, next) => {
  clashapi.chests().then(result => {
    result.map(c => {
      const name = c.idName;
      c.image = `http://www.clashapi.xyz/images/chests/${name}.png`;
      c.image = c.image.split("-1")[0] + c.image.split("-1")[1];
    });
    let chest = result.splice(0, 11);
    res.json(chest);
  });
});

router.get("/api/chests/:id", (req, res, next) => {
  clashapi.chests(req.params.id).then(result => {
    const name = result.idName;
    result.image = `http://www.clashapi.xyz/images/chests/${name}.png`;
    result.image = result.image.split("-1")[0] + result.image.split("-1")[1];
    res.json(result);
  });
});

router.get("/api/arenas", (req, res, next) => {
  clashapi.arenas().then(result => {
    result.map(c => {
      const name = c.idName;
      c.image = `http://www.clashapi.xyz/images/arenas/${name}.png`;
    });
    res.json(result);
  });
});

router.get("/api/arenas/:id", (req, res, next) => {
  clashapi.arenas(req.params.id).then(result => {
    const name = result.idName;
    result.image = `http://www.clashapi.xyz/images/arenas/${name}.png`;

    Promise.all(result.cardUnlocks.map(c => card(c)))
      .then(x => {
        result.cardUnlocks = x;
        res.json(result);
      })
      .catch(e => res.status(500).json({ message: e.message }));
  });
});

const card = c => {
  return clashapi.cards(c).then(result => {
    const name = result.idName;
    result.image = `http://www.clashapi.xyz/images/cards/${name}.png`;
    return result;
  });
};

router.get("/api/randomArena", (req, res, next) => {
  clashapi.arenas().then(result => {
    result.map(c => {
      const name = c.idName;
      c.image = `http://www.clashapi.xyz/images/arenas/${name}.png`;
    });
    let random = result.slice(0);
    let cardRandom = [];
    for (let i = 0; i < 1; i++) {
      let arenas = random[Math.floor(Math.random() * random.length)];
      let index = random.indexOf(arenas);
      random.splice(index, 1);
      cardRandom.push(arenas);
    }
    // console.log(cardRandom);
    return res.json(cardRandom);
  });
});

router.get("/api/leagues", (req, res, next) => {
  clashapi.leagues().then(result => {
    result.map(c => {
      const name = c.idName;
      c.image = `http://www.clashapi.xyz/images/leagues/${name}.png`;
    });
    res.json(result);
  });
});
router.get("/api/leagues/:id", (req, res, next) => {
  clashapi.leagues(req.params.id).then(result => {
    const name = result.idName;
    result.image = `http://www.clashapi.xyz/images/leagues/${name}.png`;
    res.json(result);
  });
});

router.get("/api/players", (req, res, next) => {
  clashapi.players().then(result => {
    res.json(result);
  });
});

router.get("/api/players/:id", (req, res, next) => {
  clashapi.players(req.params.id).then(result => {
    const name = result.idName;
    result.image = `http://www.clashapi.xyz/images/players/${name}.png`;
    res.json(result);
  });
});

module.exports = router;
