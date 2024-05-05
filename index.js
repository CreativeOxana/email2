const goodbye = (name) => {
  return `Na shledanou, ${name}`;
};

const fillSubject = (subject) => {
  const subjectElm = document.querySelector('.email__subject');
  subjectElm.textContent = subject;
};

const fillBody = (body, name) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.textContent = body;
  const byeELm = document.querySelector('.email__closing');
  byeELm.textContent = goodbye(name);
};

fillSubject('Nepřišly gumičky');
fillBody(
  'Nepřišly gumičky. A co na to počítač? Mlčí. No tak to je konec. Všecko vylejt.',
  'referent Kubrt',
);
// goodbye('Pavel Ovesný');
