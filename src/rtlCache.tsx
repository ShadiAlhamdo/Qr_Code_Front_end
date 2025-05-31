import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// تكوين JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

// إنشاء كاش للـ RTL
export const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// مزود الأنماط مع دعم RTL
export const RTLProvider = (props) => {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
};
