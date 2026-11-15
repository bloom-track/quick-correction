#!/usr/bin/env python3
"""
Downloads CBSE Class 12 Mathematics (041) board papers from cbse.gov.in.

  python3 scripts/pyq-xii-fetch.py

Files go under docs/content/pyq-xii/<year or year-COMPTT>/ (not in git), and a
citation for each, with size and checksum, goes in docs/content/pyq-xii-sources.json.
Already-downloaded files are kept. There was no 2021 main exam.
"""
import datetime, hashlib, json, os, subprocess, time

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'docs/content')
OUT = os.path.join(ROOT, 'pyq-xii')
PAGE = 'https://www.cbse.gov.in/cbsenew/question-paper.html'
BASE = 'https://www.cbse.gov.in/cbsenew/question-paper'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36'

FILES = [  # folder, exam, path on the server
    ('2016', 'main', '2016/XII/Maths.zip'), ('2017', 'main', '2017/XII/Maths.rar'),
    ('2018', 'main', '2018/XII/Maths.zip'), ('2019', 'main', '2019/XII/Mathematics.zip'),
    ('2020', 'main', '2020/XII/Mathematics.zip'), ('2022', 'main', '2022/XII/Math.zip'),
    ('2023', 'main', '2023/XII/MATHEMATICS.zip'), ('2024', 'main', '2024/XII/MATHEMATICS.zip'),
    ('2025', 'main', '2025/XII/MATHEMATICS.zip'), ('2026', 'main', '2026/XII/Mathematics.zip'),
    ('2017-COMPTT', 'compartment', '2017-COMPTT/XII/Maths.zip'), ('2018-COMPTT', 'compartment', '2018-COMPTT/XII/Maths.zip'),
    ('2019-COMPTT', 'compartment', '2019-COMPTT/XII/Mathematics.zip'), ('2021-COMPTT', 'compartment', '2021-COMPTT/XII/Mathematics.zip'),
    ('2022-COMPTT', 'compartment', '2022-COMPTT/XII/MATHS.zip'), ('2023-COMPTT', 'compartment', '2023-COMPTT/XII/Mathematics.zip'),
    ('2024-COMPTT', 'compartment', '2024-COMPTT/XII/Mathematics.zip'), ('2025-COMPTT', 'compartment', '2025-COMPTT/XII/Mathematics.zip'),
    ('2026-COMPTT', 'compartment', '2026-COMPTT/XII/MATHEMATICS.zip'),
]


# Years the official site no longer has: third-party copies, labelled as such (may be retyped or include solutions).
BY, BYP = 'https://cdn1.byjus.com/wp-content/uploads/2019/10', 'https://byjus.com/cbse-study-material'
VD, VDP = 'https://www.vedantu.com/content-files-downloadable', 'https://www.vedantu.com/previous-year-question-paper'
THIRD_PARTY = [  # folder, file url, page cited, publisher
    ('2012-web', f'{BY}/CBSE-Class-12-Maths-Question-Paper-2012-Set-1.pdf', f'{BYP}/class-12-maths-previous-year-question-papers-2012/', 'byjus'),
    ('2013-web', f'{BY}/CBSE-Class12-Maths-2013-Question-Paper-Set-1.pdf', f'{BYP}/cbse-class-12-maths-question-paper-2013-solved-pdf/', 'byjus'),
    ('2013-web', f'{VD}/5a0fdf83e4b006543b788d07.pdf', f'{VDP}/cbse-maths-class-12-year-2013', 'vedantu'),
    ('2014-web', f'{VD}/5a17c2dce4b08c0bab2dd7bf.pdf', f'{VDP}/cbse-maths-class-12-year-2014', 'vedantu'),
    ('2015-web', f'{VD}/5a0ed1a7e4b08c0bab2d3047.pdf', f'{VDP}/cbse-maths-class-12-year-2015', 'vedantu'),
]


def main():
    sources = []
    jobs = [(folder, exam, f'{BASE}/{path}', PAGE, 'Central Board of Secondary Education', 'official-original') for folder, exam, path in FILES]
    jobs += [(folder, 'main', url, page, pub, 'third-party') for folder, url, page, pub in THIRD_PARTY]
    for folder, exam, url, page, publisher, trust in jobs:
        name = os.path.basename(url)
        if publisher == 'vedantu':
            name = f'vedantu-class-12-maths-{folder[:4]}-{name}'
        dest = os.path.join(OUT, folder, name)
        status = 'kept'
        if not (os.path.exists(dest) and os.path.getsize(dest) > 0):
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            # curl, because some Python installs on macOS lack the CA certificates for cbse.gov.in.
            subprocess.run(['curl', '-sSfL', '--retry', '3', '-A', UA, '-o', dest + '.part', url], check=True, timeout=900)
            os.replace(dest + '.part', dest)
            status = 'downloaded'
            time.sleep(1.5)
        data = open(dest, 'rb').read()
        print(f'{status:10} {folder:12} {len(data) / 1e6:6.1f} MB  {url}', flush=True)
        sources.append({
            'year': int(folder[:4]), 'exam': exam, 'file': os.path.relpath(dest, ROOT), 'url': url, 'page': page,
            'publisher': publisher, 'trust': trust,
            'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest(),
        })
    json.dump({'subject': 'CBSE Class 12 Mathematics (041)', 'fetched': datetime.date.today().isoformat(), 'files': sources},
              open(os.path.join(ROOT, 'pyq-xii-sources.json'), 'w'), indent=1)
    print(f'done: {len(sources)} files')


if __name__ == '__main__':
    main()
