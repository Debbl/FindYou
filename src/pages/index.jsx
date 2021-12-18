import * as React from 'react';
import '../assets/css/reset.css';
import '../assets/css/index.css';
import 'animate.css';
import HomeLayout from '../components/home-layout';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function IndexPage() {
  useEffect(() => {
    document.title = 'Find You';
  });
  useEffect(() => {
    (function (i, s, o, g, r, a, m) {
      i['DaoVoiceObject'] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      a.charset = 'utf-8';
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      'script',
      ('https:' == document.location.protocol ? 'https:' : 'http:') +
        '//widget.daovoice.io/widget/73aff5e1.js',
      'daovoice'
    );
    // eslint-disable-next-line no-undef
    daovoice('init', {
      app_id: '73aff5e1'
    });
    // eslint-disable-next-line no-undef
    daovoice('update');
  });
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <HomeLayout />
    </>
  );
}

export default IndexPage;
