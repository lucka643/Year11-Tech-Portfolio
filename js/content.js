/* ============================================================
   content.js, every section's content as data.
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
    { t:"intro", lead:"Where the project starts: the problem with modern toys, the situation my toy has to survive, who it's for, and the brief that pulls it all together." },

    { t:"split", id:"problem", eyebrow:"1a · Design Problem", head:"Design Problem",
      body:[
        "Most of the toys on the shelves are made from plastic that landfills can't break down. They're cheap to make and buy, and companies aren't looking to use other materials because biodegradable and recyclable options cost more.",
        "Using eco-friendly materials would let toys either break down naturally or be reused, cutting out a huge amount of the plastic waste being produced today."
      ],
      img:"assets/problem.jpg", cap:"Mass-produced plastic toys" },

    { t:"split", id:"situation", eyebrow:"1b · Situation", head:"Situation", flip:true,
      body:[
        "The audience for this product is children who are hard on their toys. It has to stand up to being thrown, dropped and stepped on without falling apart.",
        "Just as importantly, it can't pose any safety risk, no sharp edges and no small removable parts that could be swallowed."
      ],
      img:"assets/situation.jpg", cap:"Children at group play" },

    { t:"split", id:"target", eyebrow:"1c · Target Market", head:"Target Market",
      body:[
        "Although children are the main users, they usually don't have the money to buy the product themselves. To sell it, the design first has to grab the child's attention and interest, which means age-appropriate toys they'll genuinely enjoy and connect with.",
        "It also has to appeal to parents, caregivers, family and friends, since they're the ones who make the final purchase decision."
      ],
      img:"assets/target.jpg", cap:"The toy aisle" },

    { t:"prose", id:"brief", eyebrow:"1d · Design Brief", head:"Design Brief",
      body:[
        "<b>Supporting the development of young children requires a thoughtful balance of modern and traditional ideas.</b> The design should consider the different environments where children learn and interact, classrooms, social settings, independent activities and group play. While children may influence buying decisions, parents and families ultimately purchase products, so the design must also appeal to them by showing clear educational value.",
        "The product should be based on the client's needs and preferences, with market research like surveys and group discussions used to gather feedback. The first focus is an attractive appearance, followed by practical features that let it function effectively. Cost affects manufacturing methods and material choices, for this prototype, timber, plastic and metal are considered, with attention to local availability and environmental impact. Anthropometrics and ergonomics are also key, to keep the product comfortable, safe and suitable for children to use."
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

    { t:"deck", id:"plan", eyebrow:"2a · Research Plan", head:"Research Plan", text:true,
      tabs:[
        { label:"Reliability", title:"Reliability",
          lead:"How easily the toy can be repaired decides how long it survives, especially with young children who are tough on their things.",
          cols:[
            {h:"Information needed", items:["Ways the toy can be fixed if a part breaks","Which joints are most likely to fail","What makes a repair simple for a parent at home"]},
            {h:"Resources / approach", items:["Methods to strengthen wooden joints (dowels, glue types)","Possibly include glue or spare parts","Design parts to be individually replaceable"]}
          ],
          note:"<b>Why it matters:</b> a long-lasting, repairable toy keeps plastic and timber out of landfill, the core problem this project is solving." },
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
            {h:"Resources / approach", items:["Review successful toys already on the market","Study colour theory, complementary colours, bold primaries vs pastels","Analyse the look of popular wooden toys"]}
          ],
          note:"<b>Why it matters:</b> children influence the buying decision, so visual appeal is what gets a parent to the checkout." },
        { label:"Playability", title:"Playability",
          lead:"Playability is why a child keeps coming back to a toy, size, handling and how engaging the interaction is.",
          cols:[
            {h:"Information needed", items:["A comfortable size for small hands","How the toy will actually be played with","Ways to make it more engaging (moving parts)"]},
            {h:"Resources / approach", items:["Research average children's hand sizes (anthropometrics)","Look at popular toys and current trends","Test grip and part sizes on real users"]}
          ],
          note:"<b>Why it matters:</b> the moving control surfaces and opening canopy on my jet are aimed squarely at playability." },
        { label:"Manufacturing", title:"Manufacturing",
          lead:"The toy has to be buildable with the tools and skills available in the workshop, efficiently, safely, and to a good standard.",
          cols:[
            {h:"Information needed", items:["Which machines and tools each part needs","How each part is cut, shaped and joined"]},
            {h:"Resources / approach", items:["Learn the workshop machinery, bandsaw, sanders, laser cutter, drill press","Plan the most efficient order to build parts","Keep every process within my skill level"]}
          ],
          note:"<b>Why it matters:</b> a great design is useless if I can't actually make it." }
      ] },

    { t:"cards", id:"pa1", eyebrow:"2b · Product Analysis #1", head:"Product Analysis #1", cols:2, imgFit:"product",
      cards:[
        { title:"Hot Wheels", meta:"Mattel · ≈ $2.80 NZD", img:"assets/products/hot-wheels.png",
          dl:[["Repairability","Not repairable. If the wheels or axles break, it's cheaper to replace the whole toy than fix it."],
              ["Material","Die-cast metal body with plastic parts."],
              ["Aesthetics","Small, detailed and eye-catching. Realistic styling and bright colours appeal to children and collectors."],
              ["Playability","Rolls smoothly, easy to use with tracks or floor play. Good for quick, imaginative play and collecting."],
              ["Manufacturing","Mass-produced, keeping the price low and availability high."],
              ["Environment","Metal can be recycled, but plastic parts reduce sustainability."],
              ["Ergonomics","Small and lightweight, fits comfortably in one hand."]] },
        { title:"Buzzy Bee Pull Toy", meta:"Buzzy Bee · ≈ $39.95 NZD", img:"assets/products/buzzy-bee.png",
          dl:[["Repairability","More repairable than plastic toys because it's wood. Small damaged parts can often be glued or replaced."],
              ["Material","Wood with a non-toxic finish."],
              ["Aesthetics","Bright, classic and recognisable, a strong New Zealand identity."],
              ["Playability","Easy for toddlers to pull along. The clicking sound and moving wings make it interactive and fun."],
              ["Manufacturing","Made as a traditional wooden toy, a more classic, durable feel."],
              ["Environment","Wooden body is renewable and longer-lasting than plastic. Non-toxic paint is a plus."],
              ["Ergonomics","Easy pull-string handle and lightweight size for toddlers."]] }
      ] },

    { t:"cards", id:"pa2", eyebrow:"2b · Product Analysis #2", head:"Product Analysis #2", cols:2, imgFit:"product",
      cards:[
        { title:"Shape-Sorting Dump Truck", meta:"Melissa & Doug · ≈ $26.99 USD", img:"assets/products/md.png",
          dl:[["Repairability","More repairable than electronic toys, wooden with simple moving parts, so it stays usable even if one part breaks."],
              ["Material","Wood with colourful shape blocks."],
              ["Aesthetics","Colourful, friendly and educational, attractive to younger children."],
              ["Playability","Combines truck play with shape sorting, fun and useful for learning."],
              ["Manufacturing","A sturdy wooden educational toy focused on durability."],
              ["Environment","Wooden construction lasts longer, reducing waste."],
              ["Ergonomics","Large shapes are easy to grip; smooth edges improve safety."]] },
        { title:"Creator 3-in-1 Sports Car", meta:"Lego · ≈ $26.99 USD", img:"assets/products/lego.png",
          dl:[["Repairability","Repairable, lost or damaged pieces can be replaced without binning the whole toy."],
              ["Material","Plastic Lego bricks."],
              ["Aesthetics","Bright and sporty with detailed features; the 3 build options keep it interesting."],
              ["Playability","Very high play value, build, rebuild and play with different models."],
              ["Manufacturing","Precision-made and mass-produced, so pieces fit accurately."],
              ["Environment","Bricks are durable and reusable for years, though plastic is less eco-friendly than wood."],
              ["Ergonomics","Small bricks fit children's hands, but younger children may struggle."]] }
      ] },

    { t:"cards", id:"aesthetics", eyebrow:"2c · Aesthetics Analysis", head:"Aesthetics Analysis", cols:4, imgFit:"contain",
      cards:[
        { img:"assets/aesthetics/rubiks.png", title:"Colour", body:"Bright primary colours like red, blue and yellow attract attention and create excitement. Complementary colours (opposites on the colour wheel) help products stand out, and the Rubik's Cube is instantly recognisable because of its bold, contrasting faces." },
        { img:"assets/aesthetics/smooth.png", title:"Feel: smooth", body:"Smooth surfaces feel comfortable, safe and pleasant to touch, giving a higher quality feel that suits children's products. A smooth sanded finish is also splinter free, which is really important for a wooden toy." },
        { img:"assets/aesthetics/rough.png", title:"Feel: rough", body:"Rough surfaces feel unfinished and less appealing. Sharp or uneven textures reduce safety and comfort, which is exactly what my sanding and finishing stages have to get rid of." },
        { img:"assets/aesthetics/needoh.png", title:"Example: NeeDoh", body:"Vibrant, playful colours and a soft, squishy texture that is relaxing to squeeze. Its success shows how much the way a toy feels drives repeated sensory play." }
      ] },

    { t:"deck", id:"wood", eyebrow:"2d · Materials", head:"Materials",
      tabs:[
        { label:"Pine", img:"assets/materials/pine.jpg", cap:"Pine", title:"Pine",
          lead:"A softwood and one of the cheapest, most available timbers in New Zealand. Pale, lightweight and easy to cut, sand and glue, perfect for fast prototyping before committing to an expensive wood.",
          cols:[
            {h:"Pros", items:["Lightweight and easy to handle","Soft enough to shape by hand or machine","Inexpensive (~NZ$10.95 per linear metre)","Readily available everywhere","Takes paint, glue and varnish well","Fast-growing and renewable"]},
            {h:"Cons", items:["Soft surface dents and scratches easily","Can warp, split or crack over time","Knots create weak points in thin parts","Least durable of my three options"]}
          ],
          note:"<b>For this project:</b> ideal for early models and test pieces, but its softness is a real risk on thin parts like the jet's wings and tail. Better as a prototyping wood than the final toy." },
        { label:"Fijian Mahogany", img:"assets/materials/mahogany.jpg", cap:"Fijian Mahogany", title:"Fijian Mahogany",
          lead:"A plantation-grown hardwood with a rich reddish-brown colour and tight, even grain. A premium furniture-grade timber prized for strength, durability and a clean finish, and it's grown sustainably.",
          cols:[
            {h:"Pros", items:["Strong and very durable","Beautiful reddish grain & premium finish","Moisture and rot resistant","Splinter resistant, safer for children","Plantation-grown, so eco-friendly","Machines and sands cleanly"]},
            {h:"Cons", items:["More expensive than pine","Heavier to work with","Harder to source locally","Arguably overkill for a small model"]}
          ],
          note:"<b>For this project:</b> the durability and splinter resistance make it a strong candidate for the final toy, and its sustainable sourcing lines up directly with the eco-friendly brief." },
        { label:"Beech", img:"assets/materials/beech.jpg", cap:"Beech", title:"Beech",
          lead:"A pale, fine-grained hardwood, the classic toy-making timber for generations: building blocks, trains, pull-alongs. Strong, machines beautifully and finishes to a very smooth, splinter-free surface.",
          cols:[
            {h:"Pros", items:["Strong and hard-wearing","Very fine, even grain, smooth, safe finish","Machines, turns and sands cleanly","Good value for a hardwood (~$11.50 / 8\"×24\")","Traditional, proven toy material"]},
            {h:"Cons", items:["Heavy compared to pine","Absorbs moisture / can warp if unsealed","Not rot-resistant outdoors"]}
          ],
          note:"<b>For this project:</b> the strongest all-round option, tough enough to be thrown and stepped on, yet fine-grained enough to sand splinter-free for a child-safe finish." }
      ] },

    { t:"deck", id:"other-materials", eyebrow:"2d · Materials", head:"Materials",
      tabs:[
        { label:"Acrylic", img:"assets/materials/acrylic.jpg", cap:"Acrylic", title:"Acrylic",
          lead:"A clear or coloured plastic that can be laser-cut and shaped precisely. Its glassy, transparent finish makes it the obvious candidate for a see-through cockpit canopy.",
          cols:[
            {h:"Pros", items:["Lightweight yet strong","Laser-cuts and shapes precisely","Weather and water resistant","Smooth, glossy finish","Available clear or in bright colours"]},
            {h:"Cons", items:["Scratches easily","Can crack or shatter under sharp impact","Not biodegradable or easily recycled","Cut edges can be sharp","Can be expensive"]}
          ],
          note:"<b>For this project:</b> perfect for a transparent canopy, but it pulls against the eco-friendly brief, limited to one small feature part, with all edges sanded smooth." },
        { label:"Aluminium", img:"assets/materials/aluminium.jpg", cap:"Aluminium", title:"Aluminium",
          lead:"A lightweight silver-grey metal that's strong for its weight, corrosion resistant and fully recyclable.",
          cols:[
            {h:"Pros", items:["Lightweight for a metal","Rust and corrosion resistant","Strong relative to weight","Fully recyclable","Clean, modern appearance"]},
            {h:"Cons", items:["More expensive than steel","Dents under impact","Needs metalworking tools to shape","Cold and hard, less inviting for a toy"]}
          ],
          note:"<b>For this project:</b> could suit a hidden fitting or axle, but metal parts add cost and take away from the warm, safe wooden feel I'm aiming for." },
        { label:"Steel", img:"assets/materials/steel.jpg", cap:"Steel", title:"Steel",
          lead:"A very strong, widely available metal alloy, the toughest material I looked at, but also the heaviest and least suited to a young child's toy.",
          cols:[
            {h:"Pros", items:["Extremely strong and durable","Very long lasting","Cost-effective","Widely available"]},
            {h:"Cons", items:["Heavy","Rusts if untreated","Hard to cut and shape","Hard, cold and unsafe edges for young kids"]}
          ],
          note:"<b>For this project:</b> too heavy and hard for a children's toy, more useful for the jigs and tooling used to make the toy than the toy itself." }
      ] },

    { t:"deck", id:"finishes", eyebrow:"2d · Finishes", head:"Finishes",
      tabs:[
        { label:"Danish Oil", img:"assets/finishes/danish-oil.jpg", cap:"Danish Oil", title:"Danish Oil",
          lead:"A quick, easy-to-apply oil that soaks into the timber and brings out the natural grain. Good for getting a finish on quickly without much fuss.",
          cols:[
            {h:"Pros", items:["Fast drying","Easy to clean","Low odour","Brings out grain colour","Water based"]},
            {h:"Cons", items:["Less durable outdoors","Can chip or wear over time","Needs re-coating on wood"]}
          ],
          note:"<b>Description:</b> water-based, common for crafts, good for indoor use. Handy for quick finishing, but a toy that gets thrown around needs a tougher protective coat on top." },
        { label:"Cabothane Clear", img:"assets/finishes/cabothane.jpg", cap:"Cabothane Clear", title:"Cabothane Clear",
          lead:"A clear polyurethane coating that seals and shields the wood, the tough top-coat option, built to take knocks and resist water. Available in matt or gloss.",
          cols:[
            {h:"Pros", items:["Very durable","Scratch resistant","Water resistant","Protective hard film"]},
            {h:"Cons", items:["Strong fumes while applying","Longer drying time","Harder to clean up"]}
          ],
          note:"<b>Description:</b> a clear or tinted protective coating for wood in gloss or matt. <b>For this project</b> it's the leading candidate for the final layer, a hard-wearing, child-safe surface." },
        { label:"Mirotone", img:"assets/finishes/mirotone.jpg", cap:"Mirotone", title:"Mirotone",
          lead:"A professional pre-catalysed lacquer used in furniture workshops. Dries to a very hard, smooth shell, the most durable of the three, but the most demanding to apply.",
          cols:[
            {h:"Pros", items:["Extremely hard-wearing","Smooth professional finish","Seals and protects fully","Long-lasting"]},
            {h:"Cons", items:["Strong fumes, needs ventilation","Usually spray-applied","Less eco-friendly","Harder for a beginner to apply"]}
          ],
          note:"<b>Description:</b> an industrial clear lacquer common in professional finishing. <b>For this project</b> it gives the toughest finish, but the fumes and spray equipment make it less practical than Cabothane." }
      ] },

    { t:"deck", id:"wheels", eyebrow:"2d · Wheels", head:"Wheels",
      tabs:[
        { label:"Basic Wooden", img:"assets/wheels/basic.jpg", cap:"Basic wooden", title:"Basic Wooden Wheels",
          lead:"Simple round wooden wheels turned on a lathe, the easiest and cheapest option, and a perfect fit for the eco-friendly brief.",
          cols:[
            {h:"Pros", items:["Easy to make","Cheap material","Eco friendly","Strong"]},
            {h:"Cons", items:["Plain appearance","Less grip","Can wear over time"]}
          ],
          note:"<b>Description:</b> basic round wooden wheels, simple design, best for handmade toys. <b>For this project</b> the most practical, sustainable choice, the whole jet stays one material." },
        { label:"Shaped Wooden", img:"assets/wheels/shaped.jpg", cap:"Shaped wooden", title:"Shaped Wooden Wheels",
          lead:"Wooden wheels turned with extra detail and shaping, more refined than plain wheels while staying fully wooden.",
          cols:[
            {h:"Pros", items:["Better appearance","Eco friendly","More unique design","Strong and reusable"]},
            {h:"Cons", items:["Harder to make","Takes more time","Higher cost than simple wheels"]}
          ],
          note:"<b>Description:</b> shaped wooden wheels with detail, a more attractive finish for premium toys. <b>For this project</b> a nice upgrade if time allows." },
        { label:"Plastic + Tread", img:"assets/wheels/plastic.jpg", cap:"Plastic + tread", title:"Plastic Wheels (Rubber Tread)",
          lead:"Mass-produced plastic wheels with rubber-style tread, like shop-bought toy cars. They roll and grip well, but clash with the eco-friendly aim.",
          cols:[
            {h:"Pros", items:["Cheap to produce","Lightweight","Tread gives grip","Mass produced"]},
            {h:"Cons", items:["Can crack","Less eco friendly","Non-biodegradable","Can look cheap"]}
          ],
          note:"<b>Description:</b> plastic wheels with rubber-style tread, common on toy cars. <b>For this project</b> the better grip isn't worth the plastic, it works against the whole brief." }
      ] },

    { t:"deck", id:"manufacturing", eyebrow:"2d · Manufacturing Analysis", head:"Manufacturing Analysis", thumbs:true,
      tabs:[
        { label:"Domino", img:"assets/mfg/domino.jpg", cap:"01 · Domino", title:"Domino",
          lead:"Cuts accurate joining slots (mortises) so two pieces slot together around a loose tenon. Strong, neat, hidden joints, ideal for joining the jet's fuselage sections without visible screws." },
        { label:"Table Router", img:"assets/mfg/table-router.jpg", cap:"02 · Table Router", title:"Table Router",
          lead:"Shapes edges and cuts grooves, producing smooth decorative and functional profiles. Good for rounding edges so there are no sharp corners, and for cutting the channels the control-surface rods sit in." },
        { label:"Laser Cutter", img:"assets/mfg/laser-cutter.jpg", cap:"03 · Laser Cutter", title:"Laser Cutter",
          lead:"Uses a focused laser to cut or engrave with high precision. Ideal for detailed parts, it could cut the thin acrylic canopy or engrave panel lines into the jet." },
        { label:"Drill Press", img:"assets/mfg/drill-press.jpg", cap:"04 · Drill Press", title:"Drill Press",
          lead:"Drills straight, accurate holes, far safer and more precise than a hand drill. Perfect for the axle holes and the rod holes that run through the wings, elevators and rudder." },
        { label:"Lathe", img:"assets/mfg/lathe.jpg", cap:"05 · Lathe", title:"Lathe",
          lead:"Spins the material while cutting tools shape it. Best for round parts, exactly how the wooden wheels and any cylindrical sections would be turned." },
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

    { t:"duo", id:"ergonomics", eyebrow:"2d · Ergonomics", head:"Ergonomics",
      cols:[
        { h:"Size", ps:[
          "The size of the toy has to suit the consumer. For a 3 to 8 year old it needs to be big enough that there are no small parts a child could swallow, but small and light enough for little hands to grip, lift and push around comfortably.",
          "The wooden jet should sit comfortably in a child's two hands, light enough to carry and \"fly\" around, yet solid enough that it doesn't feel flimsy or break when dropped."
        ]},
        { h:"Made for Audience", ps:[
          "It's designed for children aged 3 to 8, who learn through play and are rough with their toys. Every surface must be smooth with rounded edges and no sharp points, and parts must be too big to swallow.",
          "Bold colours and moving parts, the wings, ailerons and opening canopy, keep children engaged, while the durable wooden build survives drops, throws and being stepped on. Parents, the actual buyers, get a safe, long-lasting, eco-friendly toy."
        ]}
      ] },

    { t:"duo", id:"repair-play", eyebrow:"2d · Repairability & Playability", head:"Repairability & Playability",
      cols:[
        { h:"Repairability", ps:[
          "Repairability refers to how easily a product can be fixed when parts become damaged or worn out. This matters for toys because children use them frequently and sometimes roughly. A toy that can be repaired usually lasts longer, saves money, and reduces waste."
        ], eg:{ img:"assets/examples/lego.jpg", text:"<b>LEGO</b> is a strong example, if one piece is lost or broken it can be replaced without throwing away the whole set, making it more practical and longer-lasting for families." }},
        { h:"Playability", ps:[
          "Playability is the level of enjoyment and interest a toy provides. It's affected by age group, challenge level, colours, movement, and whether the toy can be used alone or with others. Products with high playability are more likely to stay popular over time."
        ], eg:{ img:"assets/examples/uno.jpg", text:"<b>UNO</b> has strong playability, easy to learn, quick to play, and suited to groups. Bright colours and competitive gameplay keep players engaged across a wide audience." }}
      ] },

    { t:"deck", id:"summary", eyebrow:"2e · Research Summary & Specifications", head:"Research Summary & Specifications", text:true,
      tabs:[
        { label:"Repairability", title:"Repairability",
          cols:[
            {h:"Summary", p:"Research showed toys with replaceable parts last longer, reduce waste, and save money for families. Durable designs are more practical for regular use.", boxed:true},
            {h:"Specification", p:"The product should have removable or replaceable parts. Strong materials and simple assembly should allow easy repairs.", boxed:true}
          ]},
        { label:"Materials", title:"Materials",
          cols:[
            {h:"Summary", p:"Comparing woods, plastics and metals showed a durable timber like beech, with a non-toxic finish, best balances strength, safety, cost and the eco-friendly brief.", boxed:true},
            {h:"Specification", p:"Use a durable wood body, a non-toxic finish, and parts cut accurately to the right size.", boxed:true}
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
  tag:"Designer Study · 22 Sketches · Evaluation",
  accent:"#c79bff", deep:"#0e0a16", light:"#5e3b8e",
  preview:"assets/sketches/eval-fighter-jet.jpg",
  blocks:[
    { t:"intro", lead:"Twenty-two hand-drawn concepts, a study of the designer who inspired the winner, and the scoring that landed on the wooden fighter jet." },

    { t:"split", id:"designer", eyebrow:"3a · Designer Influence Study", head:"Designer Influence Study",
      body:[
        "<b>Artist:</b> Harry James Hillaker &nbsp;·&nbsp; <b>Born:</b> 9 May 1919 to 8 February 2009 &nbsp;·&nbsp; <b>Notable designs:</b> F-16 &amp; F-16XL.",
        "<b>Speciality:</b> Hillaker prioritised a blend of cutting edge technology and common sense requirements such as flying performance and cost effectiveness.",
        "<b>About:</b> Hillaker is known as the \"Father of the F-16\". As chief designer at General Dynamics he pushed back against the trend of bigger, heavier, more expensive fighters, and instead designed a small, light aircraft where every part had to earn its place. The result was one of the most successful and affordable jets ever built. He later developed the F-16XL with its cranked arrow delta wing, which proved the same airframe could be reshaped for completely different jobs.",
        "His way of thinking is exactly what I want my toy to follow. It is a simple, efficient shape where nothing is just decoration. The wings, fins and control surfaces all actually do something. That is why my jet has working ailerons, elevators and rudders instead of being a solid block that only looks like a plane."
      ],
      img:"assets/designer/f16.jpg", cap:"F-16 Fighting Falcon" },

    { t:"stack", id:"sketches", eyebrow:"3b · Design Ideas", head:"Design Ideas",
      body:"All twenty-two of my hand-drawn concepts, stacked like a deck of cards. Move the top drawing aside to send it to the back and bring up the next one.",
      items:[
        { img:"assets/sketches/items/golf-cart.jpg", title:"Golf Cart", text:"+17 pieces · complex design. A realistic cart with working steering and wheels, fun, but a lot of fiddly parts for the play value it gives back." },
        { img:"assets/sketches/items/flatbed-truck.jpg", title:"Flatbed Truck", text:"10 pieces · complex design. Working doors and wheels with a flat deck for carrying other toys. Solid, but very similar to toys already everywhere." },
        { img:"assets/sketches/items/digger.jpg", title:"Digger", text:"12 pieces · complex design. Role-play and realism in one, a strong yellow/black identity. Made the final shortlist of four." },
        { img:"assets/sketches/items/helicopter.jpg", title:"Helicopter", text:"7 pieces · simple design, easy to make. Aimed at a younger audience with a smaller propeller for safety." },
        { img:"assets/sketches/items/nfl.jpg", title:"NFL Game", text:"+13 pieces · simple design, interactable. A figure throws the ball into hoops for points; magnets let the figure be moved around the board." },
        { img:"assets/sketches/items/fighter-jet.jpg", title:"Fighter Jet", text:"+25 pieces · complex, realistic, hard to make, but with working wheels, flaps, stabiliser, rudder and elevators plus detailed vents. The eventual winner." },
        { img:"assets/sketches/items/truck.jpg", title:"Container Truck", text:"+8 pieces · simple design. Working doors and wheels with a detachable container for role-play." },
        { img:"assets/sketches/items/scooter.jpg", title:"Scooter", text:"+12 pieces · complex design. A realistic role-play scooter with nice curves, tricky ones to cut in timber." },
        { img:"assets/sketches/items/golf.jpg", title:"Golf", text:"+13 pieces · complex design. A metal plate under felt grass lets a spring-powered figure stick on while it swings a club to hit the ball. Realistic but mechanically ambitious." },
        { img:"assets/sketches/items/curling.jpg", title:"Curling", text:"6 pieces · simple design, easy to make. A smooth surface for gliding weighted circle pieces, a 2-player tabletop game." },
        { img:"assets/sketches/items/car.jpg", title:"Car", text:"5 pieces · simple design, easy to make. Classic role-play for a younger audience." },
        { img:"assets/sketches/items/train.jpg", title:"Train", text:"14 pieces · simple design, easy to make, looks good. A timeless wooden-toy shape." },
        { img:"assets/sketches/items/tik-tak-toe.jpg", title:"Tik-Tak-Toe", text:"15 pieces · 2-player, simple design. Chunky noughts-and-crosses pieces on a wooden board." },
        { img:"assets/sketches/items/shape-puzzle.jpg", title:"Shape Puzzle", text:"8 pieces · simple design, easy to make. A learning toy for a younger audience, match the shapes to the holes." },
        { img:"assets/sketches/items/ring-toss.jpg", title:"Ring Toss", text:"2-player · 7 pieces for the base + 6 rings. Easy assembly and disassembly for storage and portability." },
        { img:"assets/sketches/items/semi-circle.jpg", title:"Semi-Circle Toy", text:"5 pieces · simple design. Stacking rainbow arches, a classic sensory toy for little hands." },
        { img:"assets/sketches/items/whack-a-mole.jpg", title:"Whack-a-Mole", text:"12 pieces · interactable. Flip the object to restart the game; reinforced hammer to survive enthusiastic whacking. Made the final shortlist." },
        { img:"assets/sketches/items/toy-camera.jpg", title:"Toy Camera", text:"14 pieces · a fake camera prop for role-play, with working buttons and dial. Realistic." },
        { img:"assets/sketches/items/tool-box.jpg", title:"Tool Box", text:"10 pieces · role-play and pretend. Sharp or dangerous edges removed or dulled; a case for storage including a right-angle ruler, screwdriver with bits, saw and caliper. Made the final shortlist." },
        { img:"assets/sketches/items/spinner.jpg", title:"Spinner", text:"1 piece · the simplest design of all, made for spinning." },
        { img:"assets/sketches/items/drums.jpg", title:"Drums", text:"+4 pieces · simple design. Toy drums that work, cuts in the drum surface allow vibration, with a reinforced drumstick." },
        { img:"assets/sketches/items/string-spinner.jpg", title:"String-Powered Spinner", text:"5 pieces · simple design. Pulling the string spins the spinner very fast and it pops out onto the surface below." }
      ] },

    { t:"matrix", id:"evaluation", eyebrow:"3c · Evaluation of Design & Specification", head:"Evaluation of Design & Specification",
      body:"I shortlisted four concepts and scored each one out of 5 against the five specification areas from my research.",
      criteria:["Repairability","Material","Aesthetics","Manufacturing","Playability"],
      rows:[
        { img:"assets/sketches/eval-toolbox.jpg", name:"Tool Box",
          scores:[ {s:4, why:"Each tool is its own loose piece, so if one gets lost or broken you only have to replace that single tool and not the whole set. The case itself is simple to fix too."},
                   {s:4, why:"It is made from simple solid wood parts with no thin fragile bits. That makes it cheap to build and tough enough to survive being thrown around."},
                   {s:3, why:"It looks neat and practical, but it is not very exciting. There is not much here that grabs a young kid's eye next to a jet or a digger."},
                   {s:4, why:"Almost all of it is straight cuts and basic shapes, so it is quick and low risk to make on the bandsaw."},
                   {s:3, why:"It is good for copying adults and pretend play, but once you have taken the tools out a few times there is not a lot left to do."} ], total:18 },
        { img:"assets/sketches/eval-whack-a-mole.jpg", name:"Whack-a-Mole",
          scores:[ {s:3, why:"The pegs you hit can be swapped out if they break, but the main frame is one big piece, so a crack in that is a much harder repair."},
                   {s:4, why:"The chunky wood and the thick hammer can take a real beating, which is exactly what an excited little kid is going to give it."},
                   {s:3, why:"The shape is fun and chunky, but there is not much going on with the colours or details to make it really pop on a shelf."},
                   {s:4, why:"It is built from lots of repeated simple parts like the pegs, which are fast to make, so the build is not too hard."},
                   {s:4, why:"It is an active, hands on game that lets kids burn energy and can be played with other people, so they keep coming back to it."} ], total:18 },
        { img:"assets/sketches/eval-digger.jpg", name:"Digger",
          scores:[ {s:4, why:"The wheels and the bucket can be taken off and replaced if they wear out or snap, so one broken part does not kill the whole toy."},
                   {s:4, why:"A solid wood body with thick chunky parts makes it strong and able to handle being dropped and bashed around during play."},
                   {s:4, why:"The bold yellow and black colours and the digger shape are instantly recognisable and really catch a young kid's eye."},
                   {s:3, why:"The curved cab and the moving arm are tricky to cut and fit accurately, so it takes a lot more time and care than a simple toy."},
                   {s:4, why:"You can roll it around and scoop things up with the bucket, so there is both movement and pretend play to keep a kid busy."} ], total:19 },
        { img:"assets/sketches/eval-fighter-jet.jpg", name:"Fighter Jet", win:true,
          scores:[ {s:4, why:"Every control surface and wheel sits on a metal nail rod, so if one snaps you can slide it off and put a new one on without wrecking the rest of the jet."},
                   {s:4, why:"A pine body with MDF wings and metal nail hinges is a strong mix that holds the moving parts well and stands up to rough play."},
                   {s:5, why:"The swept wings, twin tails and pointy nose give it the most exciting and recognisable shape of all four ideas. It looks fast just sitting still."},
                   {s:3, why:"With around 25 parts and lots of moving bits it is by far the hardest of the four to build, which is the main risk with this design."},
                   {s:5, why:"Moving ailerons, elevators and rudders plus an opening canopy give a kid loads of things to actually do with it, way more than any other idea."} ], total:21 },
      ],
      note:"<b>Decision:</b> the Fighter Jet wins on 21 out of 25. It is the hardest one to actually make, but it scores highest where my research says it matters most, which is aesthetics and playability. The moving control surfaces give it a level of fun none of the other ideas can match. I am keeping the build risk under control by testing every moving mechanism in foam first before I cut any real material." },

    { t:"ph", id:"exploded", eyebrow:"3d · Exploded Drawing", head:"Exploded Drawing" }
  ]
},

/* ============================== 04 DEVELOPMENT ============================== */
{
  id:4, slug:"development", title:"Development",
  tag:"First Model · Additional Model · Testing",
  accent:"#5fe6b5", deep:"#06110f", light:"#1f6f5c",
  preview:"assets/models/foam-1.jpg",
  blocks:[
    { t:"intro", lead:"Before cutting any real material, I modelled the jet in foam. First the whole aircraft, then a working wing and flap mechanism. I also tested four finishes on a piece of wood." },

    { t:"gallery", id:"first-model", eyebrow:"4a · First Model", head:"First Model",
      body:"My first model was cut out of foam. The point was not to make it look pretty. It was to get the proportions right and to work out how many parts the jet actually needs. Building it taught me a lot. The foam model has twin tails and I really liked how that looked, so I am keeping twin tails on the real jet instead of the single tail from my first sketch. It also helped me see which parts I actually needed and let me count up the real part list before cutting any real material.",
      imgs:[
        { src:"assets/models/foam-1.jpg", cap:"Front view" },
        { src:"assets/models/foam-2.jpg", cap:"Elevator, the pitch control surface" },
        { src:"assets/models/foam-3.jpg", cap:"All parts laid out" },
        { src:"assets/models/foam-5.jpg", cap:"Top view, bird's eye" },
        { src:"assets/models/foam-6.jpg", cap:"Rear view" },
        { src:"assets/models/foam-7.jpg", cap:"Exploded view, every part on its rods" }
      ] },

    { t:"gallery", id:"additional-model", eyebrow:"4b · Additional Model", head:"Additional Model",
      body:"My second model is all about the most important moving part on the jet, which is the control surface. The way it works is we use metal nails as the rod. On the main wing a cutout is made on the flap, and a little bit of the main wing sticks out and sits inside that hole in the flap. Then we drill holes that go through the flap and through that sticking out bit of the wing, and the metal nail goes inside that hole. That nail is what the flap tilts on. The tolerances really matter here. If the gaps are too small then it is too tight and the flap is hard to rotate, which is not fun and not good for playing with. If the gaps are too big then it rotates too loosely and the flap just flops down under gravity. We use the same idea for the elevators and the rudders, but the wing flap is a little bit different. On the elevators and rudders the whole flap has one nail going all the way through it, and the holes are on the inside of the wing. So there is no cutout in the flap and no bit of the wing sticking out, which is the only real difference between them and the main wings.",
      imgs:[
        { src:"assets/models/addl-1.jpg", cap:"Wing flat, flap on its nail, slot visible" },
        { src:"assets/models/addl-2.jpg", cap:"Flap tilted up on its nail" },
        { src:"assets/models/addl-3.jpg", cap:"Slot cutout and nail from above" },
        { src:"assets/models/addl-4.jpg", cap:"Flap fully raised on the bench" },
        { src:"assets/models/addl-5.jpg", cap:"Flap part way through its tilt" }
      ] },

    { t:"cards", id:"justification", eyebrow:"4c · Model Justification", head:"Model Justification", cols:2,
      cards:[
        { img:"assets/models/foam-1.jpg", title:"First Model", meta:"Whole-jet foam mock-up",
          body:"This is my first model, made out of foam. I misjudged some of the proportions in my planning, so this model helped me understand and fix the sizes of each part, especially the length of the nose and how big the wings needed to be. It also helped me work out which parts I actually needed and which ones I could get rid of, and it is where I decided to keep the twin tails because I liked how they looked on the foam." },
        { img:"assets/models/addl-4.jpg", title:"Additional Model", meta:"Wing and control-surface mechanism",
          body:"My second model is smaller but just as important. It is a working test of the flap mechanism that makes my jet special. The control surfaces are the whole reason a kid would pick this jet over a solid one, so the nail and cutout joint had to be proven before I built it six times in the real materials, two for the ailerons, two for the elevators and two for the wings. If the flaps do not move smoothly then the playability that I chose this design for is gone." }
      ] },

    { t:"split", id:"finish-testing", eyebrow:"4d · Testing Finishes", head:"Testing Finishes",
      body:[
        "I tested all four of my finishes side by side on a single piece of wood. They were <b>Cabothane Clear Matt</b>, <b>Cabothane Clear Gloss</b>, <b>Danish Oil</b> and <b>Mirotone</b>.",
        "In my opinion the Cabothane Clear Matt, the Cabothane Clear Gloss and the Danish Oil all look very similar to each other. Mirotone looks the darkest of the four, which I actually think is really good, because I can use it to contrast different parts of my plane against the lighter parts.",
        "I am not in my workshop with the test piece right now so I cannot feel it, but from my research a good clear finish like this should dry to a smooth surface that does not feel dry or sticky to the touch even after it has been sitting for a long time. My research also says that more oil based finishes like Danish Oil can need recoating after a while to keep them looking good.",
        "<b>My plan:</b> use the dark Mirotone on some parts and a lighter finish on the other parts so the jet has a nice contrast. I am not painting or colouring the plane at all. The finishes and the natural look of the wood do all the work."
      ],
      img:"assets/models/finish-strip.jpg", cap:"The test strip, four finishes on one board" },

    { t:"cards", id:"dev-conclusion", eyebrow:"4e · Development Testing Conclusion", head:"Development Testing Conclusion", cols:2,
      cards:[
        { title:"Sizing", meta:"From the foam model",
          body:"After looking at my foam model next to children's hand sizes, going about 1.5 times bigger than the foam felt right. That works out at around 400 mm in length with a wingspan of around 300 mm. That is big enough that every part is safely oversized for a 3 year old, but still small enough to hold in two hands and fly around." },
        { title:"Materials", meta:"From research and testing",
          body:"Pine for the main body and the canopy, because it is easy to shape and sand. MDF for the wings and the flaps, because it was the right thickness and was easy to find in my workshop. MDF was fine to cut on the bandsaw, but it was a nightmare to sand and to drill holes in, especially the holes for the rods. Metal nails are used as the axles and as the rods that the control surfaces tilt on." },
        { title:"Finish", meta:"From the four-way test",
          body:"I am not painting or colouring the jet at all. Instead I am using the dark Mirotone finish on some parts and a lighter finish on the other parts so the different parts of the plane contrast against each other. The finishes are non toxic once they are dry and they keep the natural look of the wood." },
        { title:"Modifications", meta:"From both models",
          body:"My first sketch had a single tail, but I have gone to twin tails like my foam model because I liked how that looked. The flap cutouts get 2 mm of clearance after the foam flap jammed when it was cut too tight. The main body is made from two pieces of pine, a bottom piece and a top piece, and the canopy is part of that top piece so it does not have to be cut out separately." }
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

    { t:"table", id:"production-plan", eyebrow:"5a · Production Plan", head:"Production Plan",
      columns:["Step","Task","Resources","Tools","Health & Safety"],
      rows:[
        ["One","Make the main body. I could not find one piece of pine the right size, so I used two pieces, one for the bottom of the body and one for the top. That worked out well because the canopy is part of that top piece, so I did not have to cut the canopy out separately later. I cut the pine to the right width and length on the bandsaw, then used the bandsaw again to cut the tapers and angles for the nose and the tail to get the right shape. Then I sanded all the edges smooth.","Pine wood. Body is about 400 mm long, 70 mm wide and 90 to 100 mm high.","Pencil · Ruler · Bandsaw · Orbital sander","Safety goggles · Apron · Closed shoes"],
        ["Two","Make the wings and stabilizers. Using my MDF, I drew the correct sizes on with a pencil and ruler, taking every measurement straight off my working drawing so it was accurate, then cut each part out with the bandsaw. I did this for both main wings, for both horizontal stabilizers and for both vertical stabilizers.","MDF. Sizes taken from the working drawing.","Pencil · Ruler · Bandsaw","Safety goggles · Apron · Closed shoes"],
        ["Three","Make the two intakes out of MDF. I drew the sizes of the intake parts onto the MDF with a pencil and ruler from my working drawing, then cut them out on the bandsaw. I also drilled pilot holes in the right places where small nails go to hold the MDF parts together. The pilot holes stop the MDF from splitting when the nails go in, because MDF splits really easily. I did this for both sides.","MDF · small nails. Sizes from the working drawing.","Pencil · Ruler · Bandsaw · Hand drill · Hammer","Safety goggles · Apron · Closed shoes"],
        ["Four","Make the control surfaces. I took the ailerons and rudders I made in step two, and I also cut out the flaps on the bandsaw by marking where to cut from my working drawing. That gave me two flaps, two ailerons and two rudders. Then I sanded the front edge of each one into a half circle shape so it can rotate in place. A square edge just jams against the part next to it, but a rounded half circle edge lets it spin freely. I also left 2 mm of clearance on every side that sits next to another part, and that 2 mm is my tolerance.","Parts from step two · MDF flaps.","Pencil · Ruler · Bandsaw · Sander","Safety goggles · Apron · Closed shoes"],
        ["Five","Drill the axle channels and make the axles. First I drew lines on the outside of each part to show exactly where the channel goes, so I drill it straight and in the centre. If the channel is off centre the flap turns stiffly or not at all. Then I drilled the channels through all the ailerons, rudders and flaps, and into the main wings, horizontal stabilizers and vertical stabilizers. After that I got nails that fit the holes, cut off the big end of each nail with pliers, the bit you hit with a hammer, and used the rest of the nail as the axle.","Metal nails.","Pencil · Ruler · Hand drill · Pliers","Safety goggles · Apron · Closed shoes"],
        ["Six","Sand every part I had made so far with a very fine sandpaper on the orbital sander, so everything was smooth and nice to hold.","Fine sandpaper.","Orbital sander","Safety goggles · Apron · Closed shoes"],
        ["Seven","Apply the finishes. I put my chosen dark finish on some parts and my chosen lighter finish on other parts, to give a nice contrast between the different parts of the plane.","Mirotone (dark finish) · a lighter clear finish · brush.","Brush","Safety goggles · Apron · Closed shoes"],
        ["Eight","Put the whole jet together. To hold the wings on, I drilled one big hole all the way from one wing, through the intake, through the main body, through the other intake and into the other wing, then drilled a second hole like it so the wings cannot accidentally rotate. I pushed a metal beam through those holes to hold the wings firmly in place so they do not come loose or snap off under force. For each horizontal and vertical stabilizer I drilled two holes in the side that touches the body and two matching holes in the body, then pushed a cut nail into each one like a metal dowel to join it on. That holds all the stabilizers on and finishes the build.","Metal beam · metal nails.","Pencil · Ruler · Hand drill · Hammer","Safety goggles · Apron · Closed shoes"]
      ] },

    { t:"ph", id:"working-drawing", eyebrow:"5b · Working Drawing", head:"Working Drawing" },

    { t:"timeline", id:"diary", eyebrow:"5c · Diary of Making", head:"Diary of Making",
      body:"This follows the same steps as my production plan. Each entry gets a photo from the workshop.",
      steps:[
        { meta:"Entry 01 · Main body", title:"Cutting the pine body",
          p:"I could not find one piece of pine the right size, so I cut the body from two pieces, a bottom and a top, with the canopy already part of the top piece. I cut the width and length on the bandsaw, then cut the nose and tail tapers, and sanded all the edges smooth. (Photo to come.)" },
        { meta:"Entry 02 · Wings and stabilizers", title:"Cutting the MDF parts",
          p:"I drew every part onto the MDF from my working drawing with a pencil and ruler, then cut them out on the bandsaw. I did this for both main wings, both horizontal stabilizers and both vertical stabilizers. MDF cuts fine on the bandsaw but it is a real pain to sand. (Photo to come.)" },
        { meta:"Entry 03 · Intakes", title:"Building the intakes",
          p:"I cut the intake parts out of MDF and drilled pilot holes where the small nails go, so the MDF would not split when I nailed the parts together. I did both sides the same way. (Photo to come.)" },
        { meta:"Entry 04 · Control surfaces", title:"Flaps, ailerons and rudders",
          p:"I cut out the flaps and used the ailerons and rudders from step two. Then I sanded the front edge of each one into a half circle so it can rotate, and left 2 mm of clearance on every side that sits next to another part. (Photo to come.)" },
        { meta:"Entry 05 · Axles", title:"Drilling channels and making nail axles",
          p:"I drew lines for exactly where each axle channel goes so they would be centred, then drilled the channels through every part. I cut the big ends off the nails with pliers and used the rest as the axles. Drilling the rod holes in MDF was the hardest part. (Photo to come.)" },
        { meta:"Entry 06 · Finishing", title:"Fine sand and finishes",
          p:"I gave everything a final sand with very fine sandpaper, then put the dark Mirotone finish on some parts and a lighter finish on others to get a contrast across the plane. No paint at all. (Photo to come.)" },
        { meta:"Entry 07 · Assembly", title:"Putting it together",
          p:"I drilled the two long holes through the wings, intakes and body and pushed a metal beam through to hold the wings on. Then I joined each stabilizer on with cut nails used like metal dowels. (Photo to come.)" }
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

    { t:"ph", id:"finished", eyebrow:"6a · Finished Product", head:"Finished Product" },

    { t:"ph", id:"build-photos", eyebrow:"6b · Development Photos", head:"Development Photos" }
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

    { t:"table", id:"against-spec", eyebrow:"7a · Evaluation Against Specification", head:"Evaluation Against Specification",
      columns:["Area","Specification","Evaluation"],
      rows:[
        ["Repairability","The product should have removable or replaceable parts. Strong materials and simple assembly should allow easy repairs.","Every control surface sits on a metal nail that can be pulled out, so a damaged flap, aileron or rudder can be swapped for a new one without taking the whole jet apart. <i>(To confirm on the finished build.)</i>"],
        ["Material","Use a durable wood body, a non-toxic finish, and parts cut accurately to the right size.","Pine for the body and canopy and MDF for the wings, flaps and stabilizers. The pine sands really smooth and the MDF was the right thickness and easy to find, even though it was hard to sand and drill. Metal nails are used as the axles and rods. <i>(To confirm how well it holds up after play testing.)</i>"],
        ["Aesthetics","The product should use appealing colours, a clean finish, and smooth surfaces that suit the target age group.","I am not painting it. The contrast between the dark Mirotone finish and a lighter finish does the work over the natural wood. The swept wings and twin tails give it the strongest shape of my four ideas and it reads as a jet from across a room. <i>(To confirm with child feedback.)</i>"],
        ["Manufacturing","Use safe workshop machinery to cut, shape, drill and finish each part accurately.","Built to my eight step production plan using the bandsaw, hand drill, pliers and orbital sander, and every moving mechanism was tested in foam first. <i>(I will log any changes in the diary.)</i>"],
        ["Playability","The product should be fun, safe, easy to hold, and encourage imagination or repeated use.","This is where the jet earns its place. Working ailerons, elevators and rudders, plus an opening canopy, give a kid loads to actually <b>do</b>, not just hold. There are no small loose parts and no sharp edges. <i>(To confirm in play testing.)</i>"]
      ] },

    { t:"ph", id:"reviews", eyebrow:"7b · Product Review & Feedback", head:"Product Review & Feedback", tag:"Not done yet" },

    { t:"cards", id:"modifications", eyebrow:"7c · Modifications & Adjustments", head:"Modifications & Adjustments", cols:2,
      cards:[
        { title:"Carve a cockpit interior", meta:"Realism",
          body:"The canopy opens, but under it the body is solid. If I carved out a little cockpit with a seat shape, or added a small pilot figure that clips in, it would give a kid a reason to open the canopy and add a hide and seek part to the play. I would do it by drilling out the space before the body is shaped." },
        { title:"Make the nail hinges stronger", meta:"Durability",
          body:"The metal nails the control surfaces tilt on are some of the thinnest parts on the jet, so they are the most likely to bend or fail under really rough play. Using thicker nails, or a harder material around the channel they sit in, would make the moving parts as tough as the rest of the jet without changing how they work." }
      ] },

    { t:"cards", id:"further", eyebrow:"7d · Taking the Idea Further", head:"Taking the Idea Further", cols:3,
      cards:[
        { title:"A whole squadron", meta:"Product range",
          body:"The same body and wing build would work for other aircraft like a delta wing jet, a prop plane or a helicopter. A small range that shares parts would also share spare parts, which helps repairability across the whole set." },
        { title:"Carrier playset", meta:"Play ecosystem",
          body:"A wooden aircraft carrier deck with a launch notch would give the jet a home base and turn one toy into a whole play setting. That is the same trick LEGO uses to keep kids playing for longer." },
        { title:"Folding landing gear", meta:"Mechanism v2",
          body:"My jet does not have wheels right now. A good next mechanism would be landing gear that folds up into the body on a sprung nail pivot, so the jet can fly clean and then drop its gear to land. The nail and cutout joint from this project is the perfect starting point for that." }
      ] },

    { t:"cards", id:"issues", eyebrow:"7e · Issues I Came Across", head:"Issues I Came Across", cols:2,
      cards:[
        { img:"assets/models/addl-3.jpg", title:"Flap cutout tolerance", meta:"Found in the foam model",
          body:"My first flap cutout was cut to the exact size of the flap and it jammed solid the second the nail went in. Foam squashes and wood does not, so in the real material it would have been even worse. Leaving 2 mm of clearance on every control surface cutout fixed it, and that 2 mm is now written into my production plan instead of left to memory." },
        { img:"assets/models/addl-2.jpg", title:"Nail hole alignment", meta:"Found in the additional model",
          body:"When I drilled the nail hole through the wing and the flap separately, the two holes ended up slightly out of line, so the flap turned with a wobble. The fix was drilling both parts at the same time in one go, and drawing the line first so the channel is centred. That is now built into step five of my plan." }
      ] }
  ]
}
];

/* viewer entry shown on the landing page after the 7 sections */
window.VIEWER_ENTRY = {
  id:8, slug:"viewer", title:"3D Model Viewer",
  tag:"Explore the jet, rotate · zoom · click the parts",
  accent:"#ff9d7f", deep:"#140b08", light:"#7a3a1f"
};
