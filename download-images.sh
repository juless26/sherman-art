#!/bin/bash
# Downloads Mark's painting photos from Etsy.
# It skips photos that are already there, so it never replaces the cropped versions.
# Run once from Terminal:  bash download-images.sh
cd "$(dirname "$0")"
mkdir -p images/paintings
get() { [ -s "$1" ] && { echo "Kept $1"; return; }; curl -sL --fail -o "$1" "$2" && echo "Saved $1" || echo "Could not download $1"; }

get images/paintings/when-birds-meet.jpg        https://i.etsystatic.com/20878714/r/il/a54d02/1971373792/il_1080xN.1971373792_kxqa.jpg
get images/paintings/have-we-met.jpg            https://i.etsystatic.com/20878714/r/il/0b6306/2025200273/il_1080xN.2025200273_dpm2.jpg
get images/paintings/white-night.jpg            https://i.etsystatic.com/20878714/r/il/988bbc/2022179577/il_1080xN.2022179577_cc44.jpg
get images/paintings/oxpecker.jpg               https://i.etsystatic.com/20878714/r/il/aa7201/2019051901/il_1080xN.2019051901_8g3s.jpg
get images/paintings/a-very-still-life.jpg      https://i.etsystatic.com/20878714/r/il/925ee8/2022186455/il_1080xN.2022186455_k8bp.jpg
get images/paintings/justify-3x.jpg             https://i.etsystatic.com/20878714/r/il/356203/2025224053/il_1080xN.2025224053_eu0b.jpg
get images/paintings/old-point-loma.jpg         https://i.etsystatic.com/20878714/r/il/56aa4f/1972354284/il_1080xN.1972354284_j5vo.jpg
get images/paintings/red-green-fuchsia.jpg      https://i.etsystatic.com/20878714/r/il/5884c9/1971384246/il_1080xN.1971384246_qe1z.jpg
get images/paintings/neither-fish-nor-fowl.jpg  https://i.etsystatic.com/20878714/r/il/3de6c0/2018963079/il_1080xN.2018963079_sbtz.jpg
get images/paintings/next-stop-del-mar.jpg      https://i.etsystatic.com/20878714/r/il/ba0445/1979507726/il_1080xN.1979507726_1njf.jpg
get images/paintings/hands-holding-sunflowers.jpg https://i.etsystatic.com/20878714/r/il/b56002/2019038523/il_1080xN.2019038523_mhlo.jpg
get images/paintings/picasso-hands.jpg          https://i.etsystatic.com/20878714/r/il/dff50c/1991566056/il_1080xN.1991566056_d4wy.jpg
get images/paintings/nyquists-quest.jpg         https://i.etsystatic.com/20878714/r/il/7cf94b/2027083367/il_1080xN.2027083367_4ubp.jpg
get images/paintings/tipping-point.jpg          https://i.etsystatic.com/20878714/r/il/3586ef/2029338019/il_1080xN.2029338019_lg4d.jpg
echo "Done."
