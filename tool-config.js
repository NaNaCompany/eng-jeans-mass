export const tool={
  "id": "E108",
  "slug": "eng-jeans-mass",
  "title": "진스 질량 계산기",
  "title_en": "Jeans Mass Calculator",
  "category": "우주·천체",
  "category_en": "Space and astronomy",
  "fields": [
    {
      "key": "sound",
      "label": "기체 음속 c_s",
      "label_en": "Gas sound speed c_s",
      "dimension": "speed",
      "example": 200,
      "constraint": "positive",
      "display_unit": "ms",
      "display_value": "200"
    },
    {
      "key": "density",
      "label": "균일한 기체 질량밀도 ρ",
      "label_en": "Uniform gas mass density ρ",
      "dimension": "density",
      "example": 1e-17,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1.0000000000000001e-17"
    }
  ],
  "result_label": "진스 질량 M_J",
  "result_label_en": "Jeans mass M_J",
  "result_dimension": "mass",
  "formula": "M_J = π^(5/2)c_s³ / (6G^(3/2)√ρ)",
  "purpose": "균일한 기체의 선형 진스 불안정성에서 임계 파장 구의 질량을 계산한다.",
  "purpose_en": "Calculate the mass of a critical-wavelength sphere in the linear Jeans instability model.",
  "assumptions": "ρ>0, 0<c_s<c. λ_J=c_s√(π/(Gρ))를 지름으로 하는 구의 질량 M_J=(4π/3)ρ(λ_J/2)³를 사용한다. 무한·균일·비회전·비자성의 비상대론 기체에 대한 선형 섭동 모델이다. 입력 음속은 해당 압력-밀도 응답의 미분 음속이다. 유한 구름의 비리얼 질량이나 원반의 Toomre 질량과 다르다. 난류·자기장·회전·냉각 이력·우주 팽창을 제외한다.",
  "assumptions_en": "Required: ρ>0 and 0<c_s<c. The definition is the mass within a sphere of diameter λ_J=c_s√(π/(Gρ)): M_J=(4π/3)ρ(λ_J/2)³. This is linear perturbation theory for an infinite uniform nonrotating nonmagnetic nonrelativistic gas. Supply the derivative sound speed for the relevant pressure-density response. This differs from a finite-cloud virial mass or disk Toomre mass. Excluded: turbulence, magnetic fields, rotation, cooling history and cosmic expansion.",
  "sources": [
    {
      "label": "Edward L. Wright, UCLA · Astronomy 140, §22 Jeans Mass",
      "url": "https://www.astro.ucla.edu/~wright/A140/A140.pdf"
    }
  ],
  "condition": "무한 균일 기체의 선형 진스 모델과 지름 λ_J인 구의 질량 정의를 확인했습니다.",
  "condition_en": "I confirm the uniform infinite-gas linear Jeans model and the sphere-of-diameter-λ_J mass convention.",
  "site": "https://nanalab.kr/eng-jeans-mass/",
  "repository": "https://github.com/NaNaCompany/eng-jeans-mass",
  "groups": [],
  "output_unit": "kg"
};
