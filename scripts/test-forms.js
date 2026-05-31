const forms = [
  {
    role: 'student',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeBaKImSrSxtZEfi0IRzV_TOwbZ8Y6HsqrGnLUCbq3f22_vWw/formResponse',
    payload: {
      'entry.31652753': 'Test Student',
      'entry.1287802871': '9th',
      'entry.320687569': 'student@example.com',
      'entry.286085398': '5551234567',
    },
  },
  {
    role: 'volunteer',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScZKtNlEGC53t_jwbkuDVUtwixhSIKvPihZ_7v3VL8rAoTb8w/formResponse',
    payload: {
      'entry.31652753': 'Test Volunteer',
      'entry.1287802871': 'College',
      'entry.320687569': 'volunteer@example.com',
      'entry.286085398': '5551234568',
    },
  },
  {
    role: 'parent',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd5D4kNOBH1CzN219fleNNABfhe-TzjB3xB5uEpuTg8AkiOqg/formResponse',
    payload: {
      'entry.31652753': 'Test Parent',
      'entry.320687569': 'parent@example.com',
      'entry.286085398': '5551234569',
    },
  },
];

async function submit(form) {
  try {
    const res = await fetch(form.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form.payload),
    });
    const text = await res.text();
    console.log(`\n[${form.role}] status=${res.status}`);
    console.log(text.slice(0, 2000));
  } catch (err) {
    console.error(`\n[${form.role}] error:`, err);
  }
}

(async () => {
  for (const f of forms) {
    await submit(f);
  }
})();
