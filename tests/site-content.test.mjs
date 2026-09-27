import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { projects } from '../src/data/projects.js';

const root = resolve(import.meta.dirname, '..');

test('only published case studies are exposed', () => {
  assert.deepEqual(projects.map((project) => project.slug), ['firstlook', 'budapp', 'small-circle', 'soundpals']);
  assert.ok(!projects.some((project) => project.slug === 'ksa'));
  for (const script of ['scripts/prerender.mjs', 'scripts/generate-sitemap.mjs']) {
    assert.match(readFileSync(resolve(root, script), 'utf8'), /import \{ projects \} from/);
  }
  assert.doesNotMatch(readFileSync(resolve(root, 'src/pages/Home.jsx'), 'utf8'), /slug: 'ksa'/);
  assert.doesNotMatch(readFileSync(resolve(root, 'src/data/services.js'), 'utf8'), /KSA/);
});

test('Small Circle artwork uses cream, and enlargement is selective', () => {
  const circle = projects.find((project) => project.slug === 'small-circle');
  for (const shot of circle.screenshots.slice(0, 2)) {
    assert.equal(shot.tone, 'cream');
    assert.equal(shot.expandable, true);
  }
  const pals = projects.find((project) => project.slug === 'soundpals');
  assert.notEqual(pals.screenshots[0].expandable, true);
  assert.equal(projects.flatMap((project) => project.screenshots).filter((shot) => shot.expandable).length, 11);
});

test('every published case-study image and the founder photo exist', () => {
  for (const project of projects) {
    for (const src of [project.screenshot, ...(project.headerImage ? [project.headerImage] : []), ...project.screenshots.map((shot) => shot.src)]) {
      assert.ok(existsSync(resolve(root, 'public', src.slice(1))), src);
    }
  }
  assert.ok(existsSync(resolve(root, 'public/images/christian-and-bud.jpg')));
});

test('site source contains no em-dashes or encoded em-dashes', () => {
  function check(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) check(path);
      else if (/\.(js|jsx|css)$/.test(entry.name)) {
        assert.doesNotMatch(readFileSync(path, 'utf8'), /\u2014|&mdash;|&#8212;|&#x2014;/i, path);
      }
    }
  }
  check(resolve(root, 'src'));
  assert.doesNotMatch(readFileSync(resolve(root, 'index.html'), 'utf8'), /\u2014|&mdash;/i);
});
