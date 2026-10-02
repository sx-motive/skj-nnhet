type Targets = NodeListOf<Element> | HTMLCollectionOf<Element> | Element | null;

type AnimType = 'random' | 'bottom' | 'top' | 'left' | 'right';

const WORD_PATTERN = /(?<!(<\/?[^>]*|&[^;]*))([^\s<]+)/g;
const WORD_TEMPLATE = `$1<span class="word"><span>$2</span></span>`;

const RANDOM_TRANSFORMS = [
  'translate(0, -110%)',
  'translate(0, 110%)',
  'translate(110%, 0)',
  'translate(-110%, 0)',
];

const TRANSFORMS: Record<Exclude<AnimType, 'random'>, string> = {
  bottom: 'translate(0, 120%) skewY(10deg)',
  top: 'translate(0, -120%) skewY(-10deg)',
  left: 'translate(-110%, 0) skewX(10deg)',
  right: 'translate(110%, 0) skewX(-10deg)',
};

export default class AnimaView {
  private readonly targets: Element[];
  private readonly animType: AnimType;

  constructor(targets: Targets, animType: AnimType = 'bottom') {
    if (targets === null) {
      this.targets = [];
    } else if (targets instanceof Element) {
      this.targets = [targets];
    } else {
      this.targets = [...targets];
    }
    this.animType = animType;
  }

  private getTransform() {
    if (this.animType === 'random') {
      return RANDOM_TRANSFORMS[
        Math.floor(Math.random() * RANDOM_TRANSFORMS.length)
      ];
    }
    return TRANSFORMS[this.animType];
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    });

    this.targets.forEach((target) => {
      target.innerHTML = target.innerHTML.replace(WORD_PATTERN, WORD_TEMPLATE);
      for (const word of target.children) {
        (word.lastChild as HTMLElement).style.transform = this.getTransform();
        observer.observe(word);
      }
    });
  }
}
