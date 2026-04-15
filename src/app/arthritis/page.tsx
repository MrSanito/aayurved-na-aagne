"use client"

import { useState } from "react";

const images = {
  hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg701s-laCc8kwOZO_amvLbemd59xlXJJ9i6H4HQAie8ux_yLADKjS9MtMKJLSrd2x7ilOwzquHnWps2m9hixab5veRBulwmUmPKOHvRWv8E6hT4M4c-WIdeQmL2Myt2BYDdRXWqRokHedoEXm2xtFNl-zG9gN1PyBVcud9OVUmSKOZByiKMZv2VvB62vDS/s1280/1003112498.jpg",
  stats: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkqUlh2il3wPpMzrmCD2I3XjnCrqUzExzqlGsmhUZDBtWCT-UVbPZGySH-qFguxn-RbUCy56O0g7JnR3B0Sp66geEFXQwGFHftzOty6ctDEhutP2yryZcu7jRDPOOOpZHuXRFajEUtc9gE3p36F1VyF8BEaevEZAMnon-AvZiunXI1XhF4J1pNPfQmLbBR/s1280/1003112499.jpg",
  types: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXTlToektprXoAc7bfGBTW7Z7pdpnHapgV7cUYXLrkHnsLrSCdW7GS_ccSGTlYuOVSk6NgsuEjqg3_G5uFgG6WG1vV-GKIDutB64_BQviwqhUfVYKVOhj6I0Vygt74JEF33DwKRGwz3yJ9kdSaRxJuGyqQVN7Gri-9ydQ-GwWZw-3N_NSgw89mJr__Spei/s1364/1003112585.png",
  osteo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixWxdl0ZOz1VjDWlqYHeaoB-qvCiir47wl1W54C3SHzqmUmeu5GXkyQLV6x9uoQ8M1V0iNZrQ7A8Fq7mlpjRV5oh4ZNJnX_b8GCTS9QpTokfLn6M4Rd7pfwWWRojBz7e75S-7Pf4ZDN4EAvhZCEHzA_P3k0fqbRQKf9baH8vGishKnNSd9wl6T7i0hP7s2/s1280/1003112501.jpg",
  ra: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRBSe6iYw6DEq6SCOMFciolFk-Efwjj7NMOehxFN8iriThXcn-bc8jQyRwroUs0fMRFS4_CTG5Vuv2bwZAv6Beujtgv-wsumSBE7nTxvM7P_bvDW_3uSWlvIeU2WxxTClsmhruEQIiE4b8K-TicpXRrDv8nJ4oI-LoHxBkFS2MQbZ1mOWtnTIuquR3ZyDy/s1280/1003112502.jpg",
  gout: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglgLzCuCi0IiWrbq_XvSewQJTvM0zvr4mwOeRCQaFqFZV5cQCnJmIyOd_Pf4kVa4QfR5WjYh3G-HUk3h-Zg67S3qxmTNrnFgBQsoXy0hk3UlIFphqBJiaLfy7LPBURwIml5QSu_KVLRLew3gDnATPpPnUtdSUJwSdu2PveXikDurg_zNX9HeMevHe1WbDO/s1280/1003112503.jpg",
  causes: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihYIIjo99LUqeDDpfFCzShTkznMzWgdO5QFUvMIIYl7OFmguGcGDKGuWc9NoxS7drxnc24e-CFVpdx8wCZQWdVCnghEc0KsjTZKG-2WD_SVPWi5RVu-wF_UbDx8tiR5rpz7Z5gehtZ1GF03nKVz93niTIUNRyZlvgTa9HJ_eCFuJkv4IvTyhxF4XH2StQA/s1280/1003112507.jpg",
  solution: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsODPFC87u-0BjEOJC76AfeGTT6tlbwXi0mbGPSJrqOdC0wv_P5O3P_p8HO7EI7lHRbcII1g76QaBaorrflEITXPXVy8z96YHwpKhQzE2dteagHHf_OujtTJwzqWagwDvjrg2qnEzRuH74ONTAaYpoweqmAGTojlP0_u9OHttXlfytSmqZI82arhyX4fvU/s1280/1003112508.jpg",
  kitQr: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_PMJW3tPrzZQcTscb8h-5K_BgGobrgMrkQmEYo61q0XTnGAnxx-niNiEVl88Vu8Xw4jb8_iFPfA-bHHOz5UTkMyfaGN1EgCnKFYfMbyjbMMQ6IjVKz7HrXz4hiy9P5NZc9LgE95y7ibqXbKL_2lj3_YZgiTDZPHBWACpF3zKfbM2psWK4ZvGxsyBXnyQW/s320/1003065747.png",
  orthoOilBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKIXvJXByt-ALO_K5-Odp0yLNeZtB02OoavT4MU_v4c1weZ78PwXwJGAd6VVYz9Sn8ZBGUZyAhSxbp6b5jIlBCV0mqp_kbdb7kmYDXeHRV-wswbYyTy8ewSgqbka6WaIABlc92Fb_aUR8Q8xwrLacDvZ0yV-P2mKh1Y-ri21jl_UYafXQbBFEcgg7DDG1b/s1280/1003112510.jpg",
  orthoOil1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwWbGtSwIMhh0dwwSgWfw8STOBlQUwKJTm7T_98KCjfWGErpJPMBXhROgn3G1mYjoz27opbuTsZktPUUqDkwdx0xQ4VgcbHjZJm3VjHF8dJulaLNbyYWPXh7WExLJb1D3uKbiTBGWMuMVicsLgtJhkZVYyiAMBFRpVZT7ghCOtJBbPbrYb9m1SzGfLAfS8/s1280/1003112511.jpg",
  orthoOil2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeHa1fIiWt5JyFvECNBKwvxEGlJ9AKvvWY8hWxJ_Vir8lJFefDkbxNKpPkmMoGEZtSk4amHBsBoqIEK2H_WOHaP7w7TmzHN1pWVs3FBFyQhyphenhyphenMMbsZcbKwLZu9iX344JkEcU2uhQjA8IsbUIdIXkkQWJ_W6Fb0cegEH2X7cvBbUjXFqUm8oJngV-IXsvg5i/s1280/1003112512.jpg",
  orthoOilHow: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVOKmQgDUN9apu9pqahS7iBb5zW9F73Jlm-MAgsihwoZLnqXBeqkDUvPC9C7BLpz08ZAEPZBQT5H0JkeQVYLMiv__XzqMmtLhyys0bYQftAa0t4Wmiz1MAtL1_D6IJ7cp_kIzpUfOslGFe1xpq9c2mo78el9HMpz6bSZGfsiPX8DXytVdaKRe0o9iB1xZB/s1280/1003112513.jpg",
  orthoTabletBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg83ftx0JdGDgILdjXYoKeY0gBEnKOGN9ogs4EO9-f-_G9liFfUUTOCnll8IQYZQj4fSVx9usXrY2xQdm6LNBu8g5k1ZJ2KM1Vjszxi0O35j3bsVubvHYwE1FWZLwA3Mq9aCP7NmYeqk_Ba0bfA-TvhKzljZ61qTytwJMHPeLmMeHNBrjJiLD4ALHUK2GmC/s1280/1003112514.jpg",
  orthoTablet1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuLEqpOHYrrC8G0QF3NtEfvwZyp0mAATwocbHn6ABoEyZEKZ_xlP4evRuBaXAvYT5zZ1KglJKEa-BxFWXRdIdssZZk0irnbOOYzzpxj9SruibH8UGjBORpV06FkhGaP_BMNqfZcDdVh_fuQ9taW7nmr0hjwgY2r0sKwIHFfAjt2iYqqGiH6DnAoRFZ1YYA/s1280/1003112515.jpg",
  orthoTablet2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq0XehH_5a1xlyGXn6bPHMNklVmWpoDYSABCHoX_rVQNPZBVsNqGDAJ5ehA_b1OQUSXGK_ItJNJtG-mgfYKlKoflPsInSvKVWOtqq9LmdIeFy27sRuseDudEVsob96dNmEzEfebhH-tQwpY9lyL2oO0yZ3NaTPf0lWEk45XALZGKH8n6dAis11SEiJk-Kt/s1280/1003112516.jpg",
  orthoTabletHow: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJvJhzSEVD2uirMWipEAW72e7SAHiJ9PhHHrqgH9dQ5N07RvPNv5WjWHmYiRQZn6Xo096f_SY0ryvBa9BEyuvmnkoIrlmsnMP5wYXBaO_x-HW0d1ISPgun_GCQMoKfrGSEjUYtpJUPw6PfEH5dPjzfX3Gmr62A9Q75Pmox78NC2LYPFCt2YpwXBbQZGpUV/s1280/1003112517.jpg",
  boswelliaBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi86HX4pEQleE5-YWWKpLW_qb2zVQEKSpA_xaltg1EVjcZAr__JQAgdOM-ej4Z0GSY7XzGmiuJDSUkDm-N26SXmXXKvA9NqWG_qHJeCbF7ZoxrTuC8w3Td7rVEi1A0tm57RsjgYsQVOz0sOdefT3GuIL8ZmTZhrH8fb44WL3O6eO0hfqB6rT93VwRPnqXfv/s1280/1003112518.jpg",
  boswellia1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhapdN_kjAKAj-uyK43bq8af1QBMw3UZ_qNvoVrbu9n9k310xyAF-dDWYytRAM_hahElc5UZqaepuaHsJinL-hcusm45Xcmn4IRrTpXzbRWgBZOID5vt3i-xbE486yVdv-bbjwQzcEclZED6JPjNtWpxhBw1A0vNaf1z91qG1wnhLmzewj641yJA1uLYeRW/s320/1003120604.jpg",
  boswellia2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgas7ra1Ew9GzlgJFw6amkPb_zbbQDyXvZVV4shTstqSNs8OLwaNTssQRC5PuQLopbIAhzPaObuMweKmAJoJBSDT4anDOWJTt5_JTKdu6ggcOZuXtXMuDZil52ut549qxMeFzQKUHdC2oN3bWOlMJ3ruUL1zDQFHXkxk0e9P1vZt405a5TZSn4u0H-DABql/s1280/1003120605.jpg",
  boswellia3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSzNyB7ER-Kr8sImR-b-ZlANPK7sq9jFJCbT0IH7dJ0eO0bdBRBmKsYNEWEkH2nDEvyC143-EHaVXa1CMu7QX42PlXXEbRaRvoD0i-LzGgScSfwjfI5XSZzhnXaiHWkjwXt-7LTPYmHmSBj1BlmKobTxLImsF0Eb_BVdkjmdW9feW9VVZaj592sr4c89z_/s1280/1003120606.jpg",
  boswelliaHow: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis9YkY8RjTnDug7ezHyyyT_YZhUeS7erJvroogLU6bhOeqbNeejz5KFv72i4kzRLHjlTada5FTQ-uH4RmIIHsUEkmh0pjta56Jy9L7gKYH6f9sNMVX64-na4cOOPeVHaic-JWP36p66eOnoPSgY3wAtQayOnAkxHkKFleXVyjBhT4WKZn5yxAJ7Ep656V0/s1280/1003120607.jpg",
  kaishorBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH14we0AUw4E7AWppeIyQSyaM6DKnr3GhoqVZ0AJqKqCCDNWzTyyu_wHrNkSkQsLngQAwh9vNta_Cz-w3ZAmDWddd6coQ6wXY2AP1o6MCykByZLUpkHb5WFAbojbFum0vXg2inlvOPchGmOpSPFZO0zBxFwQICrHvaD6aF3svjpC3RtK3CIw7PopNZO6sj/s1280/1003120610.jpg",
  kaishor1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjofCc6AFoi7A4dyes3UP1F6YlrjHuwPfhFlq4NqaBjHc1wvw5mSHnU9KU-eccw2lHAP66OHK4XnoGArm8drfdwwZpBhsajqJCdEwYLizcN7XvsCkcEeikktqC5hljVR36kD_ezqaBAudcCQKB_q_fE6x-8h1_D8fRTUQJ0VFmjYK_hYXLO9836IoY42vga/s1280/1003120617.jpg",
  kaishor2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHyRLPc4pLel_NKWSVpZ2DXIWhDxvMSPNzqbyB0hkT7fWJVMFLaIHUQYDYyoFlr9ficKuq_BEgvr0yyMugXuK0BZz0Af-v8DmleE08cvAujiQIJwzIsI_Oth4tsPWGkfOyYOgdIwAzr3cXHM8HWGv_ajbFiocjtELrgWOn4b2p1yeMcoo0aNikgKiFrn_/s1280/1003120619.jpg",
  kaishorHow: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFRAsMmQ8a6CAZxj0F-BEejjmytXy9gJxntSUeGl_T2-D6BOgmsKvIXpE2E7YztKrfFbWASBEmN6VrPva0d2RlbrmrbkN8SNPOR_Rz-Ml2KPdey-Mzc2hWfr3mr_rWUwe0PKnueB7IqErba_VzLXBTy8mLjwjiLnH_pc3vAitsGtqOv_Ii4CNms1i6swbM/s1280/1003120618.jpg",
  d3Banner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeniB8nAjcUGXJfh-UjU2DdCnUe2DwQWFH2fmwlp5oovirwnci_DQxJOshn6Sdf1HxFnzPKcVx1B7-43jRYnrqCzvFPNBzXmXIt9aNI5dMrtzFEL1HCTn82NpdV9yUI4JFcPfbp-Z6MYarTLsaRSvh4A8ou3OoD0zDw4ZFzzAIID5MotmJgPGbTfd4Qk07/s1280/1003120623.jpg",
  d31: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSzdG27HVLsOta0w1HIpkCOlZpGDxYXA0OT8qTEX7nEp8rlUwHbiiYSpBITQZPiho-2KQdsvFpKLbT29vi8zKwENAWQ8LV1-LuRN9QSO5Yg1rylx8myATA72-9Tgr1jZKpzB2W0QJ_S8iThDPQL1zMzbaOy3c-u2KN7fP0LFdzPKLPJPvm1ixrh53LSMXq/s1280/1003120620.jpg",
  d32: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkYUp4-Giiqu9HjFi6nrbM2CgpQ8Ln2p-Bd_kW4j0rBA-HUS_IqoorLkEwHjPnWwZ7u2NEWFyYQ7PB6isPvkRxkEAb-bywnGpBnEIlvmUWf-yBeTJgoLlao2BNDsQYjKRX_FIGSpZnqxes5yXdo8a7RdVurCOG80AWLWw-ivrIOMCYDYNcCmP9G0d5SqVz/s1280/1003120626.jpg",
  d3How: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZj14u7yqwEgUWLLP7bpxUc5TcIvW43em16wLxAGwdtfPKX2W1mhG-6gLcb9OJfGaFEzB0ddWYalofWfx6Ks4sO-nYKMEWv8Uk3kKsOgJrmb-ghCLphou_K5g8AiF-OfS7yxo5lRXB4x09Lbx6fwIP_fZPbi9HV3b_iPu_Zh2-uckgb3fMqoc7nOfXHuGy/s1280/1003120625.jpg",
  calciumBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGcxeK_-AyskRY3EeMMBcnk49e9sWvEo6BfUiFKku_sYBsudxnxy1Pun_uCmjGriYdD0j29dcTNYNTc2UWhZiMLHaCAHP9XGGcrs3sBhJCluLvFPaQo2KQkyddN5uLP_SORGLTShaHHzXoJpUyIGdcExrAnxmDQw-eP44eNMAHkHkpZPTYCiSS72paTJVR/s1280/1003120642.jpg",
  calcium1: "https://blogger.googleusercontent.com/img/a/AVvXsEhGfNlyZ2GSiDDbYyAPqkUt6tREWNmrNcR318e_DlaDzCud-nfhYxn-cwTOguKD1KAT4HeXANv4sPqhisepfNsJpjnEcX-Y6H3Xf0G3EP3cZ1gROMJCXBU5bK4-qypH4nG_xJKkeTOZI_8ljSxsqQ4eeMr5Y2zWFHmAQksoANjB7DKO8jkowagh1QTLsBpF",
  calcium2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdbnoyOx6LLvMYhbebhZP87_FA175-ODTh1f7ammf4FzpfG1wyUOmfhRS_aFpRZspOEXvE2rKFNC5JoycschalaranZch0OMuOnbTRVjYqtb_qRv6FFJfwP_SDI-8VU7vUB18wpSo_o_8rS_YUBDn5xPB7PJzF-GzSjnas461cQqjDljGaLtEAaRh-1FWz/s1280/1003120641.jpg",
  calcium3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6-SHABQYPQF4YcqiIhEN5-w4fLWSdlP5rPLyrowlnsOKEcHGuDy_l88POuwJVWdZEETNol7WvMLS_K_JAl6C_ygTzTsgNwGxxRUzn3eowKlTiC5W52GdtLENohpcZ-FnoFep3ox0SRNfb_IeWgy28rM2tavBYgPgIIjtJCr76vgq7dDYAb0SyKRkldtDu/s1280/1003120633.jpg",
  calciumHow: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPdB4b-Tt3ctCxUChrZvUvyHcN-q8hJCKaLD5Y6KX3kUxom9DxGWeKW0BqSnmEeDzJbck27FkAXT5CydiKRngWrzA6A6RUsXLlFsp6R70Cz1Jla8XLhDzaIfZAy_s-7zQAKkKEbeJwldfiwGQiFKdgXAUgceY8rvwQm2GIb0MJZkanfl3jetPsbTVS2iJx/s1280/1003120634.jpg",
  footerGif: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9CP8RUm7dItkfESaZJVKx1Vr5xAn9Jkh-cZoOcoCNt9AqoHidqrIZVgjLwXeNxYLTkkkP6nUncdK4-Uj5oBAkb9ior1-lm6dF0Wd2g6gtWd2dWlogU67KVAIsrPlpJGYKFQYytaBT9R6aT-zL_0vF5QQETM6nMD5MApnRKjqQ8R63xamG7_92AHWiYtLz/s400/1003065750.gif",
};

