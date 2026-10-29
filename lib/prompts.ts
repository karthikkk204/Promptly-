export const CATEGORIES = [
  'Men',
  'Women',
  'Couple',
  'Landscape',
  'Festival',
  'Creative',
] as const

export type Category = (typeof CATEGORIES)[number]

export type PromptItem = {
  id: string
  title: string
  image: string
  category: Category
  tags: string[]
  prompt: string
}

export const PROMPTS: PromptItem[] = [
  {
    id: 'rainy-park',
    title: 'After-Rain Park Glow',
    image: '/prompts/rainy-park.png',
    category: 'Landscape',
    tags: ['Night', 'Cinematic', 'Rain'],
    prompt:
      'Create a cinematic vertical (9:16) photograph of a quiet city park late at night, moments after rainfall. A winding cobblestone path glistens with puddles reflecting warm golden lamp posts. Tall leafy trees form a natural arch overhead, and a thin layer of mist drifts between the trunks. Color grade with deep teal shadows and soft amber highlights. Shot on a 35mm lens, shallow depth of field, ultra-detailed, photorealistic.',
  },
  {
    id: 'butterfly-portrait',
    title: 'Butterfly Halo',
    image: '/prompts/butterfly-portrait.png',
    category: 'Creative',
    tags: ['Surreal', 'Studio', 'Editorial'],
    prompt:
      'A surreal conceptual studio portrait of a young woman with warm brown skin and a sleek high black ponytail. Translucent butterfly wings in soft blue and amber hues are arranged around her head like a halo. Plain warm beige backdrop, soft diffused key light from the left, subtle rim light. Calm, confident expression looking just past the camera. Editorial magazine style, 85mm lens, 4K, photorealistic, vertical 4:5.',
  },
  {
    id: 'rooftop-golden',
    title: 'Rooftop Golden Hour',
    image: '/prompts/rooftop-golden.png',
    category: 'Men',
    tags: ['Fashion', 'Golden Hour', 'Upload Photo'],
    prompt:
      'Using the uploaded photo as the only face reference (keep face, hairstyle and skin tone unchanged), create a full-body 4K photo of a young man standing on a city rooftop at golden hour. He wears a light-blue oversized linen shirt with rolled sleeves, beige relaxed trousers and white sneakers. Warm sun flare from behind, blurred skyline in the background, relaxed hands-in-pockets pose. Fashion editorial look, photorealistic, 9:16.',
  },
  {
    id: 'forest-couple',
    title: 'Forest Trail Together',
    image: '/prompts/forest-couple.png',
    category: 'Couple',
    tags: ['Outdoor', 'Candid', 'Travel'],
    prompt:
      'Photorealistic full-body candid photo of a young couple laughing together while hiking a sunlit forest trail. Both wear earthy outdoor clothing and small backpacks. Tall eucalyptus trees and ferns line the path, with dappled sunlight filtering through the canopy. Natural, joyful interaction, shot at eye level with a 50mm lens, warm natural color grade, vertical 9:16.',
  },
  {
    id: 'desert-wanderer',
    title: 'Desert Wind Wanderer',
    image: '/prompts/desert-wanderer.png',
    category: 'Men',
    tags: ['Sunset', 'Cinematic', 'Outdoor'],
    prompt:
      'A cinematic outdoor portrait of a young man with sun-kissed skin and thick wind-swept dark hair standing among sculpted sand dunes at sunset. A long rust-colored scarf flows in the wind behind him. Long dramatic shadows across the sand, glowing orange and pink sky. Intense, thoughtful gaze toward the horizon. Wide-angle composition, rich warm tones, photorealistic, vertical 4:5.',
  },
  {
    id: 'cafe-couple',
    title: 'Cozy Cafe Date',
    image: '/prompts/cafe-couple.png',
    category: 'Couple',
    tags: ['Romantic', 'Indoor', 'Night'],
    prompt:
      'Use the two uploaded photos as face references (first: woman, second: man) and keep identities exactly the same. Create a photorealistic portrait of the couple sitting close together on a patterned velvet sofa inside a cozy industrial-style cafe at night. Warm Edison bulbs overhead, two coffee cups on a small wooden table, soft background bokeh. Relaxed, affectionate body language, 35mm lens, vertical 4:5.',
  },
  {
    id: 'paris-night',
    title: 'Paris After Dark',
    image: '/prompts/paris-night.png',
    category: 'Women',
    tags: ['Travel', 'Elegant', 'Night'],
    prompt:
      'A highly realistic cinematic nighttime portrait of an elegant young woman in a black satin slip dress standing on a riverside cafe terrace in Paris. The illuminated Eiffel Tower glows softly in the distance. Warm string lights and candlelit tables in the background, gentle breeze in her hair. Soft smile, three-quarter body framing, 85mm lens, creamy bokeh, vertical 9:16.',
  },
  {
    id: 'garden-bob',
    title: 'Garden Cafe Bob',
    image: '/prompts/garden-bob.png',
    category: 'Women',
    tags: ['Pastel', 'Daylight', 'Portrait'],
    prompt:
      'An ultra-realistic high-resolution portrait of a young woman with a chic short bob haircut sitting gracefully on a rustic wooden bench in a bright outdoor garden cafe. She wears a soft mint-green knit cardigan over a white top. Gentle daylight, airy pastel color palette, blurred greenery behind her, sweet natural smile. 50mm lens, soft film look, vertical 4:5.',
  },
  {
    id: 'diwali-night',
    title: 'Festival of Lights',
    image: '/prompts/diwali-night.png',
    category: 'Festival',
    tags: ['Diwali', 'Traditional', 'Upload Photo'],
    prompt:
      'Using the uploaded photo as the only identity reference, create an ultra-realistic cinematic night photograph of a young man in an ivory embroidered kurta holding a glowing sparkler outside a house decorated with warm string lights and rows of oil diyas on the steps. Festive warm glow, sparkling bokeh, soft smoke from the sparkler. Joyful expression, 35mm lens, vertical 9:16.',
  },
  {
    id: 'vintage-floral',
    title: 'Vintage Floral Collage',
    image: '/prompts/vintage-floral.png',
    category: 'Creative',
    tags: ['Collage', 'Retro', 'Upload Photo'],
    prompt:
      'Create a premium vintage floral fashion poster in 9:16 using the uploaded photo (keep the exact same face in every frame). Arrange three framed photo cutouts of the same smiling woman in different poses on cream textured paper, surrounded by pressed roses, peonies and dried leaves. Add subtle film grain, soft faded retro tones and a small handwritten script caption at the bottom.',
  },
  {
    id: 'mono-profile',
    title: 'Monochrome Upward Gaze',
    image: '/prompts/mono-profile.png',
    category: 'Men',
    tags: ['Black & White', 'Candid', 'Street'],
    prompt:
      'A photorealistic black-and-white candid side-profile portrait of a young man looking upward toward the sky, wearing a casual vertical-striped shirt. Soft natural daylight sculpting his jawline, slightly blurred urban background. High contrast monochrome with fine film grain, medium three-quarter framing, 85mm lens, vertical 4:5.',
  },
  {
    id: 'neon-alley',
    title: 'Neon Rain Alley',
    image: '/prompts/neon-alley.png',
    category: 'Landscape',
    tags: ['Cyberpunk', 'Night', 'Rain'],
    prompt:
      'A cinematic vertical photo of a narrow rainy alley in Tokyo at night, lined with glowing pink and cyan neon signs whose colors reflect in the wet pavement puddles. A lone figure with a clear umbrella walks away from the camera. Light haze, falling rain streaks, moody cyberpunk atmosphere, anamorphic lens look, ultra-detailed, photorealistic, 9:16.',
  },
]
