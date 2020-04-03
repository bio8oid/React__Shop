
const loadDefaultData = () => {

    const data = [
        {
            "id": 1,
            "tag": "risers",
            "title": "W&W INNO 25",
            "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
            "price": 595,
            "img": "images/riser-1.webp"
        },
        {
            "id": 2,
            "tag": "risers",
            "title": "W&W INNO CXT 25\"",
            "desc": "Weight control system: riser weight is adjustable so you can customize the weight to fit your desire. Convenient center-shot adjustment system: adjust the limb and riser alignment without unstringing the bow.",
            "price": 615,
            "img": "images/riser-2.webp"
        },
        {
            "id": 3,
            "tag": "risers",
            "title": "W&W Nano Max Riser 27\"",
            "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
            "price": 625,
            "img": "images/riser-3.webp"
        },
        {
            "id": 4,
            "tag": "risers",
            "title": "W&W CX7",
            "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
            "price": 655,
            "img": "images/riser-4.webp"
        },
        {
            "id": 5,
            "tag": "risers",
            "title": "Hoyt Formula X",
            "desc": "Introducing the all-new Formula X, the most dynamic, responsive feeling riser with no residual vibration we’ve ever engineered.",
            "price": 885,
            "img": "images/riser-5.webp"
        },
        {
            "id": 6,
            "tag": "risers",
            "title": "Hoyt Satori",
            "desc": "CRS foam core that is developed by W&W engineers maximizes the durability of the limbs and stability in shooting. It ensures the highest speed.",
            "price": 915,
            "img": "images/riser-6.webp"
        },
        {
            "id": 7,
            "tag": "limbs",
            "title": "WIN & WIN RCX 100",
            "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
            "price": 519,
            "img": "images/limbs-1.webp"
        },
        {
            "id": 8,
            "tag": "limbs",
            "title": "W&W Rapido",
            "desc": "Win & Win’s Rapido Royal Cross carbon/foam limbs have been designed to complement their new Rapido carbon riser. These limbs give a smooth shot and are easy to draw and aim.",
            "price": 325,
            "img": "images/limbs-2.webp"
        },
        {
            "id": 9,
            "tag": "limbs",
            "title": "W&W Winex",
            "desc": "WIN&WIN’s 45-degree carbon system protects the surface of the Recurve limbs and provides stability, while the barrelled bottom design increases accuracy by reducing unnecessary movement when the bow is shot.",
            "price": 375,
            "img": "images/limbs-3.webp"
        },
        {
            "id": 10,
            "tag": "limbs",
            "title": "Hoyt Satori X-Tour",
            "desc": "Nothing gives a trad bow more of a lethal edge than being paired with limb technology and performance sourced straight from the recurve target archery world. We proudly present the culmination of nearly 9 decades of knowledge and experience to the traditional bowhunting world: the Carbon X-Tour, our fastest recurve limb ever, featuring our all-new, exclusive laminated bamboo and high-performance carbon layers. This new combination maximizes dynamic limb straightness, torsional stability, speed and precision string tracking for the ultimate trad recurve limb.",
            "price": 699,
            "img": "images/limbs-4.webp"
        },
        {
            "id": 11,
            "tag": "limbs",
            "title": "Hoyt Carbon 840",
            "desc": "New glass wedge design, combines aerospace carbon and hard rock laminated maple cores for a smooth, accurate limb with great performance and feel, without breaking the bank.",
            "price": 285,
            "img": "images/limbs-5.webp"
        },
        {
            "id": 12,
            "tag": "limbs",
            "title": "Hoyt Formula Carbon 720",
            "desc": "Hoyt’s Formula Carbon 720 limbs feature high-performance carbon laminated maple cores, premium construction and a sweet shooting feel.",
            "price": 215,
            "img": "images/limbs-6.webp"
        },
        {
            "id": 13,
            "tag": "tabs",
            "title": "WIAWIS EZ / EZR",
            "desc": "The round design of the EZ R Tab and unique sliding adjustments allow for comfortable thumb positioning and natural hooking. The unique plate positioning brings dynamic control over the WIAWIS EZ R finger tab. It is possible to control factors such as hand shape, the force is being transmitted through the hand, and sensation of the shot. The plate that supports the little finger can be micro-adjusted and is also detachable. The tab is made from reliable, high-quality genuine Cordovan leather.",
            "price": 125,
            "img": "images/tab-1.webp"
        },
        {
            "id": 14,
            "tag": "tabs",
            "title": "Fivics Saker 2",
            "desc": "The plate can be precisely adjusted to fit your hand by moving the plate in three planes: up and down, front and back, and diagonally. The small size of the tab takes away obstructions. The tab is made from reliable, high-quality genuine Cordovan leather.",
            "price": 30,
            "img": "images/tab-2.webp"
        },
        {
            "id": 15,
            "tag": "tabs",
            "title": "FIVICS SAKER+ Plus",
            "desc": "Saker Plus finger tab has 6mm of thickness and added 3 weight control and 5 angle adjustment system by using of precisely machining aluminum plate.Saker+ Plus finger tab can be adjusted depending on individual characteristics and allows more stable hooking position and it makes possible to shoot perfectly in any competition. And also, it is very easy to cover the special parts for the thumb and little finger. We have considered only shooter’s convenience and individual characteristics always. Saker + Plus finger tab’s spacer is designed for the bending of the shaping as well it looks like the elephant-shape and makes comfortable for shooters.",
            "price": 105,
            "img": "images/tab-3.webp"
        },
        {
            "id": 16,
            "tag": "tabs",
            "title": "W&W WIAWIS EZ",
            "desc": "This finger tab stands out for the comfort provided by its ergonomic design and for the extraordinary stability achieved by increasing the weight of metal parts by using brass. Removable and adjustable parts allow archers to tailor the tab to their preferences and needs. Available in different sizes and colours for both hands.",
            "price": 95,
            "img": "images/tab-4.webp"
        },
        {
            "id": 17,
            "tag": "tabs",
            "title": "AAE | KSL Gold Tab",
            "desc": "The cutting-edge design pioneered by coach KiSik Lee represents a breakthrough in comfort, ergonomics, and feedback. ",
            "price": 185,
            "img": "images/tab-5.webp"
        },
        {
            "id": 18,
            "tag": "tabs",
            "title": "Shibuya Chung-Tae ",
            "desc": "Designed by gold medal winning archery Kim Chung-Tae to be the best recurve tab on the market. With attention to detail and years of experience many of the distractions and annoyances of older tabs have been improved upon. An adjustable ledge fits flush with the upper edge of the cordovan face. On the thumb side of the tab you will find no screws or protrusions. To prevent rotation in the hand a raised edge designed into the finger spacer, while a set screw was added to the finger loop. The days of clunky fasteners and shoelaces are over. Fully machined aluminum and only the most premium cordovan are used in the manufacturing of this tab.",
            "price": 155,
            "img": "images/tab-6.webp"
        },
        {
            "id": 19,
            "tag": "stabilizers",
            "title": "Doinker Platinum Carbon",
            "desc": "Most advanced tournament stabilizer to date Ultra stiff, .750” O.D. High modulus carbon rod transfers energy more efficiently to its exit point 1 1/8” removable, fully adjustable doinker supreme • Includes a complete set of 421 weights, EXO Doinker and a Doinker thumb spur • 24” (12.3 oz.), 27” (12.7 oz.) 30” (13.0 oz.), 34” (13.4 oz.)",
            "price": 125,
            "img": "images/stabilizers-1.webp"
        },
        {
            "id": 20,
            "tag": "stabilizers",
            "title": "Doinker Platinum Set",
            "desc": "The Platinum Hi-MOD is our most advanced tournament stabilizer system to date. It is the choice of Top Pro-Archers world wide due to itâ€™s Ultra-Stiff High Modulus Carbon rods ability to not only transfer the residual energy left over from the shot efficiently to the end of the stabilizer but it also holds 15+ ounces of weight with little flex in the carbon rod. At the distal end the energy is absorbed by the minimal flex of the weights via it;s removable, fully adjustable, 1-1/8â€ Doinker Supreme. All of this while keeping wind drag down to a minimum with itâ€™s .750 thousands of an inch outside diameter carbon rod. Other features that put the Platinum Hi-Mod in a class of its own include: a complete set of the low profile, one ounce increment stainless steel 421 Weights, a Doinker thumb spur hole at the base of the stabilizer to help assist in a solid connection to the bow/mount and the Doinker thumb Spur tool. (Thumb Spur tool included on front stabilizers only)",
            "price": 815,
            "img": "images/stabilizers-2.webp"
        },
        {
            "id": 21,
            "tag": "stabilizers",
            "title": "Win & Win Nano Short",
            "desc": "The new Wiawis ACS Nano stabilizer features enhanced stiffness and stability.There is also no need for a V-Bar connecting bolt, it has been integrated into the stabilzer which makes this reduces the weigth on the back of the stabilizers so 25gm was added to the opposite end which moves the centre of gravity forward thus eliminating unnecessary movement and causing a noticable vibration reduction. Technical specifications WIAWIS ACS Nano -Short rod lengths 10â€, 11â€ and 12â€ Colors: carbon mat, red, blue, white.",
            "price": 75,
            "img": "images/stabilizers-3.webp"
        },
        {
            "id": 22,
            "tag": "stabilizers",
            "title": "Beiter V-Box Weights Set",
            "desc": "As all Beiter products, the Centralizer was tested by top archers world-wide and used successfully in competitions, winning many titles and medals since its introduction 1996. Four carbon rods, positioned to form a square are held together by plastic blocks (called tuners) made from high quality thermoplasts and elastomers: the result is a new concept of stabilization.",
            "price": 255,
            "img": "images/stabilizers-4.webp"
        },
        {
            "id": 23,
            "tag": "stabilizers",
            "title": "Beiter 3 Tuner Stabilizer",
            "desc": "As all Beiter products, the Centralizer was tested by top archers world-wide and used successfully in competitions, winning many titles and medals since its introduction 1996. Four carbon rods, positioned to form a square are held together by plastic blocks (called tuners) made from high quality thermoplasts and elastomers: the result is a new concept of stabilization.",
            "price": 285,
            "img": "images/stabilizers-5.webp"
        },
        {
            "id": 24,
            "tag": "stabilizers",
            "title": "Win&Win V-Bar Cx2",
            "desc": "Win&Win V-Bar Cx2 Carbon 45 Degrees.",
            "price": 115,
            "img": "images/stabilizers-6.webp"
        },
        {
            "id": 25,
            "tag": "arrows",
            "title": "Axis Carbon Arrows",
            "desc": "Millions of successful hunts testify to the awesome effectiveness of a simple concept that equates to more downed big game.  TheAXIS micro profile focuses the kinetic energy into an ultra-small frontal area for less friction and thus greater penetration. AXIS penetrates deeper as the shaft passes through animals with less friction behind the broadhead channel.  The small diameter also means that AXIS arrows fly much better in crosswinds than regular carbon arrows.  That means broadheads will find the aim-point more often in the field. AXISis widely distributed across the nation and is found in virtually every pro shop.",
            "price": 115,
            "img": "images/arrows-1.webp"
        },
        {
            "id": 26,
            "tag": "arrows",
            "title": "Easton X10 Arrows EP08",
            "desc": "A matched dozen Complete Arrows, with pin nocks, pins and stainless steel points included. Fletched with Spinwing fletchings. Top of The Line Barrelled Carbon Aluminium Arrow, slightly heavier than ACE Arrows, for best down range speed and consistency",
            "price": 465,
            "img": "images/arrows-2.webp"
        },
        {
            "id": 27,
            "tag": "sights",
            "title": "Shibuya Dual Click",
            "desc": "Since we introduced our first target sight, SHIBUYA AR-10, in 1979, no other brand of recurve sight has created more champions and world records than SHIBUYA. Our latest Dual Click Sight line has been chosen by world's best recurve archers such as Korean national team members. If you are serious target archer, Dual Click Sight is also your best choice!",
            "price": 215,
            "img": "images/sight-1.webp"
        },
        {
            "id": 28,
            "tag": "sights",
            "title": "Shibuya Ultima CPX 365",
            "desc": "• Rock solid precision target sight with 3.65 of elevation adjustment • Lightweight, extra rigid carbon extension and precision dovetail mount, locking down the sight securely in a repeatable position • Innovative Tria-Lock system encloses the scope rod holder from three sides, keeping it perfectly aligned without play to produce a rattle-free, zero-tolerance environment • The scope rod is approx. a 1/2' closer to the elevation bar than conventional target sights, significantly reducing the development of play and faults • X-Lock System offers a re-adjustable, zero-tolerance fit between the windage unit and sight frame, polyacetal resin sliders offer more contact area for a more secure fit • X-Lock sliders have additional leaf spring functionality, offering the ultimate in elevation snugness and precision • X-Lock System is field-adjustable and field replaceable with no need for factory repairs • ZPE System eliminates backlash and play in the elevation adjustments • Precise, Ultra-smooth lever locking mechanism provides quick coarse adjustments by simply pressing the lever and sliding the windage unit to the desired position.",
            "price": 355,
            "img": "images/sight-2.webp"
        },
        {
            "id": 29,
            "tag": "stands",
            "title": "W&W Bow Stand",
            "desc": "• Light weight aluminum frame that is super durable • Stable for all bows and quick to assemble • U-shaped sitting cradle holds the bow even better",
            "price": 35,
            "img": "images/stand.webp"
        },
        {
            "id": 30,
            "tag": "armguards",
            "title": "FIVICS Organic Arm Guard",
            "desc": "This is a flexible rubber arm guard that fits comfortably for any adult.",
            "price": 15,
            "img": "images/arm.webp"
        }
    ]

       return data;
           
};

module.exports = loadDefaultData;