const Img = ({ src, alt = "", className = "" }) => (
  <img src={src} alt={alt} className={`w-full rounded-xl object-cover ${className}`} />
);

export default function ArthritisPage() {
  return (
    <div className="bg-base-100 font-sans text-base-content">

      {/* ───── HERO ───── */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Arthritis</h1>
        <Img src={images.hero} alt="Arthritis" className="mb-6" />
        <p className="text-base leading-relaxed text-left">
          આર્થરાઇટિસ (Arthritis) એટલે સાંધાનો સોજો. આ કોઈ એક બીમારી નથી, પરંતુ સાંધાના દુખાવા અને તેના
          રોગોને દર્શાવતો એક સમૂહ છે. જ્યારે સાંધામાં રહેલી ગાદી ઘસાઈ જાય અથવા રોગપ્રતિકારક શક્તિમાં
          ફેરફાર થાય, ત્યારે આ સમસ્યા ઉદભવે છે.
        </p>
      </section>

      {/* ───── SYMPTOMS ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">આર્થરાઇટિસના મુખ્ય લક્ષણો</h2>
        <ul className="space-y-2 text-base list-none">
          <li>1 * સાંધાનો દુખાવો: હલનચલન કરતી વખતે અથવા આરામ કરતી વખતે પણ સાંધામાં સતત દુખાવો રહેવો.</li>
          <li>2 * જકડાઈ જવું (Stiffness): ખાસ કરીને સવારના સમયે સાંધા જકડાઈ જાય અને તેને હલાવવામાં મુશ્કેલી પડે.</li>
          <li>3 * સોજો: સાંધાની આસપાસ લાલાશ દેખાવી અને સોજો આવવો.</li>
          <li>4 * હલનચલનમાં મર્યાદા: સાંધા પૂરી રીતે વળી ન શકવા અથવા ચાલવા-ફરવામાં તકલીફ થવી.</li>
          <li>5 * અવાજ આવવો: સાંધા હલાવતી વખતે કટ-કટ જેવો અવાજ આવવો.</li>
        </ul>
        <p className="mt-3 font-semibold">તેના દ્વારા થતી તકલીફો</p>
        <ul className="space-y-2 text-base list-none mt-2">
          <li>6 * રોજિંદા કાર્યોમાં મુશ્કેલી: દાદર ચડવા, નીચે બેસવા કે વજન ઊંચકવામાં ખૂબ જ તકલીફ પડે છે.</li>
          <li>7 * શારીરિક દેખાવમાં ફેરફાર: લાંબા ગાળે આંગળીઓ કે ઘૂંટણનો આકાર બદલાઈ શકે છે (વળી જવા).</li>
          <li>8 * વધુ પડતો થાક: શરીરમાં સતત સોજો રહેવાને કારણે જલ્દી થાક લાગે છે.</li>
          <li>9 * ઊંઘમાં ખલેલ: રાત્રે સાંધાના દુખાવાને કારણે પૂરતી ઊંઘ આવતી નથી.</li>
          <li>10 * માનસિક તાણ: લાંબા સમયની પીડાને કારણે વ્યક્તિ માનસિક રીતે નબળી પડી શકે છે.</li>
        </ul>
        <p className="mt-4 text-base">
          શું તમારે આર્થરાઇટિસ (સાંધાના દુખાવા) માટે કોઈ અસરકારક આયુર્વેદિક જડીબુટ્ટીઓ કે તેલ વિશે જાણવું છે?
        </p>
      </section>

      {/* ───── STATS ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <Img src={images.stats} alt="Stats" className="mb-6" />
        <h2 className="text-2xl font-bold mb-2 text-center">
          સંધિવા (Arthritis): સાંધાના દુખાવાથી મુક્તિ મેળવો
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">
          આજે ભારતમાં સાંધાનો દુખાવો એક ગંભીર સમસ્યા બની ગઈ છે. અહીં તેના વિશેના કેટલાક ચોંકાવનારા આંકડાઓ છે:
        </h3>
        <ul className="space-y-2 text-base mt-2">
          <li>* ૧૫ કરોડથી વધુ દર્દીઓ: ભારતમાં આજે સંધિવાથી પીડાતા લોકોની સંખ્યા ૧૫ કરોડને વટાવી ગઈ છે.</li>
          <li>* દૈનિક ૪૫ લાખ મુલાકાત: દરરોજ આશરે ૪૫ લાખ લોકો સાંધાના દુખાવાની સારવાર માટે ડોક્ટર પાસે જાય છે.</li>
          <li>* દરેક ઘરમાં એક દર્દી: સ્થિતિ એવી છે કે લગભગ દરેક બીજા-ત્રીજા ઘરે સંધિવાનો એક દર્દી જોવા મળે છે.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">શા માટે આ આંકડા ચિંતાજનક છે?</h3>
        <p className="text-base leading-relaxed">
          સાંધાનો દુખાવો માત્ર ચાલવામાં તકલીફ નથી આપતો, પણ તે તમારી જીવનશૈલીને મર્યાદિત કરી દે છે.
          યોગ્ય સમયે સારવાર અને આયુર્વેદિક ઉપચાર દ્વારા આ સમસ્યાને નિયંત્રિત કરી શકાય છે.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">શું તમે પણ સાંધાના દુખાવાથી પરેશાન છો?</h3>
        <p className="text-base">
          અમારા નિષ્ણાતો સાથે વાત કરો અને કુદરતી રીતે સાજા થવા તરફ ડગલું માંડો.
        </p>
      </section>

      {/* ───── TYPES ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Types of Arthritis:-</h3>
        <Img src={images.types} alt="Types of Arthritis" className="mb-6" />
        <p className="text-base mb-4">
          ચોક્કસ, તમારી વેબસાઇટ માટે સંધિવાના પ્રકારો (Types of Arthritis) વિશેની ટૂંકી અને સચોટ ગુજરાતી
          માહિતી નીચે મુજબ છે:
        </p>
        <h2 className="text-2xl font-bold mb-4">સંધિવાના મુખ્ય પ્રકારો (Types of Arthritis)</h2>
        <p className="text-base mb-4 leading-relaxed">
          સંધિવા માત્ર એક બીમારી નથી, પરંતુ તેના વિવિધ પ્રકારો છે જે શરીરના અલગ-અલગ સાંધાઓને અસર કરે છે.
          મુખ્યત્વે આ ત્રણ પ્રકારો સૌથી વધુ જોવા મળે છે:
        </p>
        <p className="text-base mb-3 leading-relaxed">
          <strong>૧. ઓસ્ટિયોઆર્થરાઈટિસ (Osteoarthritis):-</strong><br />
          આ સંધિવાનો સૌથી સામાન્ય પ્રકાર છે. તે સામાન્ય રીતે વધતી ઉંમર સાથે સાંધા વચ્ચેના ગાદી જેવા ભાગ
          (Cartilage) ઘસાઈ જવાને કારણે થાય છે. આમાં ઘૂંટણ અને થાપાના સાંધામાં વધુ દુખાવો થાય છે.
        </p>
        <p className="text-base mb-3 leading-relaxed">
          <strong>૨. રુમેટોઇડ આર્થરાઈટિસ (Rheumatoid Arthritis):-</strong><br />
          આ એક 'ઓટો-ઈમ્યુન' રોગ છે, જેમાં શરીરની રોગપ્રતિકારક શક્તિ ભૂલથી પોતાના જ સાંધાઓ પર હુમલો કરે
          છે. આનાથી સાંધામાં સોજો, જકડાઈ જવી અને અસહ્ય દુખાવો થાય છે.
        </p>
        <p className="text-base mb-4 leading-relaxed">
          <strong>૩. ગાઉટ (Gout Arthritis):-</strong><br />
          જ્યારે શરીરમાં યુરિક એસિડનું પ્રમાણ વધી જાય છે, ત્યારે તે સાંધામાં સ્ફટિક (Crystals) સ્વરૂપે
          જમા થાય છે. સામાન્ય રીતે આની શરૂઆત પગના અંગૂઠાના સોજા અને દુખાવાથી થાય છે.
        </p>
        <p className="text-base font-semibold">
          તમારા સાંધાના દુખાવાને ઓળખો અને આજે જ યોગ્ય સારવાર શરૂ કરો.
        </p>
      </section>

      {/* ───── OSTEOARTHRITIS ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">ઓસ્ટિયોઆર્થરાઈટિસ (Osteoarthritis): સાંધાના ઘસારાની સમસ્યા</h2>
        <Img src={images.osteo} alt="Osteoarthritis" className="mb-6" />
        <ul className="space-y-3 text-base leading-relaxed">
          <li>* <strong>સાંધાની રચના:</strong> આપણા શરીરમાં બે હાડકાં જ્યાં જોડાય છે, ત્યાં વચ્ચે 'કાર્ટિલેજ' (Cartilage) નામનું એક નરમ અને ચીકણું પડ હોય છે. તે સાંધાને લુબ્રિકેશન પૂરું પાડે છે અને હાડકાંને એકબીજા સાથે ઘસાતા અટકાવે છે.</li>
          <li>* <strong>સમસ્યા ક્યારે સર્જાય છે?:</strong> જ્યારે આ કાર્ટિલેજ ઘસાઈ જાય અથવા સાંધામાં રહેલું ચીકણું પ્રવાહી (Liquid) ઓછું થઈ જાય, ત્યારે હાડકાં સીધા એકબીજા સાથે ઘસાવા લાગે છે.</li>
          <li>* <strong>લક્ષણો:</strong> આ પ્રક્રિયાને કારણે સાંધામાં અસહ્ય દુખાવો, સોજો અને જકડાઈ જવાની સમસ્યા થાય છે. આ સ્થિતિને જ 'ઓસ્ટિયોઆર્થરાઈટિસ' કહેવામાં આવે છે.</li>
          <li>* <strong>વય મર્યાદા:</strong> આ રોગ મુખ્યત્વે વધતી ઉંમર સાથે સંકળાયેલો છે. સામાન્ય રીતે ૪૫ વર્ષની ઉંમર પછી આ સમસ્યા વધુ જોવા મળે છે, તેથી તેને 'ઘડપણની બીમારી' પણ કહેવામાં આવે છે.</li>
        </ul>
        <p className="mt-4 font-semibold">મુખ્ય નિશાનીઓ:</p>
        <ul className="space-y-1 text-base mt-2">
          <li>* ચાલતી વખતે ઘૂંટણમાંથી અવાજ આવવો.</li>
          <li>* સવારે ઉઠતી વખતે સાંધા જકડાઈ જવા.</li>
          <li>* સીડી ચડવા-ઉતરવામાં તકલીફ થવી.</li>
        </ul>
        <p className="mt-4 text-base font-semibold">શું તમે પણ સાંધાના ઘસારાથી ચિંતિત છો?</p>
        <p className="text-base">
          અમારા આયુર્વેદિક ઉપચાર દ્વારા કાર્ટિલેજને પોષણ આપો અને સાંધાની ગતિશીલતા પાછી મેળવો.
        </p>
      </section>

      {/* ───── RHEUMATOID ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <p className="text-base font-bold mb-2">
          રુમેટોઇડ આર્થરાઈટિસ (Rheumatoid Arthritis): જ્યારે શરીર જ બને દુશ્મન
        </p>
        <Img src={images.ra} alt="Rheumatoid Arthritis" className="mb-6" />
        <h2 className="text-2xl font-bold mb-4">
          રુમેટોઇડ આર્થરાઈટિસ (RA) એ સામાન્ય સંધિવા કરતા થોડો અલગ અને ગંભીર રોગ છે. તેને આ રીતે સમજી
          શકાય:
        </h2>
        <ul className="space-y-3 text-base leading-relaxed">
          <li>* <strong>રોગપ્રતિકારક શક્તિ (Immune System):</strong> આપણા શરીરમાં સફેદ રક્તકણો (White Cells) હોય છે, જે બહારથી આવતા વાયરસ કે બીમારીઓ સામે લડીને આપણું રક્ષણ કરે છે.</li>
          <li>* <strong>ભૂલ ભરેલો હુમલો:</strong> જ્યારે આ સફેદ રક્તકણો ભૂલથી બહારના દુશ્મનોને બદલે આપણા પોતાના જ સાંધાઓ (Joints) ના પડ પર હુમલો કરવાનું અને તેને નુકસાન પહોંચાડવાનું શરૂ કરી દે છે, ત્યારે તેને રુમેટોઇડ આર્થરાઈટિસ કહેવામાં આવે છે.</li>
          <li>* <strong>અસહ્ય વેદના:</strong> આ સ્થિતિમાં સાંધામાં સતત સોજો રહે છે અને ત્યાં અસહ્ય દુખાવો (Ashaya Pain) થાય છે. જો સમયસર સારવાર ન મળે, તો તે સાંધાના આકારને પણ બદલી શકે છે.</li>
        </ul>
        <p className="mt-4 font-semibold">મુખ્ય લક્ષણો:</p>
        <ul className="space-y-1 text-base mt-2">
          <li>* સવારે ઉઠતાની સાથે જ સાંધા ખૂબ જ જકડાઈ જવા.</li>
          <li>* એકસાથે બંને હાથ કે બંને પગના સાંધામાં દુખાવો થવો.</li>
          <li>* તાવ જેવો અનુભવ થવો અને સતત થાક લાગવો.</li>
        </ul>
        <p className="mt-4 font-semibold">શું તમે રુમેટોઇડ આર્થરાઈટિસથી પીડાઓ છો?</p>
        <p className="text-base">
          અમારો આયુર્વેદિક અભિગમ તમારી રોગપ્રતિકારક શક્તિને સંતુલિત કરવામાં અને સાંધાના સોજાને
          કુદરતી રીતે ઘટાડવામાં મદદ કરી શકે છે.
        </p>
      </section>

      {/* ───── GOUT ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">ગાઉટ (Gout Arthritis):</h2>
        <Img src={images.gout} alt="Gout" className="mb-4" />
        <p className="text-base font-semibold mb-2">યુરિક એસિડનો દુખાવો</p>
        <p className="text-base mb-4 leading-relaxed">
          ગાઉટ એ સાંધાનો એક વિશિષ્ટ પ્રકારનો દુખાવો છે, જે શરીરમાં થતા રાસાયણિક ફેરફારોને કારણે ઉદભવે
          છે. તેને આ રીતે સમજી શકાય:
        </p>
        <ul className="space-y-3 text-base leading-relaxed">
          <li>* <strong>યુરિક એસિડનો ભરાવો:</strong> જ્યારે લોહીમાં યુરિક એસિડનું પ્રમાણ વધી જાય છે, ત્યારે તે સાંધાના પોલાણમાં સોય જેવા નાના સ્ફટિકો (Crystals) સ્વરૂપે જમા થવા લાગે છે. આ જમા થયેલ યુરિક એસિડને કારણે સાંધામાં અસહ્ય દુખાવો અને સોજો આવે છે, જેને 'ગાઉટ' કહેવામાં આવે છે.</li>
          <li>* <strong>ખોરાકની અસર:</strong> જે લોકો આહારમાં સી-ફૂડ (Sea Food), વધુ પડતું પ્રોટીન અથવા લાલ માસનો ઉપયોગ વધારે કરે છે, તેમનામાં આ સમસ્યા થવાની શક્યતા વધી જાય છે.</li>
          <li>* <strong>શરૂઆતના લક્ષણો:</strong> સામાન્ય રીતે ગાઉટની શરૂઆત પગના અંગૂઠાના સાંધાથી થાય છે. સાંધો એકાએક લાલ થઈ જાય છે, ગરમ લાગે છે અને તેને સ્પર્શતા પણ ખૂબ જ પીડા થાય છે.</li>
        </ul>
        <p className="mt-4 font-semibold">મુખ્ય કારણો:</p>
        <ul className="space-y-1 text-base mt-2">
          <li>* શરીરમાં પ્યુરિન (Purine) નામના તત્વનું પાચન બરાબર ન થવું.</li>
          <li>* પાણી ઓછું પીવું અથવા કિડની દ્વારા યુરિક એસિડ બરાબર સાફ ન થવું.</li>
          <li>* આલ્કોહોલ અથવા વધુ ખાંડવાળા પીણાંનું સેવન.</li>
        </ul>
      </section>

      {/* ───── CAUSES ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <p className="text-base font-bold mb-4">
          સાંધાના દુખાવા (Arthritis) થી પરેશાન છો? જાણો તેના મુખ્ય કારણો અને લક્ષણો
        </p>
        <Img src={images.causes} alt="Causes" className="mb-6" />
        <h2 className="text-2xl font-bold mb-4">સાંધાના દુખાવા થવાના મુખ્ય કારણો:</h2>
        <ul className="space-y-2 text-base leading-relaxed">
          <li>* <strong>ખોટી ખાણી-પીણી:</strong> વધુ પડતું ખાવાની આદત શરીરમાં ઝેરી તત્વો (આમ) પેદા કરે છે, જે ગેસ બનીને સાંધાઓમાં જમા થાય છે અને સોજો લાવે છે.</li>
          <li>* <strong>વધતું વજન:</strong> શરીરનું વધારાનું વજન સીધું તમારા ઘૂંટણ પર દબાણ લાવે છે, જેના કારણે સાંધા ઝડપથી ઘસાય છે અને દુખાવો વધે છે.</li>
        </ul>
        <p className="mt-4 font-semibold">
          આ લક્ષણોને નજરઅંદાજ ન કરો: જો તમને સાંધામાં નીચે મુજબની સમસ્યા જણાય, તો તે સંધિવા હોઈ શકે છે:
        </p>
        <ul className="mt-2 space-y-1 text-base">
          <li>* અસહ્ય દુખાવો</li>
          <li>* સાંધામાં લાલાશ આવવી</li>
          <li>* સાંધા ગરમ લાગવા</li>
          <li>* સાંધામાં સોજો આવવો</li>
        </ul>
        <p className="mt-3 text-base font-semibold">&gt; સ્વસ્થ જીવન માટે આજે જ તમારી જીવનશૈલી બદલો!</p>
        <p className="text-base">શું તમે સાંધાના દુખાવાનો કાયમી ઉકેલ ઈચ્છો છો?</p>
      </section>

      {/* ───── 5-STEP SOLUTION ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <p className="text-base font-bold mb-4">
          સાંધાના દુખાવા અને ગઠિયા (Arthritis) થી મુક્તિ મેળવો: સંપૂર્ણ સમાધાન!
        </p>
        <Img src={images.solution} alt="Solution" className="mb-6" />
        <p className="text-base mb-4 leading-relaxed">
          સાંધાના દુખાવાને માત્ર દબાવો નહીં, તેને જડમૂળથી દૂર કરો. અમારું વિશેષ સોલ્યુશન આ 5 રીતે કામ
          કરીને તમને આપે છે કાયમી રાહત:
        </p>
        <p className="font-semibold mb-2">અમારું 5-સ્ટેપ સોલ્યુશન:</p>
        <ul className="space-y-2 text-base">
          <li>* <strong>ગેસ (વાયુ) પર નિયંત્રણ:</strong> શરીરમાંથી વધારાનો વાયુ દૂર કરી સાંધાના દબાણમાં ઘટાડો કરે છે.</li>
          <li>* <strong>હાડકાની મજબૂતી (Bone Strength):</strong> હાડકાંને અંદરથી પોષણ આપીને વધુ મજબૂત બનાવે છે.</li>
          <li>* <strong>દુખાવામાં રાહત (Pain Control):</strong> કુદરતી રીતે સોજો ઉતારીને અસહ્ય દુખાવામાંથી મુક્તિ અપાવે છે.</li>
          <li>* <strong>સોજા પર નિયંત્રણ (Swelling Control):</strong> સાંધામાં થતી લાલાશ અને સોજો ઘટાડી હલનચલન સરળ બનાવે છે.</li>
          <li>* <strong>કાર્ટિલેજ સપોર્ટ (Cartilage Support):</strong> સાંધા વચ્ચેની ગાદી (Cartilage) ને ઘસાતી અટકાવે છે અને રક્ષણ આપે છે.</li>
        </ul>
        <p className="mt-4 font-semibold">કેમ અમારું સોલ્યુશન શ્રેષ્ઠ છે?</p>
        <p className="text-base leading-relaxed mt-1">
          &gt; સાંધાના રોગોમાં માત્ર પેઈનકિલર લેવી પૂરતી નથી, પરંતુ હાડકાં અને કાર્ટિલેજને ફરી જીવંત
          કરવા જરૂરી છે. અમે તમને આપીએ છીએ કુદરતી અને લાંબા ગાળાની રાહત!
        </p>
        <p className="mt-3 font-semibold">આજે જ સાંધાના દુખાવામાંથી આઝાદી મેળવો!</p>
        <p className="text-base">
          તમારી સમસ્યાનું નિરાકરણ લાવવા માટે અમને અહીં મેસેજ કરો
        </p>
      </section>

      {/* ───── ARTHRITIS SOLUTION PRODUCTS HEADER ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">આર્થરાઈટિસ સોલ્યુશન:</h2>
        <p className="text-base mb-2 font-semibold">સાંધાના દુખાવાની આયુર્વેદિક સારવાર</p>
        <p className="text-base mb-4 leading-relaxed">
          હવે સાંધાના દુખાવા અને સોજાને કહો અલવિદા! આયુર્વેદના આંગણે લાવ્યું છે કુદરતી
          જડીબુટ્ટીઓથી ભરપૂર સંપૂર્ણ હેલ્થ કીટ, જે તમારા હાડકાંને આપે છે નવું જીવન.
        </p>
        <p className="font-semibold mb-2">અમારી શ્રેષ્ઠ પ્રોડક્ટ્સ જે તમને આપશે કાયમી રાહત:</p>
        <ul className="space-y-1 text-base">
          <li>* Ortho Oil &amp; Tablets: દુખાવા પર ઝડપી અસર અને સાંધાની લવચીકતા વધારે છે.</li>
          <li>* Boswellia Capsules: કુદરતી રીતે સોજો અને બળતરા ઘટાડે છે.</li>
          <li>* Kaishor Guggulu: લોહીનું શુદ્ધિકરણ કરી સાંધાના ઝેરી તત્વો (યુરિક એસિડ) ઘટાડે છે.</li>
          <li>* D3 Oral Spray: હાડકાંના બંધારણ માટે જરૂરી વિટામીન-D3 ની પૂર્તિ કરે છે.</li>
          <li>* Calcium Chewable Tablets: હાડકાંને અંદરથી મજબૂત અને સ્વસ્થ બનાવે છે.</li>
        </ul>
        <p className="mt-4 font-semibold">ટીમેક્સ શા માટે પસંદ કરવું?</p>
        <ul className="space-y-1 text-base mt-2">
          <li>🌱 ૧૦૦% આયુર્વેદિક અને સુરક્ષિત</li>
          <li>✅ કોઈ આડઅસર (Side Effects) નહીં</li>
          <li>🦴 હાડકાં અને કાર્ટિલેજનું સંપૂર્ણ રક્ષણ</li>
          <li>🏃 ફરીથી સક્રિય જીવન જીવવાની શક્તિ</li>
        </ul>
        <p className="mt-4 font-semibold">
          હવે જડબાતોડ દુખાવાથી ડરવાની જરૂર નથી, આજે જ તમારી કીટ બુક કરો!
        </p>
        <p className="text-base mt-2">&gt; વધુ માહિતી અને ઓર્ડર માટે:</p>
        <div className="flex justify-center mt-4">
          <img src={images.kitQr} alt="QR Code" className="w-64 h-64 object-contain rounded-xl" />
        </div>
      </section>

      {/* ───── ORTHO OIL ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ortho oil :-</h2>
        <Img src={images.orthoOilBanner} alt="Ortho Oil Banner" className="mb-4" />
        <p className="text-base font-semibold mb-4">
          Teamex Ortho Oil: વર્ષો જૂના સાંધા અને સ્નાયુના દુખાવામાંથી મેળવો કાયમી છુટકારો!
        </p>
        <Img src={images.orthoOil1} alt="Ortho Oil 1" className="mb-4" />
        <p className="text-base mb-4 leading-relaxed">
          શું તમે ઘૂંટણ, કમર કે સ્નાયુઓના દુખાવાથી પરેશાન છો? Teamex Ortho Oil એ ૯૦થી વધુ
          આયુર્વેદિક જડીબુટ્ટીઓ અને ૭ કુદરતી તેલનું અનોખું મિશ્રણ છે, જે દુખાવાને જડમૂળથી દૂર
          કરવામાં મદદ કરે છે.
        </p>
        <Img src={images.orthoOil2} alt="Ortho Oil 2" className="mb-4" />
        <p className="font-semibold mb-2">શા માટે Teamex Ortho Oil શ્રેષ્ઠ છે?</p>
        <ul className="space-y-2 text-base">
          <li>* <strong>શક્તિશાળી સામગ્રી:</strong> તેમાં મહાનારાયણ તેલ, મહાવિષગર્ભ તેલ અને નિર્ગુડી તેલ જેવા શક્તિશાળી તત્વો છે જે હાડકાંને જોડવામાં અને સ્નાયુઓની જકડન દૂર કરવામાં મદદ કરે છે.</li>
          <li>* <strong>ઝડપી અસર:</strong> આ તેલ શરીરમાં સરળતાથી શોષાઈ જાય છે અને મિનીટોમાં જ રાહત આપે છે.</li>
          <li>* <strong>સંપૂર્ણ આયુર્વેદિક:</strong> બજારમાં મળતા મેન્થોલયુક્ત તેલથી અલગ, આ ૧૦૦% કુદરતી અને સુરક્ષિત છે.</li>
          <li>* <strong>દરેક દુખાવા માટે:</strong> ભલે તે વર્ષો જૂનો સાંધાનો દુખાવો હોય કે જીમ-સ્પોર્ટ્સની ઈજા, આ તેલ રામબાણ ઈલાજ છે.</li>
        </ul>
        <Img src={images.orthoOilHow} alt="Ortho Oil How" className="my-4" />
        <p className="font-semibold mb-2">ઉપયોગ કરવાની રીત (How to Use):</p>
        <p className="text-base">૧. દિવસમાં બે વાર દુખાવા વાળા ભાગ પર તેલ લગાવો.</p>
        <p className="text-base">૨. ૫ થી ૧૦ મિનિટ સુધી હળવા હાથે ગોળાકાર (Circulate) માલિશ કરો.</p>
        <p className="mt-2 font-semibold">&gt; દુખાવાને સહન ન કરો, તેને દૂર કરો!</p>
        <p className="text-base">&gt; આજે જ ઓર્ડર કરો અને ફરીથી સક્રિય જીવન જીવવાની શરૂઆત કરો.</p>
      </section>

      {/* ───── ORTHO TABLET ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ortho tablet :-</h2>
        <Img src={images.orthoTabletBanner} alt="Ortho Tablet Banner" className="mb-4" />
        <p className="text-base font-semibold mb-4">
          Teamex Ortho Tablet: ૨૨ શક્તિશાળી જડીબુટ્ટીઓ સાથે સાંધાના દુખાવાનો કાયમી ઉકેલ!
        </p>
        <p className="text-base mb-4 leading-relaxed">
          સાંધાનો દુખાવો હોય કે ગઠિયાની સમસ્યા, હવે કુદરતી રીતે મેળવો રાહત. Teamex Ortho Tablet
          એ ૨૨ પ્રકારની દુર્લભ આયુર્વેદિક જડીબુટ્ટીઓનું અદભૂત મિશ્રણ છે, જે તમારા હાડકાં અને
          સાંધાઓને અંદરથી પોષણ આપે છે.
        </p>
        <Img src={images.orthoTablet1} alt="Ortho Tablet 1" className="mb-4" />
        <ul className="space-y-2 text-base">
          <li><strong>કાર્ટિલેજ સપોર્ટ:</strong> ગળો, સલકી ગૂગળ અને હાડસાંકળ જેવી જડીબુટ્ટીઓ સાંધા વચ્ચેની ગાદીને ઘસાતી અટકાવે છે.</li>
          <li>* <strong>દુખાવા અને સોજા પર નિયંત્રણ:</strong> હળદર, દેવદાર અને આમળા દુખાવો ઘટાડીને હલનચલન સરળ બનાવે છે.</li>
          <li>* <strong>પાચનમાં મદદરૂપ:</strong> આ ટેબ્લેટ પાચનશક્તિ સુધારે છે જેથી સાંધામાં વાયુ (ગેસ) જમા થતો નથી.</li>
          <li>* <strong>હાડકાંની મજબૂતી:</strong> હરડે અને મરી હાડકાંને લોખંડ જેવા મજબૂત બનાવવામાં મદદ કરે છે.</li>
        </ul>
        <Img src={images.orthoTablet2} alt="Ortho Tablet 2" className="my-4" />
        <p className="font-semibold mb-2">શા માટે આ ટેબ્લેટ છે ખાસ?</p>
        <p className="text-base">* સંપૂર્ણ સુરક્ષા: ૧૦૦% ઓર્ગેનિક, GMP સર્ટિફાઈડ અને FDA દ્વારા માન્ય.</p>
        <Img src={images.orthoTabletHow} alt="Ortho Tablet How" className="my-4" />
        <p className="font-semibold mb-2">સેવન કરવાની સાચી રીત (How to Use):</p>
        <p className="text-base mb-1">શ્રેષ્ઠ પરિણામ મેળવવા માટે હૂંફાળા પાણી સાથે આ મુજબ લો:</p>
        <ul className="text-base space-y-1">
          <li>* પહેલું અઠવાડિયું: ૨ ટેબ્લેટ, દિવસમાં ૩ વાર.</li>
          <li>* બીજા અઠવાડિયાથી: ૨ ટેબ્લેટ, દિવસમાં ૨ વાર.</li>
          <li>* (નોંધ: જો ગેસની સમસ્યા હોય તો જમ્યા પહેલા લેવી)</li>
        </ul>
        <p className="mt-3 font-semibold">
          &gt; હવે દુખાવો નહીં, માત્ર આઝાદી! તમારા સાંધાઓને આપો આયુર્વેદનું સુરક્ષા કવચ.
        </p>
      </section>

      {/* ───── BOSWELLIA ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <p className="text-base font-semibold mb-4">Boswellia capsules :-</p>
        <Img src={images.boswelliaBanner} alt="Boswellia Banner" className="mb-4" />
        <p className="text-base font-semibold mb-2 text-center">
          Teamex Boswellia: સાંધાના દુખાવા અને સોજા માટે કુદરતી વરદાન!
        </p>
        <Img src={images.boswellia1} alt="Boswellia 1" className="mb-4" />
        <p className="text-base mb-4 leading-relaxed text-center">
          સદીઓથી એશિયા અને આફ્રિકામાં વપરાતી ચમત્કારિક જડીબુટ્ટી હવે કેપ્સ્યુલ સ્વરૂપે. Teamex
          Boswellia એ માત્ર સાંધાના દુખાવા માટે જ નહીં, પણ સમગ્ર શરીરના સ્વાસ્થ્ય માટે એક
          શક્તિશાળી આયુર્વેદિક સોલ્યુશન છે.
        </p>
        <Img src={images.boswellia2} alt="Boswellia 2" className="mb-4" />
        <p className="font-semibold mb-2 text-center">આ અદભૂત કેપ્સ્યુલના ફાયદા:</p>
        <ul className="space-y-2 text-base text-center">
          <li>* <strong>સાંધાનું સ્વાસ્થ્ય:</strong> ઓસ્ટિયો અને રુમેટોઈડ આર્થરાઈટિસમાં અત્યંત ફાયદાકારક.</li>
          <li>* <strong>આમ દોષનું પાચન:</strong> શરીરમાંથી 'આમ રસ' (ઝેરી તત્વો) નું પાચન કરી રોગને જડમૂળથી દૂર કરવામાં મદદ કરે છે.</li>
          <li>* <strong>અન્ય સ્વાસ્થ્ય લાભો:</strong> અસ્થમા, ડાયાબિટીસ, કોલેસ્ટ્રોલ અને માનસિક તણાવ ઘટાડવામાં મદદરૂપ.</li>
          <li>* <strong>સ્ત્રી રોગોમાં ઉપયોગી:</strong> પેશાબ અને માસિક ધર્મના પ્રવાહને નિયમિત કરવામાં સહાય કરે છે.</li>
        </ul>
        <Img src={images.boswellia3} alt="Boswellia 3" className="my-4" />
        <p className="font-semibold mb-2 text-center">શા માટે Teamex Boswellia શ્રેષ્ઠ છે?</p>
        <p className="text-base mb-2 text-center">
          બજારમાં મળતી સામાન્ય પ્રોડક્ટ્સ કરતા અલગ, અમારી કેપ્સ્યુલ્સમાં છે:
        </p>
        <ul className="space-y-1 text-base text-center">
          <li>* ૩૦% AKBA અને ૭૫% Boswellic Acid: આ એક એવું દુર્લભ કોન્સન્ટ્રેટ કોમ્બિનેશન છે જે સોજા અને દુખાવા પર સીધી અસર કરે છે.</li>
          <li>* ૧૦૦% શાકાહારી (Vegetarian): શુદ્ધ શાકાહારી કેપ્સ્યુલ્સ જે દરેક માટે સુરક્ષિત છે.</li>
        </ul>
        <Img src={images.boswelliaHow} alt="Boswellia How" className="my-4" />
        <p className="font-semibold mb-1">સેવન કરવાની રીત (How to Use):</p>
        <p className="text-base">* રોજની માત્ર ૧ કેપ્સ્યુલ, જમ્યા પહેલા લો.</p>
        <p className="mt-2 font-semibold">
          &gt; તમારા શરીરને આપો કુદરતી પોષણ અને જીવો તણાવમુક્ત જીવન!
        </p>
      </section>

      {/* ───── KAISHOR GUGGULU ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Kaishor gugglu:-</h2>
        <Img src={images.kaishorBanner} alt="Kaishor Guggulu Banner" className="mb-4" />
        <p className="text-base font-semibold mb-2">
          Kaishor Guggulu: સાંધાના દુખાવા અને ત્વચાના રોગો માટે રામબાણ ઈલાજ!
        </p>
        <p className="text-base mb-4 leading-relaxed">
          શરીરમાં પિત્તનું સંતુલન જાળવવા અને લોહીને શુદ્ધ કરવા માટે Kaishor Guggulu એ શ્રેષ્ઠ
          આયુર્વેદિક ઉપાય છે. તે માત્ર સાંધાના દુખાવામાં રાહત નથી આપતું, પણ શરીરને અંદરથી ડિટોક્સ
          (Detox) પણ કરે છે.
        </p>
        <p className="text-base mb-4">
          વધુ જાણકારી અને ઓર્ડર માટે સંપર્ક કરો: [તમારો ફોન નંબર]
        </p>
        <Img src={images.kaishor1} alt="Kaishor 1" className="mb-4" />
        <p className="font-semibold mb-2">શા માટે Kaishor Guggulu પસંદ કરવું?</p>
        <ul className="space-y-2 text-base">
          <li>* <strong>પિત્ત દોષનું સંતુલન:</strong> શરીરમાં વધેલા પિત્તને નિયંત્રિત કરી બળતરા અને સોજો ઘટાડે છે.</li>
          <li>* <strong>ડિટોક્સિફિકેશન:</strong> લોહીમાં રહેલા ઝેરી તત્વોને દૂર કરી શરીરને શુદ્ધ કરે છે.</li>
          <li>* <strong>સાંધાના દુખાવામાં રાહત:</strong> સંધિવા (Gout) અને યુરિક એસિડની સમસ્યામાં અત્યંત ગુણકારી છે.</li>
          <li>* <strong>ચમકતી ત્વચા:</strong> એન્ટી-ઓક્સિડન્ટ ગુણોને કારણે ખીલ અને ત્વચાના અન્ય રોગો મટાડી કુદરતી ગ્લો આપે છે.</li>
          <li>* <strong>મેટાબોલિઝમ:</strong> પાચનશક્તિ સુધારે છે અને ચયાપચયની ક્રિયાને વેગ આપે છે.</li>
        </ul>
        <Img src={images.kaishor2} alt="Kaishor 2" className="my-4" />
        <p className="font-semibold mb-2">મુખ્ય ફાયદા એક નજરમાં:</p>
        <ul className="space-y-1 text-base">
          <li>✅ પાચનતંત્ર મજબૂત બનાવે</li>
          <li>✅ એન્ટી-ઓક્સિડન્ટ ગુણોથી ભરપૂર</li>
          <li>✅ સાંધાની જકડન દૂર કરે</li>
          <li>✅ યુવાન અને સ્વસ્થ ત્વચા આપે</li>
        </ul>
        <p className="mt-3 font-semibold">
          &gt; કુદરતી રીતે સ્વસ્થ બનો અને આયુર્વેદની શક્તિનો અનુભવ કરો!
        </p>
        <Img src={images.kaishorHow} alt="Kaishor How" className="my-4" />
        <p className="font-semibold mb-2">સેવન કરવાની રીત (How to Use):</p>
        <ul className="space-y-1 text-base">
          <li>* દિવસમાં ૨ વાર ૨-૨ ટેબ્લેટ પાણી સાથે લો.</li>
          <li>* (જમ્યા પછી )</li>
        </ul>
      </section>

      {/* ───── VITAMIN D3 SPRAY ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Vitamin D3 Spary :-</h2>
        <Img src={images.d3Banner} alt="D3 Spray Banner" className="mb-4" />
        <p className="text-base font-semibold mb-2">
          Teamex D3 Oral Spray: વિટામિન-D ની ઉણપનો આધુનિક અને સરળ ઉપાય!
        </p>
        <p className="text-base mb-4 leading-relaxed">
          શું તમે જાણો છો? માત્ર કેલ્શિયમ લેવું પૂરતું નથી, તેને શરીરમાં શોષવા માટે વિટામિન-D3
          અનિવાર્ય છે. Teamex D3 Daily Oral Spray તમને ગોળીઓ ગળવાની ઝંઝટમાંથી મુક્તિ આપે છે
          અને સીધું જ લોહીમાં ભળીને તાત્કાલિક અસર કરે છે.
        </p>
        <Img src={images.d31} alt="D3 1" className="mb-4" />
        <p className="font-semibold mb-2">આ સ્પ્રે કેમ વાપરવો જોઈએ?</p>
        <ul className="space-y-2 text-base">
          <li>* <strong>નેનો ટેકનોલોજી:</strong> સ્પ્રે કરવાથી તે સીધું મોંની નસો દ્વારા શોષાય છે, જે કેપ્સ્યુલ કરતા અનેકગણી ઝડપી અસર આપે છે.</li>
          <li>* <strong>હાડકાંની મજબૂતી:</strong> કેલ્શિયમના શોષણમાં મદદ કરી હાડકાં અને દાંતને મજબૂત બનાવે છે.</li>
          <li>* <strong>રોગપ્રતિકારક શક્તિ (Immunity):</strong> તમારી ઇમ્યુનિટી વધારે છે અને વારંવાર બીમાર પડતા અટકાવે છે.</li>
          <li>* <strong>મૂડ અને એનર્જી:</strong> તે માનસિક તણાવ ઘટાડવામાં અને આખો દિવસ સ્ફૂર્તિ જાળવી રાખવામાં મદદરૂપ છે.</li>
        </ul>
        <Img src={images.d32} alt="D3 2" className="my-4" />
        <p className="font-semibold mb-2">મુખ્ય ફાયદા:</p>
        <ul className="space-y-1 text-base">
          <li>✅ હાડકાં અને સ્નાયુઓને શક્તિ આપે</li>
          <li>✅ હૃદય અને રોગપ્રતિકારક તંત્રનું રક્ષણ કરે</li>
          <li>✅ ગમે ત્યારે, ગમે ત્યાં વાપરવામાં સરળ</li>
          <li>✅ કુદરતી રીતે શુદ્ધ અને અસરકારક</li>
        </ul>
        <Img src={images.d3How} alt="D3 How" className="my-4" />
        <p className="font-semibold mb-1">ઉપયોગ કરવાની રીત (How to Use):</p>
        <p className="text-base">
          * રોજ સવાર થી સાંજ સુધી જીભ નીચે અથવા ગાલની અંદરની બાજુએ 4 સ્પ્રે કરો.
        </p>
        <p className="mt-2 font-semibold">
          &gt; હવે વિટામિન-D મેળવવું બન્યું સાવ સરળ! આજે જ અપનાવો D3 Spray.
        </p>
      </section>

      {/* ───── CALCIUM ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Calcium tablet :-</h2>
        <Img src={images.calciumBanner} alt="Calcium Banner" className="mb-4" />
        <p className="text-base font-semibold mb-2 text-center">
          Calcium: મજબૂત હાડકાં અને દાંત માટે કુદરતી સુરક્ષા કવચ!
        </p>
        <p className="text-base mb-4 leading-relaxed text-center">
          વધતી ઉંમર અને બદલાતી જીવનશૈલીમાં હાડકાંને મજબૂત રાખવા ખૂબ જરૂરી છે.
        </p>
        <Img src={images.calcium1} alt="Calcium 1" className="mb-4" />
        <p className="text-base mb-4 text-center leading-relaxed">
          Calcium Chewable Tablets એ શરીરની કેલ્શિયમની જરૂરિયાતને પૂરી કરી તમને આપે છે
          અંદરથી મજબૂતી અને નવી ઊર્જા.
        </p>
        <Img src={images.calcium2} alt="Calcium 2" className="mb-4" />
        <p className="font-semibold mb-2 text-center">આ કેલ્શિયમ ટેબ્લેટ કેમ છે ખાસ?</p>
        <ul className="space-y-2 text-base text-center">
          <li>* <strong>ચાવવા યોગ્ય (Chewable):</strong> ગળવાની ઝંઝટ વગર, ગમે ત્યારે અને ગમે ત્યાં લઈ શકાય છે.</li>
          <li>* <strong>ઝડપી શોષણ:</strong> શરીર આ કેલ્શિયમને ઝડપથી શોષી લે છે, જે હાડકાં પર ત્વરિત અસર કરે છે.</li>
          <li>* <strong>હાડકાંની મજબૂતી:</strong> હાડકાંની ઘનતા (Density) વધારી તેને પોલા થતા અટકાવે છે.</li>
          <li>* <strong>દાંતનું સ્વાસ્થ્ય:</strong> દાંતને મૂળમાંથી મજબૂત બનાવે છે અને સડો અટકાવે છે.</li>
        </ul>
        <Img src={images.calcium3} alt="Calcium 3" className="my-4" />
        <p className="font-semibold mb-2 text-center">મુખ્ય ફાયદા:</p>
        <ul className="space-y-1 text-base text-center">
          <li>💪 સાંધાના દુખાવા અને થાકને દૂર કરે છે.</li>
          <li>🦷 દાંત અને પેઢાને મજબૂત બનાવે છે.</li>
          <li>🦴 હાડકાંના બંધારણને લોખંડ જેવું મજબૂત કરે છે.</li>
          <li>🌟 ૧૦૦% સુરક્ષિત અને અસરકારક.</li>
        </ul>
        <Img src={images.calciumHow} alt="Calcium How" className="my-4" />
        <p className="font-semibold mb-1 text-center">સેવન કરવાની રીત (How to Use):</p>
        <p className="text-base text-center">
          * દિવસમાં ૧ થી ૨ ટેબ્લેટ (ચાવીને અથવા ગળીને લઈ શકાય છે).
        </p>
        <p className="mt-2 font-semibold text-center">
          &gt; તમારા હાડકાંનું ધ્યાન આજે જ રાખો, જેથી આવતીકાલ વધુ સક્રિય હોય!
        </p>
      </section>

      {/* ───── FOOTER GIF ───── */}
      <section className="py-6 px-4 max-w-4xl mx-auto flex justify-center">
        <img src={images.footerGif} alt="Footer" className="rounded-xl" />
      </section>

    </div>
  );
}