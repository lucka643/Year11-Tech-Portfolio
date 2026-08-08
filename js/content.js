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
      simple:{ t:"tabtable", heads:["Information Needed","Resources"] },
      tabs:[
        { label:"Repairability", title:"Repairability",
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
          dl:[["Repairability","Not repairable at all. The axles are pressed into the metal base, so if a wheel snaps off there is no way to get it apart without wrecking it. At under three dollars nobody is going to try either, they will just buy another one. That is convenient for the shop but it is exactly the throwaway habit my project is trying to get away from."],
              ["Material","A die-cast metal body with a plastic base, plastic windows and plastic wheels. The metal shell is what makes it feel solid and gives it that satisfying weight in your hand, but the parts most likely to break are the plastic ones."],
              ["Aesthetics","Small but really detailed for the size, with a proper paint job and printed badges. The bright red and the realistic Camaro shape are what make you pick it up off the shelf. It is aimed at collectors as much as kids, which is why so much of the money goes on how it looks rather than what it does."],
              ["Playability","It rolls really well, which is basically its whole trick. On a track or a smooth floor it is fun for a few minutes, but there is nothing to move, open or change, so the play runs out fast. Kids tend to fix that by owning twenty of them instead of playing longer with one."],
              ["Manufacturing","Mass-produced in huge numbers using die-casting and injection moulding, which is why it can sell for a couple of dollars and be in every shop. The trade off is that the quality is only as good as the batch, and none of it is made to be taken apart or fixed."],
              ["Environment","The metal body could be recycled in theory, but it is stuck to plastic parts that cannot be separated easily, so almost all of them end up in the bin. Because they are so cheap they get replaced constantly, which makes the waste problem worse than the materials alone suggest."],
              ["Ergonomics","Small and light enough for even a toddler to hold in one hand, and easy to push along the floor. The downside of being that small is that it is a choking risk for the younger end of my target market, so it really only suits older kids."]] },
        { title:"Buzzy Bee Pull Toy", meta:"Buzzy Bee · ≈ $39.95 NZD", img:"assets/products/buzzy-bee.png",
          dl:[["Repairability","Much more repairable than a plastic toy. It is screwed and glued wood, so a cracked wing or a snapped string can be replaced at home with basic tools. Buzzy Bees get handed down between generations in New Zealand, which only happens because they can be patched up instead of thrown out."],
              ["Material","Solid wood with non-toxic paint and a pull string. The wood takes knocks without shattering the way thin plastic does, and because it is a natural material it does not feel cold or cheap in your hands."],
              ["Aesthetics","Bright red, yellow and blue in a shape almost every New Zealander recognises instantly. The design has barely changed since the 1940s, which tells me a simple, bold shape in strong primary colours does not go out of style. Parents buy it partly because they had one themselves."],
              ["Playability","Easy for a toddler to pull along, and the wings spinning and the clicking noise give instant feedback for every step they take. That reward loop is what keeps a very young kid coming back to it, and it is the same idea I am using with the moving flaps on my jet."],
              ["Manufacturing","Made the traditional way from turned and cut wood rather than moulded in one shot, so each one takes longer to produce and costs more. That is why it is nearly forty dollars instead of three, but it also means it is built to survive being dragged around for years."],
              ["Environment","Wood is renewable and will break down at the end of its life, unlike plastic. Because it lasts long enough to be handed down, one Buzzy Bee replaces what might otherwise be several plastic toys, so the real environmental saving is bigger than just the material."],
              ["Ergonomics","The pull string means a toddler who is only just walking can use it without needing any grip strength or coordination. It is light, low to the ground and stable, so it does not tip over and pull them off balance."]] }
      ] },

    { t:"cards", id:"pa2", eyebrow:"2b · Product Analysis #2", head:"Product Analysis #2", cols:2, imgFit:"product",
      cards:[
        { title:"Shape-Sorting Dump Truck", meta:"Melissa & Doug · ≈ $26.99 USD", img:"assets/products/md.png",
          dl:[["Repairability","Fairly repairable because there is no electronics and nothing complicated inside. If a wheel comes loose it can be re-glued, and even if a couple of the shape blocks go missing the truck still works as a truck. Losing one part does not kill the whole toy, which is exactly what I want for mine."],
              ["Material","Wood for the truck with nine painted wooden shape blocks and two little wooden figures. Using wood for the blocks matters here because they are the parts that get chewed, thrown and stood on the most."],
              ["Aesthetics","Friendly rounded shapes in bright block colours, and it clearly reads as a learning toy the moment you look at it. The colours are doing two jobs at once, catching a kid's eye and teaching them to match a shape to a hole."],
              ["Playability","It does two things instead of one. You can push it around like a normal truck, and you can sort the shapes through the holes and tip them out of the back. Having two ways to play with it is why it holds a young kid's attention far longer than a single-purpose toy."],
              ["Manufacturing","Built as a chunky wooden educational toy with thick parts and no thin details to snap off. It is clearly designed around surviving a preschool rather than looking delicate on a shelf."],
              ["Environment","The wood construction means it lasts for years and can be passed on to the next kid, which cuts down how many toys get bought and binned. The painted finish does make it harder to recycle at the very end of its life."],
              ["Ergonomics","The blocks are big enough to grab with a whole fist, which suits a toddler who has not developed a proper pinch grip yet. Every edge is rounded and sanded smooth, and nothing is small enough to swallow."]] },
        { title:"Creator 3-in-1 Sports Car", meta:"Lego · ≈ $26.99 USD", img:"assets/products/lego.png",
          dl:[["Repairability","The most repairable toy I looked at. Every brick is a separate part, so a lost or broken piece can be replaced on its own and Lego will even post you spares. Nothing is glued, so the whole thing comes apart and goes back together as many times as you like."],
              ["Material","Injection-moulded ABS plastic bricks. The plastic is genuinely tough and the moulding is accurate enough that bricks from decades ago still clip together, but it is still oil-based plastic that will not break down."],
              ["Aesthetics","Bright red with black and white detailing and a sporty low shape that looks fast sitting still. Because it builds into three different vehicles, it never looks like a finished object you get bored of, and that is a big part of the appeal."],
              ["Playability","Very high play value. Building it is half the fun, then you can play with it, pull it apart and build something else. That rebuilding is what makes it last months rather than days, and it is the one area where my jet cannot really compete."],
              ["Manufacturing","Mass-produced to very tight tolerances, so every brick grips with the same firmness. That precision is the whole product, because a Lego brick that is even slightly out of spec is useless. It is a level of accuracy I could never reach in a school workshop."],
              ["Environment","The bricks last for decades and get reused constantly, so they are not really disposable. But it is still plastic, it is not biodegradable, and a set this size uses a lot of it. Lego are trying plant-based plastics now, which shows even they see the problem."],
              ["Ergonomics","The brick size suits kids from about six upwards who have the finger strength to push them together. For a 3 year old they are too small and too fiddly, and they are a choking hazard, which is why the box says 6 plus."]] }
      ] },

    { t:"cards", id:"aesthetics", eyebrow:"2c · Aesthetics Analysis", head:"Aesthetics Analysis", cols:4, imgFit:"contain",
      cards:[
        { img:"assets/aesthetics/rubiks.png", title:"Colour", body:"Bright primary colours like red, blue and yellow attract attention and create excitement. Complementary colours (opposites on the colour wheel) help products stand out, and the Rubik's Cube is instantly recognisable because of its bold, contrasting faces." },
        { img:"assets/aesthetics/smooth.png", title:"Feel: smooth", body:"Smooth surfaces feel comfortable, safe and pleasant to touch, giving a higher quality feel that suits children's products. A smooth sanded finish is also splinter free, which is really important for a wooden toy." },
        { img:"assets/aesthetics/rough.png", title:"Feel: rough", body:"Rough surfaces feel unfinished and less appealing. Sharp or uneven textures reduce safety and comfort, which is exactly what my sanding and finishing stages have to get rid of." },
        { img:"assets/aesthetics/needoh.png", title:"Example: NeeDoh", body:"Vibrant, playful colours and a soft, squishy texture that is relaxing to squeeze. Its success shows how much the way a toy feels drives repeated sensory play." }
      ] },

    { t:"deck", id:"wood", eyebrow:"2d · Materials", head:"Materials",
      simple:{ t:"xdeck" },
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
      simple:{ t:"xdeck" },
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
      simple:{ t:"xdeck" },
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
      simple:{ t:"xdeck" },
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
      simple:{ t:"xdeck" },
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
        ], fig:{ img:"assets/ergonomics/hand-sizes.jpg",
          note:"This shows average hand sizes for different age groups. This will help me build my toy the right size in theory." }},
        { h:"Made for Audience", ps:[
          "It's designed for children aged 3 to 8, who learn through play and are rough with their toys. Every surface must be smooth with rounded edges and no sharp points, and parts must be too big to swallow.",
          "Bold colours and moving parts, the wings, ailerons and opening canopy, keep children engaged, while the durable wooden build survives drops, throws and being stepped on. Parents, the actual buyers, get a safe, long-lasting, eco-friendly toy."
        ], fig:{ img:"assets/ergonomics/big-blocks.jpg",
          note:"The product in this image uses big sized blocks, which is easy for toddlers to interact with." }}
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
      simple:{ t:"tabtable" },
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
      simple:{ t:"gallery", tall:true, body:null,
        imgs:[ { src:"assets/sketches/sheet-1.jpg" }, { src:"assets/sketches/sheet-2.jpg" }, { src:"assets/sketches/sheet-3.jpg" } ] },
      body:"All twenty-two of my hand-drawn concepts, stacked like a deck of cards. Move the top drawing aside to send it to the back and bring up the next one.",
      items:[
        { img:"assets/sketches/items/golf-cart.jpg", title:"Golf Cart", text:"+17 pieces · complex design. A realistic cart with working steering and wheels, fun, but a lot of fiddly parts for the play value it gives back." },
        { img:"assets/sketches/items/flatbed-truck.jpg", title:"Flatbed Truck", text:"10 pieces · complex design. Working doors and wheels with a flat deck for carrying other toys. Solid, but very similar to toys already everywhere." },
        { img:"assets/sketches/items/digger.jpg", title:"Digger", text:"12 pieces · complex design. Role-play and realism in one, a strong yellow/black identity. Made the final shortlist of four." },
        { img:"assets/sketches/items/helicopter.jpg", title:"Helicopter", text:"7 pieces · simple design, easy to make. Aimed at a younger audience with a smaller propeller for safety." },
        { img:"assets/sketches/items/nfl.jpg", title:"NFL Game", text:"+13 pieces · simple design, interactable. A figure throws the ball into hoops for points, and magnets let the figure be moved around the board." },
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
        { img:"assets/sketches/items/whack-a-mole.jpg", title:"Whack-a-Mole", text:"12 pieces · interactable. Flip the object to restart the game. The hammer is reinforced to survive enthusiastic whacking. Made the final shortlist." },
        { img:"assets/sketches/items/toy-camera.jpg", title:"Toy Camera", text:"14 pieces · a fake camera prop for role-play, with working buttons and dial. Realistic." },
        { img:"assets/sketches/items/tool-box.jpg", title:"Tool Box", text:"10 pieces · role-play and pretend. Sharp or dangerous edges removed or dulled. It comes with a case for storage including a right-angle ruler, screwdriver with bits, saw and caliper. Made the final shortlist." },
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

    { t:"gallery", id:"first-model", eyebrow:"4a · First Model", head:"First Model", three:true,
      body:"My first model was cut out of foam. The point was not to make it look pretty. It was to get the proportions right and to work out how many parts the jet actually needs. Building it taught me a lot. The foam model has twin tails and I really liked how that looked, so I am keeping twin tails on the real jet instead of the single tail from my first sketch. It also helped me see which parts I actually needed and let me count up the real part list before cutting any real material.",
      imgs:[
        { src:"assets/models/foam-1.jpg", cap:"Front view" },
        { src:"assets/models/foam-tails.jpg", cap:"Twin tails lifted, showing their nails" },
        { src:"assets/models/foam-3.jpg", cap:"All parts laid out" },
        { src:"assets/models/foam-5.jpg", cap:"Top view, bird's eye" },
        { src:"assets/models/foam-6.jpg", cap:"Rear view" },
        { src:"assets/models/foam-7.jpg", cap:"Exploded view, every part on its rods" }
      ] },

    { t:"gallery", id:"additional-model", eyebrow:"4b · Additional Model", head:"Additional Model", feature:true,
      body:[
        "My second model is all about the most important moving part on the jet, which is the control surface. The way it works is we use metal nails as the rod. On the main wing a cutout is made on the flap, and a little bit of the main wing sticks out and sits inside that hole in the flap. Then we drill holes that go through the flap and through that sticking out bit of the wing, and the metal nail goes inside that hole. That nail is what the flap tilts on.",
        "The tolerances really matter here. If the gaps are too small then it is too tight and the flap is hard to rotate, which is not fun and not good for playing with. If the gaps are too big then it rotates too loosely and the flap just flops down under gravity. Getting that gap right was the whole point of building this model instead of guessing.",
        "We use the same idea for the elevators and the rudders, but the wing flap is a little bit different. On the elevators and rudders the whole flap has one nail going all the way through it, and the holes are on the inside of the wing. So there is no cutout in the flap and no bit of the wing sticking out, which is the only real difference between them and the main wings."
      ],
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
          body:"After looking at my foam model next to children's hand sizes, going about 1.5 times bigger than the foam felt right. That works out at around 400 mm in length with a wingspan of somewhere between 400 and 450 mm. That is big enough that every part is safely oversized for a 3 year old, but still small enough to hold in two hands and fly around." },
        { title:"Materials", meta:"From research and testing",
          body:"Pine for the main body and the canopy, because it is easy to shape and sand. MDF for the wings and the flaps, because it was the right thickness and was easy to find in my workshop. MDF was fine to cut on the bandsaw, but it was a nightmare to sand and to drill holes in, especially the holes for the rods. Metal nails are used as the axles and as the rods that the control surfaces tilt on." },
        { title:"Finish", meta:"Changed my mind after the test board",
          body:"I have gone with paint in the end, not a clear finish. First I sanded every part smooth, then I sprayed the whole lot with a white base coat so the colours would sit even and the MDF edges would stop soaking up paint. Once that was dry I sprayed the real colours on: blue for the main body, orange for the intakes, and green for the wings, ailerons, rudders and flaps. I used gloss spray, so it dries shiny and hard. The shine is not just for looks. A gloss coat wipes clean when a kid gets jam on it, and it seals the wood so it does not swell or splinter. Spray also gets into the corners around the intakes that a brush would have missed, and once it is properly cured the paint is non toxic, which matters for a toy a 3 year old is going to chew on. The bright colours came straight out of my colour research, where the toys that grabbed kids the fastest were the bold ones." },
        { title:"Modifications", meta:"From both models",
          body:"My first sketch had a single tail, but I have gone to twin tails like my foam model because I liked how that looked. I have also decided to only put moving flaps on the main wings. The elevators and rudders are staying fixed, because those parts are thin and a moving flap on them would be too fragile for a kid's toy and would snap off first. The flap cutouts get 2 mm of clearance after the foam flap jammed when it was cut too tight. The main body is made from two pieces of pine, a bottom piece and a top piece, and the canopy is part of that top piece so it does not have to be cut out separately." }
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

    { t:"notes", id:"diary", eyebrow:"5c · Diary of Making", head:"Diary of Making",
      entries:[
        { img:"assets/build/diary-1.jpg", cap:"Cutting the wings out on the bandsaw",
          p:"Cutting the wings out on the bandsaw. I had drawn the shape on in pencil off my working drawing, and then it was just a case of following the line slowly and not rushing the corners. The swept bit at the back is the part I was worried about, because if I wandered off the line there the two wings would not match and you would notice straight away when they were both on the jet. I kept both hands flat on the board and well back from the blade the whole way through. MDF cuts pretty easily on the bandsaw, which was a nice surprise after how much of a pain it was to sand." },
        { img:"assets/build/diary-2.jpg", cap:"Rounding the wing edge on the sander",
          p:"Sanding the edge of the wing round on the linisher. A real wing is not a flat slab with square edges, so rounding the edge off makes it look a lot more like an actual aircraft wing instead of a bit of board. It is also safer, because a square MDF edge is sharp enough to mark you and this toy is going to a little kid. This took ages to get even along the whole length, and I had to keep stopping to check I was not taking more off one end than the other. It is one of those jobs that is boring while you are doing it and then makes a big difference once you stand back and look at it." }
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

    { t:"gallery", id:"build-photos", eyebrow:"6b · Development Photos", head:"Development Photos", three:true,
      imgs:[
        { src:"assets/build/dev-1.jpg" },
        { src:"assets/build/dev-2.jpg" },
        { src:"assets/build/dev-3.jpg" },
        { src:"assets/build/dev-4.jpg" },
        { src:"assets/build/dev-5.jpg" },
        { src:"assets/build/dev-6.jpg" }
      ] }
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

    { t:"reviews", id:"reviews", eyebrow:"7b · Product Review & Feedback", head:"Product Review & Feedback",
      people:[
        { label:"Student 1", img:"assets/reviews/student-1.jpg", name:"Monty Alderton", ps:[
          "First thing I did was grab it and start flicking the flaps, which probably tells you what the best bit is. They actually move, which I was not expecting from a wooden one. It is heavier than it looks. I thought that would be a bad thing but it kind of is not, it just feels like it was properly made instead of the plastic stuff that feels hollow. The colours work, the orange on the intakes especially. If I had to pick something, the flaps do drop back down on their own if you let go, so you cannot really leave them set where you want them. Would 100% have played with this when I was little."
        ]},
        { label:"Student 2", img:"assets/reviews/student-2.jpg", name:"Millar Ormsby", ps:[
          "It looks like an actual fighter jet, not just a plane shape, and I reckon that is the two tails at the back doing it. You can tell it is wood and not plastic when you hold it, and it does not feel like it would snap if you dropped it, which is more than I can say for most toys my little cousin owns. I kept opening and shutting the canopy and it held up fine, and that is exactly the part a little kid would not leave alone. The paint job is class in person, better than in photos. Only thing is it is a decent weight, so a really young kid might struggle to carry it round for long."
        ]}
      ],
      personal:{ head:"Personal review", name:"Luca Carlisle", ps:[
        "Putting the finished jet next to my brief, the moving flaps are the thing that made the whole build worth it. That was the reason I picked this over the digger or the tool box in the first place, and it is the first thing everyone goes for when they pick it up, so at least that part of my research was right. The MDF was the worst decision I made. It cut fine but it fought me the entire way through sanding and drilling, and I would use pine or a proper hardwood for the wings if I did it again. I changed my mind on the finish partway through and painted it instead of leaving the wood bare, and I am glad I did, because the blue and orange make it look like something off a shelf rather than a school project. What I would fix next is the flaps holding their position, and I would give myself more time on the assembly, because pinning the wings through the body was way fiddlier than my plan made it sound."
      ]} },

    { t:"cards", id:"modifications", eyebrow:"7c · Modifications & Adjustments", head:"Modifications & Adjustments", cols:2,
      cards:[
        { title:"Make the flaps hold position", meta:"Feel and friction",
          body:"The thing I would work on most is how much resistance the flaps have on their nails. Right now they turn, but they do not really stay where you leave them. What I want is for a kid to be able to set a flap halfway up and have it sit there, so it feels like they have actually changed something on the plane. Too loose and it just drops back down under its own weight, too tight and a little kid cannot shift it at all. Getting that middle ground is the tricky part. I would try it by slowly opening the hole out in tiny steps and testing after each one, or by putting something thin between the flap and the wing to add a bit of grip. On the foam model I only tested whether the flap moved, not whether it would hold, and now that I have seen the real one I think holding position is the bit that actually makes it feel good to play with." },
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
