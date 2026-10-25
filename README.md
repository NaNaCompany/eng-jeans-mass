# 진스 질량 계산기

균일한 기체의 선형 진스 불안정성에서 임계 파장 구의 질량을 계산한다.

- ID: E108
- App: https://nanalab.kr/eng-jeans-mass/
- Repository: https://github.com/NaNaCompany/eng-jeans-mass
- Formula: M_J = π^(5/2)c_s³ / (6G^(3/2)√ρ)

## Model and data

ρ>0, 0<c_s<c. λ_J=c_s√(π/(Gρ))를 지름으로 하는 구의 질량 M_J=(4π/3)ρ(λ_J/2)³를 사용한다. 무한·균일·비회전·비자성의 비상대론 기체에 대한 선형 섭동 모델이다. 입력 음속은 해당 압력-밀도 응답의 미분 음속이다. 유한 구름의 비리얼 질량이나 원반의 Toomre 질량과 다르다. 난류·자기장·회전·냉각 이력·우주 팽창을 제외한다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
