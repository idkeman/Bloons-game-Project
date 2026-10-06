import test from "node:test";
import assert from "node:assert/strict";

import {
  KNOWLEDGE_NODES,
  canBuyKnowledge,
  buyKnowledge,
  aggregateKnowledge
} from "../src/knowledge.js";

test("knowledge tree contains thirty unique nodes", () => {
  assert.equal(
    KNOWLEDGE_NODES.length,
    30
  );

  assert.equal(
    new Set(
      KNOWLEDGE_NODES.map(
        (node) => node.id
      )
    ).size,
    30
  );
});

test("knowledge prerequisites form a valid acyclic tree", () => {
  const nodes = new Map(
    KNOWLEDGE_NODES.map(
      (node) => [node.id, node]
    )
  );

  for (const node of KNOWLEDGE_NODES) {
    for (const requirement of node.requires) {
      assert.ok(nodes.has(requirement));
      assert.notEqual(
        requirement,
        node.id
      );
    }
  }
});

test("knowledge purchase requires credits and prerequisites", () => {
  const state = {
    credits: 120,
    purchased: []
  };

  assert.equal(
    canBuyKnowledge(
      state,
      "steady-hands"
    ),
    true
  );

  assert.equal(
    buyKnowledge(
      state,
      "steady-hands"
    ),
    true
  );

  assert.equal(
    state.credits,
    0
  );

  assert.equal(
    buyKnowledge(
      state,
      "deep-focus"
    ),
    false
  );
});

test("knowledge aggregation returns purchased effects only", () => {
  const effects = aggregateKnowledge({
    credits: 0,
    purchased: [
      "steady-hands",
      "deep-focus",
      "sharp-edge"
    ]
  });

  assert.equal(
    effects.projectileSpeed,
    0.02
  );

  assert.equal(
    effects.range,
    0.02
  );

  assert.equal(
    effects.damage,
    0.03
  );
});