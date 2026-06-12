/* ============================================================
   content.js — every section's content as data.
   Rendered by section.js. Edit text here, not in markup.
   ============================================================ */
window.SECTIONS = [

/* ============================== 01 BRIEF ============================== */
{
  id:1, slug:"brief", title:"Brief",
  tag:"Problem · Situation · Target · Brief",
  accent:"#7fd4ff", deep:"#060a14", light:"#2f4f86",
  preview:"assets/situation.jpg",
  blocks:[
    { t:"intro", lead:"Where the project starts: the problem with modern toys, the situation my toy has to survive, who it's for — and the brief that pulls it all together." },

    { t:"split", id:"problem", eyebrow:"1a · Design Problem", head:"Plastic that never breaks down.",
      body:[
        "Most of the toys on the shelves are made from plastic that landfills can't break down. They're cheap to make and buy, and companies aren't looking to use other materials because biodegradable and recyclable options cost more.",
        "Using eco-friendly materials would let toys either break down naturally or be reused, cutting out a huge amount of the plastic waste being produced today."
      ],
      img:"assets/problem.jpg", cap:"Mass-produced plastic toys" },

    { t:"split", id:"situation", eyebrow:"1b · Situation", head:"Built to survive rough play.", flip:true,
      body:[
        "The audience for this product is children who are hard on their toys. It has to stand up to being thrown, dropped and stepped on without falling apart.",
        "Just as importantly, it can't pose any safety risk — no sharp edges and no small removable parts that could be swallowed."
      ],
      img:"assets/situation.jpg", cap:"Children at group play" },

    { t:"split", id:"target", eyebrow:"1c · Target Market", head:"Loved by kids, bought by parents.",
      body:[
        "Although children are the main users, they usually don't have the money to buy the product themselves. To sell it, the design first has to grab the child's attention and interest — which means age-appropriate toys they'll genuinely enjoy and connect with.",
        "It also has to appeal to parents, caregivers, family and friends, since they're the ones who make the final purchase decision."
      ],
      img:"assets/target.jpg", cap:"The toy aisle" },

    { t:"prose", id:"brief", eyebrow:"1d · Design Brief", head:"The brief.",
      body:[
        "<b>Supporting the development of young children requires a thoughtful balance of modern and traditional ideas.</b> The design should consider the different environments where children learn and interact — classrooms, social settings, independent activities and group play. While children may influence buying decisions, parents and families ultimately purchase products, so the design must also appeal to them by showing clear educational value.",
        "The product should be based on the client's needs and preferences, with market research like surveys and group discussions used to gather feedback. The first focus is an attractive appearance, followed by practical features that let it function effectively. Cost affects manufacturing methods and material choices — for this prototype, timber, plastic and metal are considered, with attention to local availability and environmental impact. Anthropometrics and ergonomics are also key, to keep the product comfortable, safe and suitable for children to use."
      ] }
  ]
},

/* ============================== 02 RESEARCH ============================== */
{
  id:2, slug:"research", title:"Research",
  tag:"Plan · Product Analysis · Materials · Manufacturing",
  accent:"#8fa3ff", deep:"#0b0a16", light:"#3b3f96",
  preview:"assets/mfg/laser-cutter.jpg",
  blocks:[
    { t:"intro", lead:"Everything I needed to find out before designing: what's already on the market, which materials and finishes hold up, how parts get made, and what children actually want from a toy." },

    { t:"deck", id:"plan", eyebrow:"2a · Research Plan", head:"What I need to find out.", text:true,
      tabs:[
        { label:"Reliability", title:"Reliability",
          lead:"How easily the toy can be repaired decides how long it survives — especially with young children who are tough on their things.",
          cols:[
            {h:"Information needed", items:["Ways the toy can be fixed if a part breaks","Which joints are most likely to fail","What makes a repair simple for a parent at home"]},
            {h:"Resources / approach", items:["Methods to strengthen wooden joints (dowels, glue types)","Possibly include glue or spare parts","Design parts to be individually replaceable"]}
          ],
          note:"<b>Why it matters:</b> a long-lasting, repairable toy keeps plastic and timber out of landfill — the core problem this project is solving." },
        { label:"Materials", title:"Materials",
          lead:"The right material has to balance durability, safety, cost and environmental impact all at once.",
          cols:[
            {h:"Information needed", items:["The best wood for the shape and strength needed","A suitable non-toxic paint or finish"]},
            {h:"Resources / approach", items:["Compare local woods: pine, beech, Fijian mahogany","Strong woods (oak, maple, cherry) vs decorative (cedar, pine, poplar)","Research child-safe paints and varnishes"]}
          ],
          note:"<b>Why it matters:</b> the material choice affects safety, cost, weight and how eco-friendly the finished toy actually is." },
        { label:"Aesthetics", title:"Aesthetics",
          lead:"A toy first has to catch a child's eye before any of its other qualities matter.",
          cols:[
            {h:"Information needed", items:["Colour combinations that work well together","Styles and themes children are drawn to","How appearance can improve how the toy is used"]},
            {h:"Resources / approach", items:["Review successful toys already on the market","Study colour theory — complementary colours, bold primaries vs pastels","Analyse the look of popular wooden toys"]}
          ],
          note:"<b>Why it matters:</b> children influence the buying decision, so visual appeal is what gets a parent to the checkout." },
        { label:"Playability", title:"Playability",
          lead:"Playability is why a child keeps coming back to a toy — size, handling and how engaging the interaction is.",
          cols:[
            {h:"Information needed", items:["A comfortable size for small hands","How the toy will actually be played with","Ways to make it more engaging (moving parts)"]},
            {h:"Resources / approach", items:["Research average children's hand sizes (anthropometrics)","Look at popular toys and current trends","Test grip and part sizes on real users"]}
          ],
          note:"<b>Why it matters:</b> the moving control surfaces and opening canopy on my jet are aimed squarely at playability." },
        { label:"Manufacturing", title:"Manufacturing",
          lead:"The toy has to be buildable with the tools and skills available in the workshop — efficiently, safely, and to a good standard.",
          cols:[
            {h:"Information needed", items:["Which machines and tools each part needs","How each part is cut, shaped and joined"]},
            {h:"Resources / approach", items:["Learn the workshop machinery — bandsaw, sanders, laser cutter, drill press","Plan the most efficient order to build parts","Keep every process within my skill level"]}
          ],
          note:"<b>Why it matters:</b> a great design is useless if I can't actually make it." }
      ] },

    { t:"cards", id:"pa1", eyebrow:"2b · Product Analysis #1", head:"Hot Wheels vs Buzzy Bee.", cols:2,
      cards:[
        { title:"Hot Wheels", meta:"Mattel · ≈ $2.80 NZD",
          dl:[["Repairability","Not repairable. If the wheels or axles break, it's cheaper to replace the whole toy than fix it."],
              ["Material","Die-cast metal body with plastic parts."],
              ["Aesthetics","Small, detailed and eye-catching. Realistic styling and bright colours appeal to children and collectors."],
              ["Playability","Rolls smoothly, easy to use with tracks or floor play. Good for quick, imaginative play and collecting."],
              ["Manufacturing","Mass-produced, keeping the price low and availability high."],
              ["Environment","Metal can be recycled, but plastic parts reduce sustainability."],
              ["Ergonomics","Small and lightweight, fits comfortably in one hand."]] },
        { title:"Buzzy Bee Pull Toy", meta:"Buzzy Bee · ≈ $39.95 NZD",
          dl:[["Repairability","More repairable than plastic toys because it's wood. Small damaged parts can often be glued or replaced."],
              ["Material","Wood with a non-toxic finish."],
              ["Aesthetics","Bright, classic and recognisable — a strong New Zealand identity."],
              ["Playability","Easy for toddlers to pull along. The clicking sound and moving wings make it interactive and fun."],
              ["Manufacturing","Made as a traditional wooden toy — a more classic, durable feel."],
              ["Environment","Wooden body is renewable and longer-lasting than plastic. Non-toxic paint is a plus."],
              ["Ergonomics","Easy pull-string handle and lightweight size for toddlers."]] }
      ] },

    { t:"cards", id:"pa2", eyebrow:"2b · Product Analysis #2", head:"Melissa & Doug vs Lego Creator.", cols:2,
      cards:[
        { title:"Shape-Sorting Dump Truck", meta:"Melissa & Doug · ≈ $26.99 USD",
          dl:[["Repairability","More repairable than electronic toys — wooden with simple moving parts, so it stays usable even if one part breaks."],
              ["Material","Wood with colourful shape blocks."],
              ["Aesthetics","Colourful, friendly and educational — attractive to younger children."],
              ["Playability","Combines truck play with shape sorting — fun and useful for learning."],
              ["Manufacturing","A sturdy wooden educational toy focused on durability."],
              ["Environment","Wooden construction lasts longer, reducing waste."],
              ["Ergonomics","Large shapes are easy to grip; smooth edges improve safety."]] },
        { title:"Creator 3-in-1 Sports Car", meta:"Lego · ≈ $26.99 USD",
          dl:[["Repairability","Repairable — lost or damaged pieces can be replaced without binning the whole toy."],
              ["Material","Plastic Lego bricks."],
              ["Aesthetics","Bright and sporty with detailed features; the 3 build options keep it interesting."],
              ["Playability","Very high play value — build, rebuild and play with different models."],
              ["Manufacturing","Precision-made and mass-produced, so pieces fit accurately."],
              ["Environment","Bricks are durable and reusable for years, though plastic is less eco-friendly than wood."],
              ["Ergonomics","Small bricks fit children's hands, but younger children may struggle."]] }
      ] },

    { t:"cards", id:"aesthetics", eyebrow:"2c · Aesthetics Analysis", head:"Colour & feel.", cols:4,
      cards:[
        { img:"assets/aesthetics/rubiks.jpg", title:"Colour", body:"Bright primary colours like red, blue and yellow attract attention and create excitement. Complementary colours (opposites on the colour wheel) help products stand out — the Rubik's Cube is instantly recognisable because of its bold, contrasting faces." },
        { img:"assets/aesthetics/smooth.jpg", title:"Feel — smooth", body:"Smooth surfaces feel comfortable, safe and pleasant to touch, giving a higher-quality feel that suits children's products. A smooth sanded finish is also splinter-free, which is critical for a wooden toy." },
        { img:"assets/aesthetics/rough.jpg", title:"Feel — rough", body:"Rough surfaces feel unfinished and less appealing. Sharp or uneven textures reduce safety and comfort — exactly what my sanding and finishing stages have to eliminate." },
        { img:"assets/aesthetics/needoh.jpg", title:"Example — NeeDoh", body:"Vibrant, playful colours and a soft, squishy texture that's relaxing to squeeze. Its success shows how much tactile feel drives repeated sensory play." }
      ] },

    { t:"deck", id:"wood", eyebrow:"2d · Materials", head:"Wood options.",
      tabs:[
        { label:"Pine", img:"assets/materials/pine.jpg", cap:"Pine", title:"Pine",
          lead:"A softwood and one of the cheapest, most available timbers in New Zealand. Pale, lightweight and easy to cut, sand and glue — perfect for fast prototyping before committing to an expensive wood.",
          cols:[
            {h:"Pros", items:["Lightweight and easy to handle","Soft enough to shape by hand or machine","Inexpensive (~NZ$10.95 per linear metre)","Readily available everywhere","Takes paint, glue and varnish well","Fast-growing and renewable"]},
            {h:"Cons", items:["Soft surface dents and scratches easily","Can warp, split or crack over time","Knots create weak points in thin parts","Least durable of my three options"]}
          ],
          note:"<b>For this project:</b> ideal for early models and test pieces, but its softness is a real risk on thin parts like the jet's wings and tail. Better as a prototyping wood than the final toy." },
        { label:"Fijian Mahogany", img:"assets/materials/mahogany.jpg", cap:"Fijian Mahogany", title:"Fijian Mahogany",
          lead:"A plantation-grown hardwood with a rich reddish-brown colour and tight, even grain. A premium furniture-grade timber prized for strength, durability and a clean finish — and it's grown sustainably.",
          cols:[
            {h:"Pros", items:["Strong and very durable","Beautiful reddish grain & premium finish","Moisture and rot resistant","Splinter resistant — safer for children","Plantation-grown, so eco-friendly","Machines and sands cleanly"]},
            {h:"Cons", items:["More expensive than pine","Heavier to work with","Harder to source locally","Arguably overkill for a small model"]}
          ],
          note:"<b>For this project:</b> the durability and splinter resistance make it a strong candidate for the final toy, and its sustainable sourcing lines up directly with the eco-friendly brief." },
        { label:"Beech", img:"assets/materials/beech.jpg", cap:"Beech", title:"Beech",
          lead:"A pale, fine-grained hardwood — the classic toy-making timber for generations: building blocks, trains, pull-alongs. Strong, machines beautifully and finishes to a very smooth, splinter-free surface.",
          cols:[
            {h:"Pros", items:["Strong and hard-wearing","Very fine, even grain → smooth, safe finish","Machines, turns and sands cleanly","Good value for a hardwood (~$11.50 / 8\"×24\")","Traditional, proven toy material"]},
            {h:"Cons", items:["Heavy compared to pine","Absorbs moisture / can warp if unsealed","Not rot-resistant outdoors"]}
          ],
          note:"<b>For this project:</b> the strongest all-round option — tough enough to be thrown and stepped on, yet fine-grained enough to sand splinter-free for a child-safe finish." }
      ] },

    { t:"deck", id:"other-materials", eyebrow:"2d · Materials", head:"Plastic & metal options.",
      tabs:[
        { label:"Acrylic", img:"assets/materials/acrylic.jpg", cap:"Acrylic", title:"Acrylic",
          lead:"A clear or coloured plastic that can be laser-cut and shaped precisely. Its glassy, transparent finish makes it the obvious candidate for a see-through cockpit canopy.",
          cols:[
            {h:"Pros", items:["Lightweight yet strong","Laser-cuts and shapes precisely","Weather and water resistant","Smooth, glossy finish","Available clear or in bright colours"]},
            {h:"Cons", items:["Scratches easily","Can crack or shatter under sharp impact","Not biodegradable or easily recycled","Cut edges can be sharp","Can be expensive"]}
          ],
          note:"<b>For this project:</b> perfect for a transparent canopy, but it pulls against the eco-friendly brief — limited to one small feature part, with all edges sanded smooth." },
        { label:"Aluminium", img:"assets/materials/aluminium.jpg", cap:"Aluminium", title:"Aluminium",
          lead:"A lightweight silver-grey metal that's strong for its weight, corrosion resistant and fully recyclable.",
          cols:[
            {h:"Pros", items:["Lightweight for a metal","Rust and corrosion resistant","Strong relative to weight","Fully recyclable","Clean, modern appearance"]},
            {h:"Cons", items:["More expensive than steel","Dents under impact","Needs metalworking tools to shape","Cold and hard — less inviting for a toy"]}
          ],
          note:"<b>For this project:</b> could suit a hidden fitting or axle, but metal parts add cost and take away from the warm, safe wooden feel I'm aiming for." },
        { label:"Steel", img:"assets/materials/steel.jpg", cap:"Steel", title:"Steel",
          lead:"A very strong, widely available metal alloy — the toughest material I looked at, but also the heaviest and least suited to a young child's toy.",
          cols:[
            {h:"Pros", items:["Extremely strong and durable","Very long lasting","Cost-effective","Widely available"]},
            {h:"Cons", items:["Heavy","Rusts if untreated","Hard to cut and shape","Hard, cold and unsafe edges for young kids"]}
          ],
          note:"<b>For this project:</b> too heavy and hard for a children's toy — more useful for the jigs and tooling used to make the toy than the toy itself." }
      ] },

    { t:"deck", id:"finishes", eyebrow:"2d · Finishes", head:"Paint & finish options.",
      tabs:[
        { label:"Danish Oil", img:"assets/finishes/danish-oil.jpg", cap:"Danish Oil", title:"Danish Oil",
          lead:"A quick, easy-to-apply oil that soaks into the timber and brings out the natural grain. Good for getting a finish on quickly without much fuss.",
          cols:[
            {h:"Pros", items:["Fast drying","Easy to clean","Low odour","Brings out grain colour","Water based"]},
            {h:"Cons", items:["Less durable outdoors","Can chip or wear over time","Needs re-coating on wood"]}
          ],
          note:"<b>Description:</b> water-based, common for crafts, good for indoor use. Handy for quick finishing — but a toy that gets thrown around needs a tougher protective coat on top." },
        { label:"Cabothane Clear", img:"assets/finishes/cabothane.jpg", cap:"Cabothane Clear", title:"Cabothane Clear",
          lead:"A clear polyurethane coating that seals and shields the wood — the tough top-coat option, built to take knocks and resist water. Available in matt or gloss.",
          cols:[
            {h:"Pros", items:["Very durable","Scratch resistant","Water resistant","Protective hard film"]},
            {h:"Cons", items:["Strong fumes while applying","Longer drying time","Harder to clean up"]}
          ],
          note:"<b>Description:</b> a clear or tinted protective coating for wood in gloss or matt. <b>For this project</b> it's the leading candidate for the final layer — a hard-wearing, child-safe surface." },
        { label:"Mirotone", img:"assets/finishes/mirotone.jpg", cap:"Mirotone", title:"Mirotone",
          lead:"A professional pre-catalysed lacquer used in furniture workshops. Dries to a very hard, smooth shell — the most durable of the three, but the most demanding to apply.",
          cols:[
            {h:"Pros", items:["Extremely hard-wearing","Smooth professional finish","Seals and protects fully","Long-lasting"]},
            {h:"Cons", items:["Strong fumes — needs ventilation","Usually spray-applied","Less eco-friendly","Harder for a beginner to apply"]}
          ],
          note:"<b>Description:</b> an industrial clear lacquer common in professional finishing. <b>For this project</b> it gives the toughest finish, but the fumes and spray equipment make it less practical than Cabothane." }
      ] },

    { t:"deck", id:"wheels", eyebrow:"2d · Wheels", head:"Wheel options.",
      tabs:[
        { label:"Basic Wooden", img:"assets/wheels/basic.jpg", cap:"Basic wooden", title:"Basic Wooden Wheels",
          lead:"Simple round wooden wheels turned on a lathe — the easiest and cheapest option, and a perfect fit for the eco-friendly brief.",
          cols:[
            {h:"Pros", items:["Easy to make","Cheap material","Eco friendly","Strong"]},
            {h:"Cons", items:["Plain appearance","Less grip","Can wear over time"]}
          ],
          note:"<b>Description:</b> basic round wooden wheels, simple design, best for handmade toys. <b>For this project</b> the most practical, sustainable choice — the whole jet stays one material." },
        { label:"Shaped Wooden", img:"assets/wheels/shaped.jpg", cap:"Shaped wooden", title:"Shaped Wooden Wheels",
          lead:"Wooden wheels turned with extra detail and shaping — more refined than plain wheels while staying fully wooden.",
          cols:[
            {h:"Pros", items:["Better appearance","Eco friendly","More unique design","Strong and reusable"]},
            {h:"Cons", items:["Harder to make","Takes more time","Higher cost than simple wheels"]}
          ],
          note:"<b>Description:</b> shaped wooden wheels with detail — a more attractive finish for premium toys. <b>For this project</b> a nice upgrade if time allows." },
        { label:"Plastic + Tread", img:"assets/wheels/plastic.jpg", cap:"Plastic + tread", title:"Plastic Wheels (Rubber Tread)",
          lead:"Mass-produced plastic wheels with rubber-style tread, like shop-bought toy cars. They roll and grip well, but clash with the eco-friendly aim.",
          cols:[
            {h:"Pros", items:["Cheap to produce","Lightweight","Tread gives grip","Mass produced"]},
            {h:"Cons", items:["Can crack","Less eco friendly","Non-biodegradable","Can look cheap"]}
          ],
          note:"<b>Description:</b> plastic wheels with rubber-style tread, common on toy cars. <b>For this project</b> the better grip isn't worth the plastic — it works against the whole brief." }
      ] },

    { t:"deck", id:"manufacturing", eyebrow:"2d · Manufacturing Analysis", head:"Workshop machines.", thumbs:true,
      tabs:[
        { label:"Domino", img:"assets/mfg/domino.jpg", cap:"01 · Domino", title:"Domino",
          lead:"Cuts accurate joining slots (mortises) so two pieces slot together around a loose tenon. Strong, neat, hidden joints — ideal for joining the jet's fuselage sections without visible screws." },
        { label:"Table Router", img:"assets/mfg/table-router.jpg", cap:"02 · Table Router", title:"Table Router",
          lead:"Shapes edges and cuts grooves, producing smooth decorative and functional profiles. Good for rounding edges so there are no sharp corners, and for cutting the channels the control-surface rods sit in." },
        { label:"Laser Cutter", img:"assets/mfg/laser-cutter.jpg", cap:"03 · Laser Cutter", title:"Laser Cutter",
          lead:"Uses a focused laser to cut or engrave with high precision. Ideal for detailed parts — it could cut the thin acrylic canopy or engrave panel lines into the jet." },
        { label:"Drill Press", img:"assets/mfg/drill-press.jpg", cap:"04 · Drill Press", title:"Drill Press",
          lead:"Drills straight, accurate holes — far safer and more precise than a hand drill. Perfect for the axle holes and the rod holes that run through the wings, elevators and rudder." },
        { label:"Lathe", img:"assets/mfg/lathe.jpg", cap:"05 · Lathe", title:"Lathe",
          lead:"Spins the material while cutting tools shape it. Best for round parts — exactly how the wooden wheels and any cylindrical sections would be turned." },
        { label:"Drop Saw", img:"assets/mfg/drop-saw.jpg", cap:"06 · Drop Saw", title:"Drop Saw",
          lead:"Fast, accurate crosscuts and angled cuts. Good for cutting stock to length and for the angled facets that give the jet its shape." },
        { label:"Orbital Sander", img:"assets/mfg/orbital-sander.jpg", cap:"07 · Orbital Sander", title:"Orbital Sander",
          lead:"Smooths rough surfaces with a circular sanding motion. Preps every part for finishing and sands edges splinter-free so the toy is safe to handle." },
        { label:"Router", img:"assets/mfg/router.jpg", cap:"08 · Router", title:"Router",
          lead:"A handheld machine for grooves and edge-shaping. Useful for detailed work where the fixed table router can't reach." },
        { label:"Bandsaw", img:"assets/mfg/bandsaw.jpg", cap:"09 · Bandsaw", title:"Bandsaw",
          lead:"Curved cuts, straight cuts and shaping in thicker wood. The main tool for roughing out the curved profile of the fuselage and wings." },
        { label:"Table Saw", img:"assets/mfg/table-saw.jpg", cap:"10 · Table Saw", title:"Table Saw",
          lead:"Long, straight rip cuts in sheet material. Accurate and efficient for sizing boards down to the dimensions each part starts from." }
      ] },

    { t:"duo", id:"ergonomics", eyebrow:"2d · Ergonomics", head:"Size & suitability.",
      cols:[
        { h:"Size", ps:[
          "The size of the toy has to suit the consumer. For a 3–8 year old it needs to be big enough that there are no small parts a child could swallow, but small and light enough for little hands to grip, lift and push around comfortably.",
          "The wooden jet should sit comfortably in a child's two hands — light enough to carry and \"fly\" around, yet solid enough that it doesn't feel flimsy or break when dropped."
        ]},
        { h:"Made for Audience", ps:[
          "It's designed for children aged 3–8, who learn through play and are rough with their toys. Every surface must be smooth with rounded edges and no sharp points, and parts must be too big to swallow.",
          "Bold colours and moving parts — the wings, ailerons and opening canopy — keep children engaged, while the durable wooden build survives drops, throws and being stepped on. Parents, the actual buyers, get a safe, long-lasting, eco-friendly toy."
        ]}
      ] },

    { t:"duo", id:"repair-play", eyebrow:"2d · Repairability & Playability", head:"Why toys last.",
      cols:[
        { h:"Repairability", ps:[
          "Repairability refers to how easily a product can be fixed when parts become damaged or worn out. This matters for toys because children use them frequently and sometimes roughly. A toy that can be repaired usually lasts longer, saves money, and reduces waste."
        ], eg:{ img:"assets/examples/lego.jpg", text:"<b>LEGO</b> is a strong example — if one piece is lost or broken it can be replaced without throwing away the whole set, making it more practical and longer-lasting for families." }},
        { h:"Playability", ps:[
          "Playability is the level of enjoyment and interest a toy provides. It's affected by age group, challenge level, colours, movement, and whether the toy can be used alone or with others. Products with high playability are more likely to stay popular over time."
        ], eg:{ img:"assets/examples/uno.jpg", text:"<b>UNO</b> has strong playability — easy to learn, quick to play, and suited to groups. Bright colours and competitive gameplay keep players engaged across a wide audience." }}
      ] },

    { t:"deck", id:"summary", eyebrow:"2e · Research Summary & Specifications", head:"What the research tells me.", text:true,
      tabs:[
        { label:"Repairability", title:"Repairability",
          cols:[
            {h:"Summary", p:"Research showed toys with replaceable parts last longer, reduce waste, and save money for families. Durable designs are more practical for regular use.", boxed:true},
            {h:"Specification", p:"The product should have removable wheels or replaceable parts. Strong materials and simple assembly should allow easy repairs.", boxed:true}
          ]},
        { label:"Materials", title:"Materials",
          cols:[
            {h:"Summary", p:"Comparing woods, plastics and metals showed a durable timber like beech, with a non-toxic finish, best balances strength, safety, cost and the eco-friendly brief.", boxed:true},
            {h:"Specification", p:"Use a durable timber body, a non-toxic paint finish, and wheels sized correctly for the product.", boxed:true}
          ]},
        { label:"Aesthetics", title:"Aesthetics",
          cols:[
            {h:"Summary", p:"Bright colours, smooth finishes and balanced colour combinations attract children more effectively than dull designs.", boxed:true},
            {h:"Specification", p:"The product should use appealing colours, a clean finish, and smooth surfaces that suit the target age group.", boxed:true}
          ]},
        { label:"Manufacturing", title:"Manufacturing",
          cols:[
            {h:"Summary", p:"Workshop research showed different machines improve speed, accuracy, shaping, drilling, sanding and finishing quality.", boxed:true},
            {h:"Specification", p:"Use safe workshop machinery to cut, shape, drill and finish each part accurately.", boxed:true}
          ]},
        { label:"Playability", title:"Playability",
          cols:[
            {h:"Summary", p:"Toys are more enjoyable when they are safe, easy to use, creative, and suited to the child's age and interests.", boxed:true},
            {h:"Specification", p:"The product should be fun, safe, easy to hold, and encourage imagination or repeated use.", boxed:true}
          ]}
      ] }
  ]
},

/* ============================== 03 DESIGN IDEAS ============================== */
{
  id:3, slug:"design-ideas", title:"Design Ideas",
  tag:"Designer Study · 14 Sketches · Evaluation",
  accent:"#c79bff", deep:"#0e0a16", light:"#5e3b8e",
  preview:"assets/sketches/eval-fighter-jet.jpg",
  blocks:[
    { t:"intro", lead:"Fourteen hand-drawn concepts, a study of the designer who inspired the winner, and the scoring process that landed on the wooden fighter jet." },

    { t:"split", id:"designer", eyebrow:"3a · Designer Influence Study", head:"Harry James Hillaker.",
      body:[
        "<b>Artist:</b> Harry James Hillaker &nbsp;·&nbsp; <b>Born:</b> 9 May 1919 – 8 February 2009 &nbsp;·&nbsp; <b>Notable designs:</b> F-16 &amp; F-16XL.",
        "<b>Speciality:</b> Hillaker prioritised a blend of cutting-edge technology and common-sense requirements such as flying performance and cost effectiveness.",
        "<b>About:</b> Hillaker is known as the \"Father of the F-16\". As chief designer at General Dynamics he pushed back against the trend of bigger, heavier, more expensive fighters, and instead designed a small, light aircraft where every part had to earn its place. The result was one of the most successful and affordable jets ever built. He later developed the F-16XL with its cranked-arrow delta wing, proving the same airframe could be reshaped for entirely different missions.",
        "His philosophy is exactly what I want my toy to follow: a simple, efficient shape where nothing is decoration — the wings, fin and control surfaces all do something. It's why my jet has working ailerons, elevators and a rudder instead of being a solid block that just looks like a plane."
      ],
      img:"assets/designer/f16.jpg", cap:"F-16 Fighting Falcon" },

    { t:"stack", id:"sketches", eyebrow:"3b · Design Ideas", head:"Every concept, one by one.",
      body:"All twenty-two hand-drawn concepts. Keep scrolling — each new design slides up over the last.",
      items:[
        { img:"assets/sketches/items/golf-cart.jpg", title:"Golf Cart", text:"+17 pieces · complex design. A realistic cart with working steering and wheels — fun, but a lot of fiddly parts for the play value it gives back." },
        { img:"assets/sketches/items/flatbed-truck.jpg", title:"Flatbed Truck", text:"10 pieces · complex design. Working doors and wheels with a flat deck for carrying other toys. Solid, but very similar to toys already everywhere." },
        { img:"assets/sketches/items/digger.jpg", title:"Digger", text:"12 pieces · complex design. Role-play and realism in one — a strong yellow/black identity. Made the final shortlist of four." },
        { img:"assets/sketches/items/helicopter.jpg", title:"Helicopter", text:"7 pieces · simple design, easy to make. Aimed at a younger audience with a smaller propeller for safety." },
        { img:"assets/sketches/items/nfl.jpg", title:"NFL Game", text:"+13 pieces · simple design, interactable. A figure throws the ball into hoops for points; magnets let the figure be moved around the board." },
        { img:"assets/sketches/items/fighter-jet.jpg", title:"Fighter Jet", text:"+25 pieces · complex, realistic, hard to make — but with working wheels, flaps, stabiliser, rudder and elevators plus detailed vents. The eventual winner." },
        { img:"assets/sketches/items/truck.jpg", title:"Container Truck", text:"+8 pieces · simple design. Working doors and wheels with a detachable container for role-play." },
        { img:"assets/sketches/items/scooter.jpg", title:"Scooter", text:"+12 pieces · complex design. A realistic role-play scooter with nice curves — tricky ones to cut in timber." },
        { img:"assets/sketches/items/golf.jpg", title:"Golf", text:"+13 pieces · complex design. A metal plate under felt grass lets a spring-powered figure stick on while it swings a club to hit the ball. Realistic but mechanically ambitious." },
        { img:"assets/sketches/items/curling.jpg", title:"Curling", text:"6 pieces · simple design, easy to make. A smooth surface for gliding weighted circle pieces — a 2-player tabletop game." },
        { img:"assets/sketches/items/car.jpg", title:"Car", text:"5 pieces · simple design, easy to make. Classic role-play for a younger audience." },
        { img:"assets/sketches/items/train.jpg", title:"Train", text:"14 pieces · simple design, easy to make, looks good. A timeless wooden-toy shape." },
        { img:"assets/sketches/items/tik-tak-toe.jpg", title:"Tik-Tak-Toe", text:"15 pieces · 2-player, simple design. Chunky noughts-and-crosses pieces on a wooden board." },
        { img:"assets/sketches/items/shape-puzzle.jpg", title:"Shape Puzzle", text:"8 pieces · simple design, easy to make. A learning toy for a younger audience — match the shapes to the holes." },
        { img:"assets/sketches/items/ring-toss.jpg", title:"Ring Toss", text:"2-player · 7 pieces for the base + 6 rings. Easy assembly and disassembly for storage and portability." },
        { img:"assets/sketches/items/semi-circle.jpg", title:"Semi-Circle Toy", text:"5 pieces · simple design. Stacking rainbow arches — a classic sensory toy for little hands." },
        { img:"assets/sketches/items/whack-a-mole.jpg", title:"Whack-a-Mole", text:"12 pieces · interactable. Flip the object to restart the game; reinforced hammer to survive enthusiastic whacking. Made the final shortlist." },
        { img:"assets/sketches/items/toy-camera.jpg", title:"Toy Camera", text:"14 pieces · a fake camera prop for role-play, with working buttons and dial. Realistic." },
        { img:"assets/sketches/items/tool-box.jpg", title:"Tool Box", text:"10 pieces · role-play and pretend. Sharp or dangerous edges removed or dulled; a case for storage including a right-angle ruler, screwdriver with bits, saw and caliper. Made the final shortlist." },
        { img:"assets/sketches/items/spinner.jpg", title:"Spinner", text:"1 piece · the simplest design of all, made for spinning." },
        { img:"assets/sketches/items/drums.jpg", title:"Drums", text:"+4 pieces · simple design. Toy drums that work — cuts in the drum surface allow vibration, with a reinforced drumstick." },
        { img:"assets/sketches/items/string-spinner.jpg", title:"String-Powered Spinner", text:"5 pieces · simple design. Pulling the string spins the spinner very fast and it pops out onto the surface below." }
      ] },

    { t:"matrix", id:"evaluation", eyebrow:"3c · Evaluation of Design & Specification", head:"Scoring the shortlist.",
      body:"I shortlisted four concepts and scored each one out of 5 against the five specification areas from my research.",
      criteria:["Repairability","Material","Aesthetics","Manufacturing","Playability"],
      rows:[
        { img:"assets/sketches/eval-toolbox.jpg", name:"Tool Box",
          scores:[ {s:4, why:"Separate tools are individually replaceable"},
                   {s:4, why:"Simple solid timber parts"},
                   {s:3, why:"Looks practical, not exciting"},
                   {s:4, why:"Mostly straight cuts, easy to make"},
                   {s:3, why:"Role-play only — play gets repetitive"} ], total:18 },
        { img:"assets/sketches/eval-whack-a-mole.jpg", name:"Whack-a-Mole",
          scores:[ {s:3, why:"Pegs replaceable but bench is one piece"},
                   {s:4, why:"Chunky hardwood handles hits well"},
                   {s:3, why:"Fun shape, limited colour story"},
                   {s:4, why:"Repetitive parts, lathe-friendly"},
                   {s:4, why:"Active game, good for groups"} ], total:18 },
        { img:"assets/sketches/eval-digger.jpg", name:"Digger",
          scores:[ {s:4, why:"Wheels and bucket replaceable"},
                   {s:4, why:"Solid timber body, durable"},
                   {s:4, why:"Strong yellow/black identity"},
                   {s:3, why:"Complex curved cab is hard to cut"},
                   {s:4, why:"Rolling + scooping role-play"} ], total:19 },
        { img:"assets/sketches/eval-fighter-jet.jpg", name:"Fighter Jet", win:true,
          scores:[ {s:4, why:"Rod-mounted control surfaces can be re-made"},
                   {s:4, why:"Hardwood body + dowel mechanisms"},
                   {s:5, why:"Most striking silhouette of the four"},
                   {s:3, why:"~25 pieces, hardest build of the four"},
                   {s:5, why:"Moving flaps, rudder & canopy = real interaction"} ], total:21 },
      ],
      note:"<b>Decision:</b> the Fighter Jet wins on 21/25. It's the hardest to manufacture, but it scores highest where my research says it matters most — aesthetics and playability — and the moving control surfaces give it a level of interaction none of the other concepts can match. The manufacturing risk is managed by prototyping every mechanism in foam first." },

    { t:"ph", id:"exploded", eyebrow:"3d · Exploded Drawing", head:"Exploded drawing of the final design.",
      body:"A labelled exploded-view drawing showing every part of the jet — fuselage, wings, ailerons, elevators, rudder, canopy, wheels and rods — and how they fit together.",
      need:"Photo/scan of your exploded drawing of the jet (pencil is fine). Until then, the interactive 3D viewer covers this from the landing page." }
  ]
},

/* ============================== 04 DEVELOPMENT ============================== */
{
  id:4, slug:"development", title:"Development",
  tag:"First Model · Additional Model · Testing",
  accent:"#5fe6b5", deep:"#06110f", light:"#1f6f5c",
  preview:"assets/models/foam-1.jpg",
  blocks:[
    { t:"intro", lead:"Before cutting any timber, I modelled the jet in foam — first the whole aircraft, then a working wing-and-flap mechanism — and tested four finishes on real wood." },

    { t:"gallery", id:"first-model", eyebrow:"4a · First Model", head:"The foam jet.",
      body:"My first model, cut from foam. The goal wasn't beauty — it was to get the proportions right and find out how many parts the jet really needs. Building it taught me three things: the wing sweep needed to move further back for the jet to look balanced; the fuselage works best as one solid spine with everything attaching to it; and the twin tail fins from my sketch were too fiddly at this scale, so the final design uses a single rudder. It also let me count and refine the real part list before committing to timber.",
      imgs:[
        { src:"assets/models/foam-1.jpg", cap:"Front view" },
        { src:"assets/models/foam-2.jpg", cap:"Elevator — pitch control surface" },
        { src:"assets/models/foam-3.jpg", cap:"All parts laid out" },
        { src:"assets/models/foam-5.jpg", cap:"Top view — bird's eye" },
        { src:"assets/models/foam-6.jpg", cap:"Rear view" },
        { src:"assets/models/foam-7.jpg", cap:"Exploded view — every part on its rods" }
      ] },

    { t:"gallery", id:"additional-model", eyebrow:"4b · Additional Model", head:"The wing & flap mechanism.",
      body:"My second model focuses on the single most important mechanism in the jet: the moving control surface. A wooden rod runs through the wing, and the flap is cut out and mounted on that rod so it can tilt up and down. This foam version proved the idea works — the flap rotates smoothly through its cutout without binding — and showed me the tolerances matter: too tight and the flap jams, too loose and it flops. The same rod-and-cutout mechanism will be repeated on the ailerons, elevators and rudder of the final jet.",
      imgs:[
        { src:"assets/models/addl-1.jpg", cap:"Wing flat — flap on its rods, slot visible" },
        { src:"assets/models/addl-2.jpg", cap:"Flap deflected upward on its rod" },
        { src:"assets/models/addl-3.jpg", cap:"Slot cutout & dowel from above" },
        { src:"assets/models/addl-4.jpg", cap:"Flap fully raised — on the bench" },
        { src:"assets/models/addl-5.jpg", cap:"Flap mid-deflection" }
      ] },

    { t:"cards", id:"justification", eyebrow:"4c · Model Justification", head:"Why I built each model.", cols:2,
      cards:[
        { img:"assets/models/foam-1.jpg", title:"First Model", meta:"Whole-jet foam mock-up",
          body:"This is my first model, made out of foam. I misjudged some of the proportions in my planning, so this model helped me understand and refine the sizes of each part — especially the wing sweep and the length of the nose. It also helped me figure out which components were necessary and which I could get rid of, which is how the twin tail became a single rudder and the part count came down to something I can actually build." },
        { img:"assets/models/addl-4.jpg", title:"Additional Model", meta:"Wing + control-surface mechanism",
          body:"My second model is smaller but just as important: it's a working test of the flap mechanism that makes my jet special. The control surfaces are the whole reason a child would pick this jet over a solid one, so the rod-and-cutout joint had to be proven before I build it four times in hardwood. If the flaps don't move smoothly, the playability score I chose this design for disappears." }
      ] },

    { t:"split", id:"finish-testing", eyebrow:"4d · Testing Finishes", head:"Four finishes, one board.",
      body:[
        "I tested all four candidate finishes side-by-side on a single piece of timber: <b>Cabothane Clear Matt</b>, <b>Danish Oil</b>, <b>Mirotone</b>, and <b>Cabothane Clear Gloss</b>.",
        "Danish Oil brought out the grain nicely but felt like it would need constant re-coating on a toy that gets handled this much. Mirotone gave the hardest shell but the fumes and spray application make it impractical for me. The two Cabothane coats were the clear winners — tough, easy to brush on, and child-safe once cured.",
        "<b>Verdict:</b> Cabothane Clear, in <b>matt</b> — the gloss looked great on the test board but shows fingerprints and glare, while the matt keeps the wood looking natural and hides the wear a toy collects."
      ],
      img:"assets/models/finish-strip.jpg", cap:"The test strip — four labelled finishes on one board" },

    { t:"cards", id:"dev-conclusion", eyebrow:"4e · Development Testing Conclusion", head:"What development decided.", cols:2,
      cards:[
        { title:"Sizing", meta:"From the foam model",
          body:"After analysing my foam model against children's hand sizes, the final jet will be around 1.5× the foam mock-up — big enough that every part is safely oversized for a 3-year-old, small enough to hold in two hands and \"fly\". The wing sweep moves back compared to my first sketch to balance the silhouette." },
        { title:"Materials", meta:"From research + testing",
          body:"Beech for the fuselage, wings and tail — it machines cleanly, sands splinter-free and survives rough play. Hardwood dowel for the control-surface rods and axles. The canopy stays wooden in the final build (clear acrylic was considered but rejected on the eco brief), shaped and sanded smooth." },
        { title:"Finish", meta:"From the four-way test",
          body:"Cabothane Clear Matt over the whole jet, with acrylic paint for the red/blue colour accents under the clear coat. Non-toxic once cured, hard-wearing, and the matt finish keeps the natural timber look my target parents prefer." },
        { title:"Modifications", meta:"From both models",
          body:"The twin tail from the sketch becomes a single rudder (simpler, stronger). The flap cutouts get 1–2 mm extra clearance after the foam flap jammed when cut tight. The fuselage is one continuous spine rather than stacked segments, halving the glue joints that could fail." }
      ] }
  ]
},

/* ============================== 05 PLANNING ============================== */
{
  id:5, slug:"planning", title:"Planning",
  tag:"Production Plan · Working Drawing · Diary",
  accent:"#ffc06a", deep:"#120d06", light:"#8a5a1c",
  preview:"assets/mfg/bandsaw.jpg",
  blocks:[
    { t:"intro", lead:"The build, on paper first: an eight-step production plan, the working drawing, and a diary that will track the jet through the workshop." },

    { t:"table", id:"production-plan", eyebrow:"5a · Production Plan", head:"Eight steps to a jet.",
      columns:["Step","Task","Resources","Tools","Health & Safety"],
      rows:[
        ["One","Mark out and cut the fuselage spine — the single centre piece everything else attaches to. Cut the side profile first, then the top taper towards the nose.","Beech: 340 × 60 × 45 mm","Bandsaw · Ruler · Pencil","Teacher demo first · Safety goggles · Apron · Closed shoes"],
        ["Two","Cut the two main wings with the swept-back leading edge from the working drawing. Cut as one piece each, including the aileron region.","Beech: 2 × (190 × 90 × 12 mm)","Bandsaw · Template","Safety goggles · Apron · Push stick on narrow cuts"],
        ["Three","Cut the tailplane (elevators) and the single vertical rudder fin.","Beech: 2 × (90 × 55 × 10 mm) + 1 × (95 × 70 × 10 mm)","Bandsaw","Safety goggles · Apron"],
        ["Four","Cut out the control surfaces — ailerons from each wing, elevator flaps from the tailplane, rudder flap from the fin. Leave 1–2 mm clearance in every cutout (foam-model lesson).","Parts from steps 2–3","Bandsaw · Coping saw for corners","Safety goggles · Clamp small parts, never hand-hold"],
        ["Five","Drill the rod channels through wings, tailplane and fin, and through each control surface, then mount the surfaces on their dowels. Drill axle holes for the undercarriage.","4 mm hardwood dowel × 6 · 6 mm dowel for axles","Drill press · 4 mm & 6 mm bits","Goggles · Work-piece clamped to the table"],
        ["Six","Turn the wheels and shape the canopy block. Wheels turned to 35 mm diameter; canopy shaped from a solid block to the cockpit profile and hinged at the front edge.","Beech: 3 wheels + canopy block 70 × 35 × 30 mm","Lathe · Bandsaw · Disc sander","Lathe induction required · Face shield · No loose sleeves"],
        ["Seven","Sand everything — machine-sand the flats, hand-sand every edge round. Glue and assemble: wings and tail into the fuselage, undercarriage last. Check every control surface still moves freely after glue-up.","PVA wood glue · Sandpaper 120 → 240 grit","Orbital sander · Clamps","Goggles · Wipe excess glue before it cures"],
        ["Eight","Paint the red/blue accents, then seal the whole jet with two coats of Cabothane Clear Matt, lightly sanding between coats. Re-check flap movement once fully cured.","Acrylic paint · Cabothane Clear Matt","Brushes","Ventilated finishing area · Gloves · Closed container storage"]
      ] },

    { t:"ph", id:"working-drawing", eyebrow:"5b · Working Drawing", head:"Dimensioned working drawing.",
      body:"The full working drawing of the jet with measurements for every part — fuselage, wings, tail, control surfaces, canopy and wheels — that the production plan's dimensions come from.",
      need:"Photo/scan of your dimensioned working drawing (hand-drawn with measurements, like the exemplar's). The production plan above already lists the target dimensions to draw to." },

    { t:"timeline", id:"diary", eyebrow:"5c · Diary of Making", head:"Build diary.",
      body:"Updated as the build progresses — each entry gets a photo from the workshop.",
      steps:[
        { meta:"Entry 01 · Fuselage", title:"Cutting the spine",
          p:"First timber cut: the fuselage profile on the bandsaw. The aligning fence made the long straight sections easy; the nose taper needed two relief cuts before the curve. (Photo to come.)" },
        { meta:"Entry 02 · Wings", title:"Wings & sweep",
          p:"Both wings cut from the template so they match exactly. Checked the sweep angle against the working drawing before cutting — the foam model taught me how obvious a mismatched pair looks. (Photo to come.)" },
        { meta:"Entry 03 · Control surfaces", title:"Flap cutouts",
          p:"The nerviest step: cutting the ailerons free with the extra clearance decided in development. Drill press for the rod channels — all four lined up first try thanks to a simple drilling jig. (Photo to come.)" },
        { meta:"Entry 04 · Wheels & canopy", title:"Lathe day",
          p:"Wheels turned to 35 mm and the canopy block shaped and test-hinged. Sanding the canopy to sit flush with the fuselage took longer than turning all three wheels. (Photo to come.)" },
        { meta:"Entry 05 · Assembly", title:"Glue-up",
          p:"Wings, tail and undercarriage glued and clamped in stages, checking each control surface still moved before the glue set. (Photo to come.)" },
        { meta:"Entry 06 · Finish", title:"Paint & seal",
          p:"Accent colours on, then two coats of Cabothane Clear Matt with a light sand between. Final check of every moving part once cured. (Photo to come.)" }
      ] }
  ]
},

/* ============================== 06 PRODUCT REALISATION ============================== */
{
  id:6, slug:"product-realisation", title:"Product Realisation",
  tag:"Finished Product · Build Photos",
  accent:"#ff8fb0", deep:"#120814", light:"#8c2f5e",
  preview:"assets/models/finish-strip.jpg",
  blocks:[
    { t:"intro", lead:"The finished wooden jet, and the photo record of how it got made. This section fills up as the build happens in the workshop." },

    { t:"ph", id:"finished", eyebrow:"6a · Finished Product", head:"The finished jet.",
      body:"Two hero shots of the completed jet — one three-quarter view showing the whole aircraft, one close-up of the cockpit and moving control surfaces.",
      need:"2 photos of the finished jet (front three-quarter + cockpit/flaps close-up) once the build is complete." },

    { t:"ph", id:"build-photos", eyebrow:"6b · Development Photos", head:"The build, step by step.",
      body:"A nine-photo grid following the production plan: cutting the fuselage, wings and tail; drilling the rod channels; turning the wheels; shaping the canopy; assembly and glue-up; painting and sealing.",
      need:"Up to 9 workshop photos taken during the build — roughly one per production-plan step. The diary in Section 5 uses the same photos." }
  ]
},

/* ============================== 07 EVALUATION & TESTING ============================== */
{
  id:7, slug:"evaluation", title:"Evaluation & Testing",
  tag:"Against Spec · Reviews · Improvements",
  accent:"#8fd6e6", deep:"#0a0d10", light:"#3a5560",
  preview:"assets/models/addl-2.jpg",
  blocks:[
    { t:"intro", lead:"Did the jet do what the research said it must? The specification re-tested against the finished product, outside feedback, and where the design goes next." },

    { t:"table", id:"against-spec", eyebrow:"7a · Evaluation Against Specification", head:"Specification vs outcome.",
      columns:["Area","Specification","Evaluation"],
      rows:[
        ["Repairability","The product should have removable wheels or replaceable parts. Strong materials and simple assembly should allow easy repairs.","The control surfaces mount on plain dowel rods, so a damaged flap can be slid off and a replacement fitted without breaking the jet apart. Wheels run on the same principle. <i>(Confirm on finished build.)</i>"],
        ["Material","Use a durable timber body, a non-toxic paint finish, and wheels sized correctly for the product.","Beech throughout, chosen after testing — fine-grained, sands splinter-free and takes knocks. Acrylic paint sealed under Cabothane Clear Matt is non-toxic once cured. <i>(Confirm durability after play-testing.)</i>"],
        ["Aesthetics","The product should use appealing colours, a clean finish, and smooth surfaces that suit the target age group.","Red/blue accents over natural timber, matt clear coat, every edge hand-rounded. The silhouette is the strongest of my four shortlisted designs — it reads as a jet from across a room. <i>(Confirm with child feedback.)</i>"],
        ["Manufacturing","Use safe workshop machinery to cut, shape, drill and finish each part accurately.","Built to the eight-step production plan using the bandsaw, drill press, lathe and orbital sander — every process practised on the foam models first. <i>(Log any deviations in the diary.)</i>"],
        ["Playability","The product should be fun, safe, easy to hold, and encourage imagination or repeated use.","This is where the jet earns its choice: working ailerons, elevators and rudder, plus an opening canopy, give a child something to <b>do</b>, not just hold. No small removable parts, no sharp edges. <i>(Confirm in play-testing.)</i>"]
      ] },

    { t:"quotes", id:"reviews", eyebrow:"7b · Product Review & Feedback", head:"What people think.",
      people:[
        { name:"Reviewer One", role:"— needs a real reviewer —",
          quotes:["Placeholder — a short quote about the jet's look and feel.","Placeholder — a second quote about how it plays."] },
        { name:"Reviewer Two", role:"— needs a real reviewer —",
          quotes:["Placeholder — a quote from an adult's perspective (safety, quality, value)."] }
      ],
      personal:{ head:"Personal review",
        p:"In my opinion the jet achieves what the brief asked for: it's a durable, eco-friendly wooden toy that a child actually wants to pick up. The moving control surfaces were the riskiest part of the design and they're also the best part of it — the foam mechanism test was the single most useful step in the whole project, because it found the tolerance problem while it cost nothing to fix. The final outcome reflects the research: every choice from the timber to the matt finish traces back to something I tested or compared." } },

    { t:"cards", id:"modifications", eyebrow:"7c · Modifications & Adjustments", head:"To improve my product I would…", cols:2,
      cards:[
        { title:"Carve a cockpit interior", meta:"Realism",
          body:"The canopy opens, but under it the fuselage is solid. Carving a simple cockpit recess with a seat shape — or adding a small turned pilot figure that clips in — would reward a child for opening the canopy and add a hide-and-seek play element. It would be done by drilling out the recess before the fuselage spine is shaped." },
        { title:"Strengthen the flap rods", meta:"Durability",
          body:"The 4 mm dowels are the thinnest parts on the toy and the most likely to fail under rough play. Moving to 5 mm rods, or sleeving the rod channel with a harder timber insert, would make the moving parts as tough as the rest of the jet without changing how the mechanism works." }
      ] },

    { t:"cards", id:"further", eyebrow:"7d · Taking the Idea Further", head:"Where it could go next.", cols:3,
      cards:[
        { title:"A squadron", meta:"Product range",
          body:"The same fuselage-spine construction works for other aircraft — a delta-wing interceptor, a prop trainer, a helicopter. A small range with shared parts would also mean shared spares, helping repairability across the whole set." },
        { title:"Carrier playset", meta:"Play ecosystem",
          body:"A wooden aircraft-carrier deck with a catapult notch and elevator would give the jet a home base and turn a single toy into a play setting — the same trick LEGO uses to keep play going." },
        { title:"Folding undercarriage", meta:"Mechanism v2",
          body:"The next mechanism to develop is wheels that fold up into the fuselage on a sprung dowel pivot, so the jet can 'fly' clean and land on its gear. The rod-and-cutout joint from this project is the starting point." }
      ] },

    { t:"cards", id:"issues", eyebrow:"7e · Issues I Came Across", head:"What went wrong (and what it taught me).", cols:2,
      cards:[
        { img:"assets/models/addl-3.jpg", title:"Flap cutout tolerance", meta:"Found in the foam model",
          body:"My first flap cutout was sized exactly to the flap and it jammed solid the moment the rod went in. Foam compresses, wood doesn't — so in timber it would have been worse. Adding 1–2 mm clearance to every control-surface cutout fixed it, and that clearance is now written into the production plan rather than left to memory." },
        { img:"assets/models/addl-2.jpg", title:"Rod alignment across parts", meta:"Found in the additional model",
          body:"Drilling the rod channel through the wing and the flap separately left the two holes slightly out of line, so the flap rotated with a wobble. The fix was drilling both parts together in one pass with the flap taped in its cutout — a small jig that becomes part of step five of the production plan." }
      ] }
  ]
}
];

/* viewer entry shown on the landing page after the 7 sections */
window.VIEWER_ENTRY = {
  id:8, slug:"viewer", title:"3D Model Viewer",
  tag:"Explore the jet — rotate · zoom · click the parts",
  accent:"#ff9d7f", deep:"#140b08", light:"#7a3a1f"
};
