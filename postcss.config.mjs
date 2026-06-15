// PostCSS config — ES module (project uses "type": "module")
//
// Features actually used in global.css:
//   - @custom-media  (stage 1) — breakpoint aliases like --sm, --md, --lg
//   - nesting-rules  (stage 2) — CSS nesting with `&`
//
// Using stage: 2 (stable features only) + explicit feature flags is safer than
// stage: 0 which enables every experimental draft proposal.
export default {
    plugins: {
        'postcss-preset-env': {
            stage: 2,
            features: {
                'custom-media-queries': true,
                'nesting-rules': true,
            },
        },
    },
};
