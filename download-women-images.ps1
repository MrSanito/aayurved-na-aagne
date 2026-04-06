$outDir = "public\assets\women"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$images = @{
    "hero.png" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibcPr7sDoa_eoXkqWHUBoPx_Ci4x4Bex0jYrtF25Mk0xK8z9yI50nKk3D0Plv7icsaRcfUXMjuzXHmk6RjPYrrhvLZ-8A7EYwZ0o-X4bh_Xft-iWhcrkOY_QB05GqL76avT1FpfWJrWCSj9wsvovVu0MsDu94LcOYNT4WXjcn3wWTl4ZRiljVdJxrQugRT/s1376/1003065689.png"
    "real_problems.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghJa-Ex-vqprWlOxIpBSSBCg1hdD2T1ieoqzw9uGqmEbJXJ6avH6hssUOGFEVa1PdRsy1uv30rlsT_AfJ241URMdaxNlvinzwlZepsUwFLUDgwaU_QMeysySjO9UVF5ZijURC9LbR7IY_VP8-iANv56SUmOoGtFr92F3Su8CgD_QKHu0awKa5JjBf9BXNE/s1280/1003056938.jpg"
    "common_issues.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3ac7U0Fqy9Ythmy-QyFbD-PCOIt5QvErLrQoYZbQbZvN7CeP1951EncqMDW5Uz1dEZyeulClnjEIYX1HFpsMesQ1DLA9X79qko6nPnAyiQYhy2rMpiaEPgHDpQQKqOtRS1N_CAhYyUl2E2GgYaxk37VvWfRdLPrSYyTwiC_bXhd8-dxKe7cXDVd0eogah/s1280/1003106480.jpg"
    "statistics.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ojN37llXWbg0-UYkOPLbYi26BBwcKfBqzuLMB6I9Kon-LilWNU5XSmDe4MF7m-z0r8epLac58evumWmrLsblzuGPW3FpgpNgYoUMlVWV_1379tUaK4c5ImWqEjhIYId6BPZ7C7N79NQ7aKzsJ79uOPClDyPSxTwaP4-6ndCbAl3s9U3om2AIi8Heeorn/s1280/1003056939.jpg"
    "india_stats.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbNacJA1g0BoZNixmTPyhFFs6x5tWdqnOUPh7u-dBxNeCeXwWTfHLKpMc765sn8OztlKbGx0qYse041Utv5Jw8ewviKyMXhkq6w_GYwduKTVYMXmTUpHd3KLkCK8Cp_dJt1le4aroplk_vJWX9_8gt-2MKh8rcYVjHLic-fS3N4TTXraRGc5lfDdFKK9_-/s1280/1003056940.jpg"
    "pcos.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi457-Lc_Y_eGCzLxzkC0us55DOp2Dmq9Hh42eqtRgtH6GU3eiqSd34ZCLlfROxVhSbw6RcKP2tlhDP22RvxW0SgO41-MQZ3h5x8caMyurWeOTCw8i-wWqd_en6UrIPGsmiscGli3AX9JyN985qi3acKYJhvaLwonrPTW2CQbNQPBPWzeH0cZVoH09wGdAT/s1280/1003056941.jpg"
    "cancer_risk.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaOFnNGPGkqehHK1xvYjXLNcmkjDsUBXgE_LIepAhwdtfGMUmMiZOCcjRLVGFClFH8_rdkCSbAlUD-JPIHSEjifDpWukioRzlYH0CQKjVvj7dyzA-lbxdGLSW0B1AU20sHz2ABY1fLRJLA86Sm-NxJ69b4-ZQPfreRvVzAOXtEA-ZPi_qXW_qn_aHlLzZh/s1280/1003056942.jpg"
    "pcos_india.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3CeTN7mvofmgtzjTPly3TMjJ9iWdeX0RnZhLHXqODVb0v1-cE0GO2Iuujxe-9tW7cJ7s-CQ6jYAq-vPKxNCXCWOPKGrqJbIdhEtYb0Q-Qy7d1-9FsmFJ6Bzy73__CjUeUaH0HdhmPci2y6tH_V8CXWXRTkisKWzMz-bb08uF1di-1bWPNCSafYpZkeVaI/s1280/1003106263.jpg"
    "celebrity.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzT6_E9QQueM62BH_K8-9RO8A2KLsndmaWBkidM83IQrlGMZdHlQ24j-B3z6n2MP9ySzutzpQ7Xig7_lAjY7JTpM3HDUS6PH3FwHqHMqLteZ7T43ANaUxRQ3mZJg1zKIq8XkAp6lHm63knS4PXDpjGxTldoF_MS8NESMG6oS-lYsbcmHfoTxN2oRU5Bhe/s1280/1003056943.jpg"
    "ayurvedic_course.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvYu8rE6SYWX7h61UeGoV8B-5uTyeHsajZeYoKtP-VTsuT3K_ylLTeorb-QPAIytD7qpq1MIMqU0R_CTR0clZg0N11jow3SYXbqkdr-2Sip_A6h8NhCaZ0dwFbhZ3xgUJYhlKcN73rjKWQ8N_bw6OknATBgD6sYxbxUaVevUpbjx72SNB5yGK2ZPJo0PTW/s1280/1003101543.jpg"
    "shewell_drink.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgntL-JIk8YgY96qfYk55eV6Hyagti_m_TWZWi4GOrlWXB-bpH0GPjGrNr1IBzNusJSe_E-lCv1lye1PuhCeeIwAHeNOVkduC5jNwTay6lqhJzOCRHwG9h7wmGn8EyArAEtnT0cmgI9YFjJCg-rCU4vUP2Q0BGPDwl6qishoWsUC9CC8bjGtuZm1-A0hRRC/s1280/1003101803.jpg"
    "shewell_tablet.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJHXDWv02y6lE4BYnMiAT4A6MNrF51GFWBUYhSCeBPFtjpFU2ue3gpzhKidJwck_kkKkSoFiKFmLIsGpesKKPYoFyG53uq-drM7usZ_0Ciy_cZ7MIgmfWCmbDeMN8IyAsnEFBZGmByy4OcsRSyMOAwj9smuiNs6qeTK5tbMERFZxi4UJVe89vir52UU5AU/s1280/1003101804.jpg"
    "berry_drink.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXT0OvEza0DGTHETEmhPW_l8_b1NA7MlIvRWgvvhh5Den9Omd5z6FF-fbLWoBZsOYxsRep8vHbM2zGdpGeX8g2OTQgPsVlAQrUJuFwhH9F9hrKAj6CttEONwtSt6kG9eSVOdeK2XUQ585EdC3nTvBkerxbGhJkri7nTP5MhMmTJa38bXd87ENkrUTPVcBR/s1280/1003101805.jpg"
    "saptamrut.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9bTmFCZRrpQDeWf1ONM4UW3OYyIsNCXEce6P_gbMJIawCGnM7KkRNpH0y7KW0QodbYG-D4A_GrAql9_Y8DfTv3PVoYKDRHlMTmVBtj6dU3-b_IJy1zdvD8hg8qSaAb5h5Vngmt-o3DSbLzUT85_ErqUmiJMNHAqyrlXFNb-7WVjQQIUe88gW3PD7ZaVLj/s1280/1003101806.jpg"
    "intimate_wash.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3qr3TNrds7jXnCw4VuoK148g1NRwt73Qpnxgs-J-OE0jvu9uYHTPE9detJOs89ZfaFSe0FZUQBSMWS0ZPeG5udl23-_tsJG4NmyvcGQAPg7PierUS-y9ZhxdMIh5ykLxpdtJFVA086XvV6UOc_ALr89ek35OG0hV3AAOHZXrpF-O70J7BG_07aaU3Ouz/s1280/1003101807.jpg"
    "sanitary_pads.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtFAuTzuCqdnDvFwalD4eRq1JleJbhg7rtrqJlc4ZFTji6R2bgrp8KO0eQvwKSeTWOg1t0_WPsaFVI-WpDyqKu_0mmZtmamTFeChZG47gQOvt9AwkGt2y4U4IWA30aRl3Vb7AZgKyy7rwg-dCwkESvAQzFKG8JSxnuZLPwgd7QRw9OiHwcJsnbmqXrtWm1/s1280/1003101811.jpg"
    "result_gif1.gif" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIj_4NywooKMIaSOiL_KahOFdLPzlItuBTDj_br8Xt2mjrceeBC6QQ6CdbwCCwpzbYpjgJDfC7tvhyphenhyphenctzeLdgwp-ty-7TURy3XRmvIzgHd-q_x7evDpc0hDMIC4KnCKi2DBXpxZUeQztycuf7AsMO7xHrJIsSmMXuWSkDPSndMYnvf4l4nmIvsKmJcZy0L/s1600/1003065751.gif"
    "thyroid_types.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4y177R9R2PXMU6Y_QdBjvWfaKJlqTFEpVCQ1uU-EuocF2b0i0j3OM8prER8mFORIlAd5OwLaqHqKnnRYTbohlnbXxdfZLyv740Rb3nYnNIpU7D3Wg8ASPzp7ije4fAzx_6Z6cJfOpdsriQC60YbEh7LQhGXs-hRfaxtuyGCAVsEVzaj9AZCPEANAEZ8T1/s320/1003106312.jpg"
    "thyroid_symptoms.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqpbvg0bO5w0ANEMu2i4E6nOHWLSy-bcHk92gR5JO-GrZPP5ZJmfNXUrf3PcozbPwuJRjZ8-Bwmr_JmQagKv3UDmPvCEEp8_Uq6M51epUNKcMIC7fAstKKgZVsTv_SU-xInRQA0OjVIaHYQLi182cF379XQfad2wv10fQXjpk0nYfWRdanqG6VtdPT8Vmm/s1280/1003056948.jpg"
    "thyroid_stats.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW3vOIam37BctWDZaJdIHZLZZms4vBlBToRCFBvqUIZ14mYJswOqRNeV9VwqVVjkuCL_Dp5biFL8Ivu26Cp84-1o7IvP_0TnSROuVGnVp-yqTJt41CdTl3zXVQyiESA8TayrWf8uDXi_POoJNM3HS4CtUq1azvdEo1i_FsYQjsQfI5GcYnmdl0M1WWFtSl/s1280/1003056949.jpg"
    "thyroid_market.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrCTmiXdFsG0yxiEgmgUxT3CMOOBoxnxre_5dBB27qLiHMYPN1YtoDLkXFG3vhvHe4Df0KH2ruGdTR-smXt738C8vNCl5xtwl3P7heFcume0QH0Lfp_GHTBoo83gBPuBXvNhujfenuOvAEQpAUMNHmVNaZUV0Mh6XiltKFq3xPAqQ9lue4DYyEr8JHh8w/s1280/1003106213.jpg"
    "thyroid_solution.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-jVSAOfzkaVFRas6hoVDmUQnQng7VXPPhVJEyldJcv483_YhDwDT6h28qUKvW_vS-5uLC8UR1RTOV8XSUVKl9WpROQE-rDf68AfVwCdWyLBSXX9Pfx5T9xBgBWQU9_spQbWcpIH7X-FsndUSCaBI96ju0ZlqAHAAsVp0o5hARlKoyXSpKZlXcN8Pi4wYf/s1280/1003102906.jpg"
    "thyrocare_drink.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdcyAHnzkB-XaSX5GYqBN8fm11GFwH91QmNk4XkbKYEDCYALH6hpg247qkgBV5yBq2YOeAW_wQZYN1CHHZSo55DPpQWW3tunSRM5QF2wuTs899O6OyZgUrj9YXwykZzbSIlBWNVJp1Mbwk594fTQtcx_h-9oqYMmpVBS8WlQ3ZcZ8XCn87Mlki2I-Obouy/s1280/1003102904.jpg"
    "kanchanar.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNbvgWIRlfl5LHZCJh2lHGGBM9k5Qc2runDcPXW9xp5As7-STJwxIGFTFLzejpyqtnX0fqrjDIMHPApBJyM_dV1H34AED-Fbtctl9PL-oACbnRI_G2EJEfygKczIVbrMjxw828_cFdU3_DA28-RXF1eeL8p7JTFXO95yiSAZm91yfMbtyebRdKKQ4RYONC/s1280/1003102905.jpg"
    "result_gif2.gif" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHKlmCZNSKLaaeNDMAsoxYdEqkacs_WnZLAZUpvDDJUU-Fk3ZGWHcrv0gqHcdYLqC3iNXBf73osYAhIyQp-WfiZuEP9vSod9plC-AZfzFE-7MU7vl-5X6VQbTetIW7uvUu1kCdIT4qbtLggPvfTLIDP0cyxzzZTqhYk2AsT-3IA4oDJXiQ8rQhBHu-X3ay/s400/1003065750.gif"
    "obesity.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9VPhq4U7ZI474_mFvqit8XmnQJrmXKSRYXFhMgIpk4NCzA7aMgp8iH5c73O3Xmf-t5HF4KY9OGPNjTGlzVfgGvPoZlBPH2ZI3PC9YosIlwZZh4MTbbEkVgqAOvxNiYO8didsSI5J7xrI1q5N3QgaVnHosv4Jk9uc_jXUyk2UZyv5B1d3i0HPqR10IJrOd/s1280/1003056950.jpg"
    "obesity_market.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhucDr4ASt5iDnAZXpR_PHD5AMq1JQTBN_pV5JynyqSyUquM5S_-sYHbZ1KEhT_W7yEFM1Bk2dap-QXot8dWeW0CYspgVMps0d5oYwbZtGs1cI3PYmlOE1CcTgLbodCgJqolHCUKbwKKq67hRs4uVB6ZwjkJvt9-Micg4M0qzR7b-ZiGXzQ_q8g7TOVNmB3/s1280/1003106368.jpg"
    "obesity_crisis.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGu6bJev2N_cMAVdSi5XNfocUAq8_dBrjvSfgFbH20qWkTT4LgOVtRVgBjg2cPWMuC5OLTNnVxdDpmjricxQrzzn7qYVi6iZSRtL43s7Zv_rEeTh0FhBdbixfCglWGcO8gFvMl8Wi8w6eJD-vTOmzs3x1oIlYptPasgTIqLAzr8QZWYtd1x6JAgHw65M8K/s1280/1003107592.jpg"
    "beautilook.jpg" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw242Ap3vovOnHnUCTCltI7xsxDpDL3keZDKVZpf5gSBuPd6aF1udMdteytHPuCRuVG9JoFB2k-aPGuzWhyFVSXjMA2eUmm0XTKjaHIbIH917SMj1OoZAfOBnHIyoVHoi_kTyhUHqe1efP5zmF-36Fxv3WIp3JlcUF9H9WWGCFkkGPvq0oQXApO9m568M4/s1280/1003102907.jpg"
    "result_gif3.gif" = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi67zpUCT8Ajrp1LsXiSU12v53xl4jKQBGV5UvnTpLn5WMfhBp5xn_wdSz3lXn3Ar2oHuClARO3oTPzW9donlvB8GOPKOzK_g-LVyYwjBD9i8pkXHJW7ip4uUZQsxTLDsD-A0OETW-tp4_lpr_xrvNz7_KF10zwHo3IKECrAzaKrvEQSv0PGm7wUlpd5Jp4/s320/1003065750.gif"
}

$count = 0
$total = $images.Count
foreach ($entry in $images.GetEnumerator()) {
    $count++
    $file = Join-Path $outDir $entry.Key
    Write-Host "[$count/$total] Downloading $($entry.Key)..."
    try {
        Invoke-WebRequest -Uri $entry.Value -OutFile $file -UseBasicParsing -TimeoutSec 30
        Write-Host "  OK - $(((Get-Item $file).Length / 1KB).ToString('N1')) KB"
    } catch {
        Write-Host "  FAILED: $($_.Exception.Message)"
    }
}
Write-Host "`nDone! Downloaded $count files."
