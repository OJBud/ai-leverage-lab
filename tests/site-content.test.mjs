import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { projects } from '../src/data/projects.js';
import { serviceTiers } from '../src/data/services.js';

const root = resolve(import.meta.dirname, '..');

test('only published case studies are exposed', () => {
  assert.deepEqual(projects.map((project) => project.slug), ['firstlook', 'budapp', 'small-circle', 'whiteball-media']);
  assert.ok(!projects.some((project) => project.slug === 'ksa' || project.slug === 'soundpals'));
  for (const script of ['scripts/prerender.mjs', 'scripts/generate-sitemap.mjs']) {
    assert.match(readFileSync(resolve(root, script), 'utf8'), /import \{ projects \} from/);
  }
  assert.doesNotMatch(readFileSync(resolve(root, 'src/pages/Home.jsx'), 'utf8'), /slug: 'ksa'|soundpals|SoundPals/);
  assert.doesNotMatch(readFileSync(resolve(root, 'src/data/services.js'), 'utf8'), /KSA/);
});

test('Small Circle artwork uses cream, and enlargement is selective', () => {
  const circle = projects.find((project) => project.slug === 'small-circle');
  for (const shot of circle.screenshots.slice(0, 2)) {
    assert.equal(shot.tone, 'cream');
    assert.equal(shot.expandable, true);
  }
  assert.equal(projects.flatMap((project) => project.screenshots).filter((shot) => shot.expandable).length, 11);
  const projectSource = readFileSync(resolve(root, 'src/data/projects.js'), 'utf8');
  assert.match(projectSource, /slug: 'soundpals',\n\s+published: false/);
});

test('every published case-study image and the founder photo exist', () => {
  for (const project of projects) {
    for (const src of [project.screenshot, ...(project.headerImage ? [project.headerImage] : []), ...project.screenshots.map((shot) => shot.src)]) {
      assert.ok(existsSync(resolve(root, 'public', src.slice(1))), src);
    }
  }
  assert.ok(existsSync(resolve(root, 'public/images/christian-and-bud.jpg')));
});

test('sprint terms, legal name and proof stay within the locked decisions', () => {
  const sprint = serviceTiers.find((service) => service.name === 'Product Sprint');
  const clarity = serviceTiers.find((service) => service.name === 'Clarity Session');
  assert.equal(sprint.price, '£5,500');
  assert.match(sprint.priceNote, /£3,500/);
  assert.match(sprint.priceNote, /Clarity Session/);
  assert.doesNotMatch(sprint.price, /3,500/);
  const terms = sprint.terms.join(' ');
  assert.match(terms, /half up front, half at go-live/i);
  assert.match(terms, /own the code once the final half is paid/i);
  assert.match(terms, /30 days/);
  assert.match(terms, /iOS or Android store release is not included/);
  assert.match(terms, /Hosting/);
  assert.match(terms, /No service level agreement/);
  assert.equal(sprint.examples, 'BudApp, FirstLook');
  assert.doesNotMatch(JSON.stringify(serviceTiers), /SoundPals/);
  assert.equal(clarity.price, '£150');
  assert.match(`${clarity.shortDesc} ${clarity.whatYouGet}`, /60–90 minutes/);
  assert.match(`${clarity.shortDesc} ${clarity.whatYouGet}`, /30 days/);

  const bud = projects.find((project) => project.slug === 'budapp');
  assert.match(bud.tags.join(' '), /iOS/);
  assert.match(bud.tags.join(' '), /Android/);

  const whiteball = projects.find((project) => project.slug === 'whiteball-media');
  assert.equal(whiteball.name, 'White Ball Media');
  assert.equal(whiteball.liveUrl, 'https://whiteballmedia.com');
  const whiteballCopy = JSON.stringify(whiteball);
  assert.match(whiteballCopy, /Kerry Ball/);
  assert.match(whiteballCopy, /\bhe\b/);
  assert.match(whiteballCopy, /\bhim\b/);
  assert.doesNotMatch(whiteballCopy, /\bshe\b|\bherself\b|\bher\b/i);
  assert.match(whiteballCopy, /finished and live/i);
  assert.match(whiteballCopy, /Thoughtfully built by Bud Technologies/i);
  assert.doesNotMatch(whiteballCopy, /KPMG|Deloitte|testimonial|37 enterprise|paying customers/i);
  assert.doesNotMatch(JSON.stringify(sprint), /SoundPals/);

  const footer = readFileSync(resolve(root, 'src/components/Footer.jsx'), 'utf8');
  const home = readFileSync(resolve(root, 'src/pages/Home.jsx'), 'utf8');
  assert.match(footer, /Bud Technologies Ltd/);
  assert.match(footer, /17455486/);
  assert.doesNotMatch(footer, /Bud Technology Ltd/);
  assert.match(home, /legalName: 'Bud Technologies Ltd'/);
  assert.doesNotMatch(home, /Bud Technology Ltd/);
});

test('public copy names the company Bud Technologies', () => {
  function check(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) check(path);
      else if (/\.(js|jsx|css|html)$/.test(entry.name)) {
        assert.doesNotMatch(readFileSync(path, 'utf8'), /Bud Technology(?!s)/, path);
      }
    }
  }
  check(resolve(root, 'src'));
  assert.doesNotMatch(readFileSync(resolve(root, 'index.html'), 'utf8'), /Bud Technology(?!s)/);
  assert.match(readFileSync(resolve(root, 'src/components/Footer.jsx'), 'utf8'), /Bud Technologies Ltd/);
  assert.match(readFileSync(resolve(root, 'src/components/Brand.jsx'), 'utf8'), /Bud Technologies/);
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
