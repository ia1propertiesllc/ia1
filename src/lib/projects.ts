export type GalleryImage = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  address?: string;
  city: string;
  state: string;
  zip?: string;
  category: "Renovation" | "New Construction";
  year: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  lotSize?: string;
  stories?: number | null;
  foundation?: string | null;
  exterior?: string | null;
  heating?: string | null;
  cooling?: string | null;
  heroImage: string;
  gallery: GalleryImage[];
  shortDescription: string;
  description: string[];
  highlights: string[];
  scope: string[];
  // For renovation projects — optional before/after photo sets
  beforeAfter?: {
    before: GalleryImage[];
    after: GalleryImage[];
  };
};

export const projects: Project[] = [
  {
    slug: "135-glasmere-ct",
    title: "Winston-Salem Brick Home",
    city: "Winston-Salem",
    state: "NC",
    category: "New Construction",
    year: 2025,
    beds: 4,
    baths: 2.5,
    sqft: 2006,
    lotSize: "0.15 acres",
    stories: 2,
    foundation: "Crawl Space",
    exterior: "Brick",
    heating: "Heat Pump, Electric",
    cooling: "Central Air",
    heroImage: "/projects/glasmere-1.jpg",
    gallery: [
      { src: "/projects/glasmere-1.jpg", alt: "Brick new construction front elevation at dusk" },
      { src: "/projects/glasmere-2.jpg", alt: "Brick new construction daytime exterior" },
      { src: "/projects/glasmere-3.jpg", alt: "Chef's kitchen with quartz counters and slider doors" },
      { src: "/projects/glasmere-4.jpg", alt: "Open-concept living and dining" },
      { src: "/projects/glasmere-5.jpg", alt: "Primary bathroom with double vanity and marble tub surround" },
      { src: "/projects/glasmere-6.jpg", alt: "Staged primary bedroom" },
    ],
    shortDescription:
      "A 2,006 sqft two-story brick new build in a gated Winston-Salem community — 4 beds, 2.5 baths, high ceilings.",
    description: [
      "A 2025 IA1 new construction in a gated Winston-Salem community. At 2,006 sq ft across two stories, the home features four bedrooms, two-and-a-half baths, and an all-brick exterior for long-term durability and curb appeal.",
      "The home sits on a 6,534 sq ft lot (0.15 acres) in a gated neighborhood with community amenities including a park and security. High ceilings throughout the main level give the home a more generous feel than the footprint suggests.",
      "Built to modern efficiency standards with a heat pump system and central air — a tight, well-executed new construction on a lot that's getting harder to find, close to downtown Winston-Salem but tucked into an established residential street.",
    ],
    highlights: [
      "All-brick exterior",
      "High ceilings on main level",
      "Gated Winston-Salem community",
      "Community park and security",
      "Heat pump and central air",
      "Efficient two-story layout",
    ],
    scope: [
      "Ground-up new construction",
      "Full brick masonry exterior",
      "Interior finish and fixtures",
      "Site prep and utility hookups",
    ],
  },
  {
    slug: "1112-alamance-church-rd",
    title: "Greensboro Family Build",
    city: "Greensboro",
    state: "NC",
    category: "New Construction",
    year: 2025,
    beds: 4,
    baths: 3,
    sqft: 1680,
    lotSize: "0.52 acres",
    stories: 2,
    foundation: "Crawl Space",
    exterior: "Vinyl Siding",
    heating: "Heat Pump, Electric",
    cooling: "Central Air",
    heroImage: "/projects/alamance-1.jpg",
    gallery: [
      { src: "/projects/alamance-1.jpg", alt: "Greensboro new construction front exterior" },
      { src: "/projects/alamance-2.jpg", alt: "Kitchen with granite island and stainless appliances" },
      { src: "/projects/alamance-3.jpg", alt: "Kitchen with deck view" },
      { src: "/projects/alamance-4.jpg", alt: "Open-concept living room" },
      { src: "/projects/alamance-5.jpg", alt: "Bathroom with double granite vanity and marble tile shower" },
      { src: "/projects/alamance-6.jpg", alt: "Staged dining and kitchen" },
    ],
    shortDescription:
      "A 4-bedroom new build on half an acre — open concept, nine-foot ceilings, and a welcoming back deck.",
    description: [
      "IA1 designed and built this two-story new construction on just over half an acre of land in Greensboro. The home was built around an open-concept floor plan that seamlessly integrates the warm and cheerful living space with the heart of the home, the kitchen.",
      "Both the main and upper levels feature nine-foot ceilings. Luxury vinyl plank flooring runs throughout for beauty and durability. The home includes exquisite granite countertops and matching hardware in all the bathrooms and the kitchen.",
      "Just outside the kitchen through the sliding glass doors is a cozy, welcoming deck for outdoor living. Upstairs, four pleasantly sized bedrooms — including the primary suite — complete the plan.",
    ],
    highlights: [
      "Nine-foot ceilings on both levels",
      "Open concept living + kitchen",
      "Exquisite granite countertops",
      "Luxury vinyl plank flooring throughout",
      "Cozy back deck off the kitchen",
      "Four pleasantly sized bedrooms",
    ],
    scope: [
      "Ground-up new construction",
      "Full design and engineering",
      "Interior finishes and fixtures",
      "Site prep and exterior build",
    ],
  },
  {
    slug: "411-ne-28th-st",
    title: "Winston-Salem Modern Build",
    city: "Winston-Salem",
    state: "NC",
    category: "New Construction",
    year: 2026,
    beds: 3,
    baths: 3,
    sqft: 1442,
    lotSize: "0.17 acres",
    stories: 2,
    foundation: "Slab",
    exterior: "Vinyl Siding",
    heating: "Heat Pump, Electric",
    cooling: "Central Air",
    heroImage: "/projects/ne28th-1.jpg",
    gallery: [
      { src: "/projects/ne28th-1.jpg", alt: "Winston-Salem new construction front elevation" },
      { src: "/projects/ne28th-2.jpg", alt: "Kitchen with white shaker cabinets and granite" },
      { src: "/projects/ne28th-3.jpg", alt: "Kitchen close-up with stainless appliances" },
      { src: "/projects/ne28th-4.jpg", alt: "Staged dining area" },
      { src: "/projects/ne28th-5.jpg", alt: "Bathroom with granite vanity and marble tile shower" },
      { src: "/projects/ne28th-6.jpg", alt: "Staged living room" },
    ],
    shortDescription:
      "A two-story 3-bed build — tiled showers, stainless kitchen, covered front porch, close to everything.",
    description: [
      "A beautiful two-story new construction built by IA1 in Winston-Salem. The home features three bedrooms and two-and-a-half bathrooms, designed for both comfort and functionality.",
      "You enter from a covered front porch into an open floor plan throughout the main level. The kitchen is equipped with granite countertops and stainless steel appliances for a modern aesthetic and long-term durability. Vinyl plank flooring throughout offers style and practicality for everyday living.",
      "The upstairs bathroom has a tub with gorgeous tiled walls, while the primary bathroom has a sleek floor-to-ceiling tiled walk-in shower. All complemented by matching hardware that adds a cohesive touch to the overall design. Nice-sized laundry room and a back patio round out the program.",
    ],
    highlights: [
      "Covered front porch",
      "Open main-level floor plan",
      "Granite counters + stainless steel appliances",
      "Floor-to-ceiling tiled primary shower",
      "Nice-sized laundry room",
      "Vinyl plank flooring throughout",
    ],
    scope: [
      "Ground-up new construction",
      "Full design and permitting",
      "Interior tile and finish work",
      "Site prep and landscaping",
    ],
  },
  {
    slug: "576-twain-dr",
    title: "Asheboro Acreage Home",
    city: "Asheboro",
    state: "NC",
    category: "New Construction",
    year: 2024,
    beds: 3,
    baths: 2,
    sqft: 1320,
    lotSize: "2.92 acres",
    stories: 1,
    foundation: "Crawl Space",
    exterior: "Vinyl Siding",
    heating: "Heat Pump, Electric",
    cooling: "Heat Pump",
    heroImage: "/projects/twain-1.jpg",
    gallery: [
      { src: "/projects/twain-1.jpg", alt: "Asheboro new construction front exterior" },
      { src: "/projects/twain-2.jpg", alt: "Open kitchen with white cabinets and granite" },
      { src: "/projects/twain-3.jpg", alt: "Kitchen with island view" },
      { src: "/projects/twain-4.jpg", alt: "Bathroom with marble tile shower and granite vanity" },
      { src: "/projects/twain-5.jpg", alt: "Kitchen wide angle" },
      { src: "/projects/twain-6.jpg", alt: "Bedroom with ceiling fan" },
    ],
    shortDescription:
      "Single-level new build on nearly 3 acres at the end of a cul-de-sac — privacy, space, and modern comfort.",
    description: [
      "IA1 built this single-level new construction at the end of a cul-de-sac in Asheboro, delivering privacy, space, and modern comfort. The thoughtfully designed plan features three bedrooms and two full bathrooms.",
      "Set on almost three acres of land, the property provides endless possibilities to enjoy nature, create outdoor living spaces, garden, or simply soak in the serenity of the surroundings. The expansive lot offers a rare blend of open space and seclusion while still feeling connected to a welcoming neighborhood.",
      "Inside, the floor plan is bright and open with modern finishes, quality craftsmanship, and a seamless flow between living, dining, and kitchen areas.",
    ],
    highlights: [
      "Nearly 3 acres at end of cul-de-sac",
      "Bright, open single-level layout",
      "Modern finishes throughout",
      "Quality craftsmanship",
      "Attached garage with opener",
      "Main-level laundry",
    ],
    scope: [
      "Full ground-up construction",
      "Lot clearing and site prep",
      "Interior finish and fixtures",
      "Garage build-out",
    ],
  },
  {
    slug: "501-lawndale-ave",
    title: "High Point Ranch Home",
    city: "High Point",
    state: "NC",
    category: "New Construction",
    year: 2024,
    beds: 3,
    baths: 2,
    sqft: 1255,
    lotSize: "0.29 acres",
    stories: 1,
    foundation: "Slab",
    exterior: "Vinyl Siding",
    heating: "Heat Pump, Electric",
    cooling: "Central Air",
    heroImage: "/projects/lawndale-1.jpg",
    gallery: [
      { src: "/projects/lawndale-1.jpg", alt: "High Point new construction front exterior" },
      { src: "/projects/lawndale-2.jpg", alt: "Kitchen with white cabinets and granite counters" },
      { src: "/projects/lawndale-3.jpg", alt: "Kitchen close-up" },
      { src: "/projects/lawndale-4.jpg", alt: "Staged dining and kitchen" },
      { src: "/projects/lawndale-5.jpg", alt: "Primary bathroom with granite vanity and marble tile shower" },
      { src: "/projects/lawndale-6.jpg", alt: "Staged primary bedroom" },
    ],
    shortDescription:
      "A single-level new build in High Point — 3 beds, 2 baths, clean modern finishes, move-in ready.",
    description: [
      "A 2024 IA1 new construction in the heart of High Point — a 1,255 sq ft single-level home with three bedrooms, two full bathrooms, and a smart, efficient floor plan.",
      "Built on a 0.29-acre slab foundation with vinyl siding exterior, the home pairs low-maintenance materials with clean interior finishes. The open-concept main living space flows into the kitchen with modern cabinetry and appliances.",
      "A compact, efficient plan with no wasted space — the kind of project where smart layout decisions make a small footprint feel much bigger.",
    ],
    highlights: [
      "Single-level open floor plan",
      "Slab foundation — no steps to entry",
      "Low-maintenance vinyl exterior",
      "Central air and heat pump system",
      "Driveway parking",
      "Efficient, no-wasted-space layout",
    ],
    scope: [
      "Ground-up new construction",
      "Foundation and slab work",
      "Full interior finish",
      "Landscaping and driveway",
    ],
  },
  {
    slug: "8189-rylan-dr",
    title: "Browns Summit Stone Estate",
    city: "Browns Summit",
    state: "NC",
    category: "New Construction",
    year: 2024,
    beds: 4,
    baths: 3,
    sqft: 2248,
    lotSize: "0.92 acres",
    stories: 2,
    foundation: "Crawl Space",
    exterior: "Cement Siding, Stone",
    heating: "Heat Pump, Electric",
    cooling: "Central Air",
    heroImage: "/projects/rylan-2.jpg",
    gallery: [
      { src: "/projects/rylan-1.jpg", alt: "Browns Summit estate front elevation with stone accents" },
      { src: "/projects/rylan-2.jpg", alt: "Browns Summit estate exterior angle" },
      { src: "/projects/rylan-3.jpg", alt: "Kitchen with island and granite counters" },
      { src: "/projects/rylan-4.jpg", alt: "Kitchen wide angle with stainless appliances" },
      { src: "/projects/rylan-5.jpg", alt: "Primary bathroom with double granite vanity and marble tub surround" },
      { src: "/projects/rylan-6.jpg", alt: "Open living and dining" },
    ],
    shortDescription:
      "IA1's flagship 2024 build — 2,248 sqft two-story with cement board and stone exterior on nearly an acre.",
    description: [
      "One of IA1's largest 2024 builds: a 2,248 sq ft, four-bedroom, three-bath two-story home on a 0.92-acre lot in Browns Summit.",
      "The exterior combines cement board siding with stone accents — a durable, upscale pairing that holds up to the North Carolina climate while giving the home serious curb appeal. Inside, the two-story layout features four bedrooms, two-and-a-half baths, and a main-level living area built around an open kitchen.",
      "Quality construction on a generous lot, in a family-friendly Guilford County community — the kind of build that anchors a neighborhood.",
    ],
    highlights: [
      "Cement board + stone exterior",
      "Two-story, 2,248 sqft layout",
      "Nearly an acre of land",
      "Four bedrooms, 2.5 baths",
      "Main-level living and dining",
      "Crawl space foundation",
    ],
    scope: [
      "Full custom ground-up build",
      "Stone masonry exterior accents",
      "Structural framing and finish",
      "Site work on 0.92-acre lot",
    ],
  },
  {
    slug: "interior-renovation-triad",
    title: "Garage Conversion to Living Space",
    city: "North Carolina",
    state: "NC",
    category: "Renovation",
    year: 2026,
    heroImage: "/projects/fix1-after-2.jpg",
    gallery: [
      { src: "/projects/fix1-after-1.jpg", alt: "Garage conversion finished living space" },
      { src: "/projects/fix1-after-2.jpg", alt: "Garage conversion finished detail" },
      { src: "/projects/fix1-before-1.jpg", alt: "Original garage before conversion" },
      { src: "/projects/fix1-before-2.jpg", alt: "Original garage interior" },
    ],
    shortDescription:
      "An existing garage transformed into a full living space with a bathroom — 2–3 months start to finish, adding square footage to the home.",
    description: [
      "IA1 Construction transformed an existing garage into a full living space, complete with a full bathroom, increasing the home's total square footage. The project took 2 to 3 months from start to finish.",
    ],
    highlights: [
      "Garage converted to permitted living space",
      "Full bathroom added",
      "Increased total home square footage",
      "Finish carpentry and trim work",
      "New flooring, paint, and fixtures",
      "2–3 month timeline",
    ],
    scope: [
      "Permitting for habitable space",
      "Insulation, drywall, and finish work",
      "Plumbing rough-in and bathroom build",
      "Electrical and HVAC integration",
    ],
    beforeAfter: {
      before: [
        { src: "/projects/fix1-before-1.jpg", alt: "Before — garage in original condition" },
        { src: "/projects/fix1-before-2.jpg", alt: "Before — garage interior" },
      ],
      after: [
        { src: "/projects/fix1-after-1.jpg", alt: "After — finished living space" },
        { src: "/projects/fix1-after-2.jpg", alt: "After — finished living space detail" },
      ],
    },
  },
  {
    slug: "full-home-transformation",
    title: "Full Home Transformation",
    city: "North Carolina",
    state: "NC",
    category: "Renovation",
    year: 2025,
    heroImage: "/projects/fix2-after-1.jpg",
    gallery: [
      { src: "/projects/fix2-after-1.jpg", alt: "Transformed home — finished view" },
      { src: "/projects/fix2-after-2.jpg", alt: "Transformed home — finished detail" },
      { src: "/projects/fix2-after-3.jpg", alt: "Transformed home — third finished view" },
      { src: "/projects/fix2-before-1.jpg", alt: "Home before IA1 transformation" },
      { src: "/projects/fix2-before-2.jpg", alt: "Home before IA1 — second view" },
    ],
    shortDescription:
      "From a worn-down, hard-to-love property to a fully transformed home — a top-to-bottom IA1 renovation.",
    description: [
      "This property came to IA1 in rough shape: deferred maintenance, outdated systems, and rooms that just didn't work for the owners. The house had good bones, but it needed real work to feel like home again.",
      "IA1 took the project on end-to-end. Structural repairs and mechanical systems came first, then interior reconfiguration, then finishes. Every phase built on the last, toward a final result that the owners actually wanted to live in.",
      "The finished home is unrecognizable from the starting point — but that's exactly the idea. This is what a well-sequenced, patient renovation looks like when it's done right.",
    ],
    highlights: [
      "Full-scope renovation",
      "Structural repairs and stabilization",
      "Complete mechanical and electrical refresh",
      "Interior reconfiguration",
      "All-new finishes and fixtures",
      "Delivered 2025",
    ],
    scope: [
      "Full renovation planning",
      "Structural and mechanical work",
      "Interior rebuild and finishes",
      "Ongoing client coordination",
    ],
    beforeAfter: {
      before: [
        { src: "/projects/fix2-before-1.jpg", alt: "Before — starting condition" },
        { src: "/projects/fix2-before-2.jpg", alt: "Before — second view" },
      ],
      after: [
        { src: "/projects/fix2-after-1.jpg", alt: "After — finished view" },
        { src: "/projects/fix2-after-2.jpg", alt: "After — finished detail" },
        { src: "/projects/fix2-after-3.jpg", alt: "After — third finished view" },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
