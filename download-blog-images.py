import urllib.request
import urllib.parse
import os

# Output folder — matches your Next.js public directory
OUT_DIR = os.path.join("public", "images", "blog")
os.makedirs(OUT_DIR, exist_ok=True)

IMAGES = {
    "hero":         ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEqgh9Anh2URuoXakN9z1V80o8l7iJjr3sO5ZFiOP6cGphfGuDGe3M2RR-BHC5mv8ll4fh9HYedRzFDJtmhvea6UwabF2ruipdAigxT9eJ0d373ilaJSs78rnhn5o6qkgWtk_1y5C2NphyphenhyphenRruhGRSdIhqb3OcCZupQbUM76f39HvZOACeVLXTFmwB7cPCO/s1920/1001955126.jpg", "jpg"),
    "weightChart":  ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCPGC9Xv2nkULysXD8uO5n5OmwVCGFgcXCWTBkEa1mbM-Qv9VlSIMJU1xacwi2ZIwBqhUA2MibwvId6xsAOhB7VyCc6SaAzQUog8ogzhpGwtpYpFB3y3NeKROQGGHjW3qL0bcvIavWM4XQ29vIBh5g_cvY0mlOcbjqlVRRZQXHNsOo3TGFP1s2SXBBffaV/s921/1001954278.jpg", "jpg"),
    "diseases":     ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl-B_PYSTsKRIfWpoTIRt6itVt2S0OGF7libODUBaw6edSj50jGXDCwSVBWbigb-8VIVttrgCPM1JSiZPimDsGGqbHcJLTv8F30J0Y3HF-l1xYMF_xksNWaV8XVS-oFBPCNES4pstrl8jYo6uNHFIMMCnmEFN9xMvfOCCaKSS4QZQRzE8zQQJepiMxZk6d/s1920/1001955265.jpg", "jpg"),
    "remedies":     ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiQZHYcLgmAH6zpCCye3_pCqZvQatETbh49jKku0SaYuI3PsV67Gc2_02D-g9bMHL6f2z3ld8NBfgz8x2WnNFoSuTcP-3x4hOXmvB8sEANVO8U-GlIqYqfZx-ZyIvBwJHPr3uGn6J7tFDQ9DhEpEId5-D0aIe3gekXrwVpPd6koTjqGcsBn9Fd8OkGghV/s1920/1001955447.jpg", "jpg"),
    "whatsappGif1": ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRykECrvQ4CwqDsD25uUhGDuh3W1yVZCjEDNF2tugSHHqRO-4byaXunq2rpfzu9lxdrzVXzBbgu8jWNtRJUTro3ojEBmXq86h3mQm8D_RAPOyOFJjvukRzfs8Rl0z-yKMcm4FBAIH6zm-0JDswjWk4cy0T_0O1ijByHxEzMTGhhXZUTQwq4D7prDCXTHs0/s1600/1001973507.gif", "gif"),
    "sideEffects":  ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7Kk4l92LDwR0xdmahDne2QKD0iozf4VGDoRn_Zz5NVHQLDUjGXgba2aCa41UygIBL7qH57X5KT2w5NVLqpFxOBss7xTZGQdVLmaQkGdJYgvoPMH9aZs3FnBGSC7dVc0fWmAXQ1Didwo7Vu97EGwaJmWgjoW67DqZdtlL06iambU1PtDVJf1O5XdKy28L4/s1920/1001963450.jpg", "jpg"),
    "digestive":    ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKjnnw6WpUoCMqcetCpG4wRgsuVICrmem0Hs59e3Ip0zSabb4rVO5RlywjPcwtr_446FtdNHgDOrOr-uAnkqIpogKzcmp0YOREL-izZ2g9l-3ndcGv6epUObyg7bvSm_QTC6jBFTszo4PS2mdto0VYQoAU6UyDKc3eMRK_xGdqYVOI3OCvhAO9C483EVzs/s1920/1001965149.jpg", "jpg"),
    "fastFood":     ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4wXyoqqqWPOpp0fF04PBiUPRKKKqeTSs_TOUExclYsXF9DJ2HEw7T6cRNtuHX73lisqkwkCS-gF86DxJ7x2GUmt0gQTWMpDgavEgjJ1KrOgIsbHJ7DpfQKAoUjikoC9-WqNXbpZH774Rfq09kXyC8pCfSud4rylac5PNr_EogysPMlMb_tT92tt2FhE8V/s1920/1001965337.jpg", "jpg"),
    "whatsappGif2": ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLh3FGiPeIIo18QfuIpxlJlOSGDMeW1V22FDXqxV8ZcBRogOMGwNWdAVM0lpZdmPD5WdVLJ2_RtxR3i-duzAcOGA0dxK2VVZj5_xoLe6qDPmL6jtgLG4UaAjbgVSEnsknc7KbJiDFtBU2zWDtOWCS31BUtTVTs-8veCOwxRsjtnjEiKCibvbKxybUGdme7/s1600/1001972345.gif", "gif"),
    "weightGain":   ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMybLbDBg7rmOMa8QX_W6lbW8Ziydhcfw0XkL20auQd5riX9Ls2rhY54bIpEnacl_FWnzgfMdP93kJDX2Ao6wFstx28YH0eORU3Q6V_PWZIdXfzo7a2txJOfxIcUuRmLv2fpzHgYpveRoeitkcbtJiMi_EZHJIC34v9i73Dn_eHBbEvXXb7F89re5_7V-J/s1920/1001965431.jpg", "jpg"),
    "orderBtn":     ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhak1c7BeO5HWgYm-R1zhWBFd1n39XmvjoRdTDTHGNMVPsoi6-TfPGyeOQKgnjvv09h1X208OWJjMTg5WX4UC6qRcV7q0LqooQWX0gHKsjcm3bjG5AgN_iegHnj3yrMm8NJ6ab-vfGuRAziH5zOd-jgJzYfsbgrMBUs7fIWVDCCvAgmVkBXro4h_S5nr4C_/s1920/1001965394.jpg", "jpg"),
    "review1":      ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJIZqciY65i4fy9Q1rSWM2fdFgNV4lKbOujMX4JKsZWUPFGYXf-djNtRzK_ijGKJXdMdODI3hxLKsTFc5RdibygDg4U3s7TFHc3PwaOBh1ZUJ7NcPFG793EGsW2hoYPoAnGkjX9UsUBQ1rMjjKIq3Yf2OXR_6CyqUG3Beq6I81f4BLh23X3Pc0c7GFPW3N/s1920/1001973082.jpg", "jpg"),
    "review2":      ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHkTUjiBjNbnOGFoawlrTCkuw9Sv5fg-ZgcSL-iANdi0JMjgwkUW93KIzdq900Yz3Ek14VRnY-HNBr4fYreqY4al5rMLUJELp_aC_dfz4-dKPJ2teMoYZ2NcqHnjOTsHYE3qN5xxfDn-5LSEeBUg4j5cFKf6d-hC4QAwmT0GSMNcU_067eC3dY3bzjj3wj/s1920/1001973235.jpg", "jpg"),
    "whatsappGif3": ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNHxdwF5-552-essPOcfW2QLNZEeV85X-dWZNrc4ZbgcvtwnU3kr_FOdJWLjSwMiAfx7A08QjYYpzYdU5w04FRZ7Hq_Xr4iGzzV-3CE8DaZwTjUyR0dJSJ0PpYc7tsT1LFBDadXPCxwCk_K_F_-z94lDy8BZbzI4A6W5pSRAW0MYeZwQ4pJQVO01WVuzb2/s1600/1001972345.gif", "gif"),
}

# Blogger allows requests that look like they come from their own site
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://aayurvednaaangne-amreli.blogspot.com/",
}

print(f"Saving to: {os.path.abspath(OUT_DIR)}\n")

ok, fail = 0, 0
for name, (url, ext) in IMAGES.items():
    dest = os.path.join(OUT_DIR, f"{name}.{ext}")
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        print(f"SKIP {name}.{ext}  (already exists, skipping)")
        ok += 1
        continue
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if len(data) < 500:
            raise ValueError(f"Response too small ({len(data)} bytes) — likely blocked")
        with open(dest, "wb") as f:
            f.write(data)
        print(f"OK {name}.{ext}  ({len(data):,} bytes)")
        ok += 1
    except Exception as e:
        print(f"FAIL {name}.{ext}  — {e}")
        fail += 1

print(f"\n{'='*40}")
print(f"Done!  OK {ok} downloaded   FAIL {fail} failed")
print(f"\nYour files are in:  {os.path.abspath(OUT_DIR)}")
print("These match the /images/blog/* paths in your BlogContent.tsx")
