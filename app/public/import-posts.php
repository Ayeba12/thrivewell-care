<?php
/**
 * Importer Script: Seed 20 dynamic eldercare guides into local WordPress database.
 * Usage: Visit http://thrivewell-care.local/import-posts.php?key=thrivewell_sync
 */

require_once( dirname( __FILE__ ) . '/wp-load.php' );
require_once( ABSPATH . 'wp-admin/includes/taxonomy.php' );

// Protect execution with a secure query parameter key
if ( $_GET['key'] !== 'thrivewell_sync' ) {
    die( 'Access Denied: Please run this script by visiting http://thrivewell-care.local/import-posts.php?key=thrivewell_sync' );
}

$articles_to_seed = [
    // --- Funding (5 posts) ---
    [
        'title' => 'Navigating Attendance Allowance in West Lothian: A Step-by-Step Guide',
        'category' => 'Funding',
        'excerpt' => 'Learn how to apply for Attendance Allowance in West Lothian, including eligibility requirements and tips for filling out the forms.',
        'content' => 'Attendance Allowance is a non-means-tested benefit for people over state pension age who need help with personal care or supervision due to an illness or disability. Currently, it is paid at two rates depending on the level of care required.

To apply in West Lothian, you need to request form AA1A from the Department for Work and Pensions (DWP). Filling in the form requires detailing how your condition affects your daily routines. Focus on explaining what help you need, not just the help you currently receive.

Our care coordinators frequently assist families in West Lothian to complete these applications to ensure they secure the funding necessary to cover visiting care services.'
    ],
    [
        'title' => 'How Local Councils Calculate Care Contributions in Scotland',
        'category' => 'Funding',
        'excerpt' => 'An overview of the financial assessment process used by Scottish local authorities to determine home care contributions.',
        'content' => 'In Scotland, although personal care is free, non-personal care services (such as help with grocery shopping, housework, or social activities) are subject to a financial assessment. This is sometimes called a charge-assessment.

The local council will assess your weekly income, savings, and capital assets. In Scotland, if your savings are below the lower capital threshold, you may not have to contribute towards non-personal care. Savings above the upper threshold mean you must cover the full cost of these specific social care hours.

It is important to keep personal care tasks separate from social care hours during assessments to maximize your free allowances under Scottish social work guidelines.'
    ],
    [
        'title' => 'A Family Checklist for NHS Continuing Healthcare (CHC) in Eldercare',
        'category' => 'Funding',
        'excerpt' => 'A checklist for families navigating the complex assessments for NHS Continuing Healthcare funding.',
        'content' => 'NHS Continuing Healthcare (CHC) is a package of care funded solely by the NHS for individuals with significant, complex, and ongoing healthcare needs. Unlike standard local authority social support, CHC is non-means-tested and covers all care costs.

To secure CHC, an individual must undergo a strict multi-disciplinary assessment. The assessment evaluates the nature, intensity, complexity, and unpredictability of the needs to establish a "primary health need."

Prepare for the assessment by compiling a detailed folder of medical histories, daily logs, behavior charts, and clinical records. Having professional care logs from providers like Thrivewell is critical to demonstrating ongoing needs.'
    ],
    [
        'title' => 'Understanding Capital Limits and Home Care Thresholds in Scotland',
        'category' => 'Funding',
        'excerpt' => 'We explain the current capital limits and savings thresholds that dictate home care funding in Scotland.',
        'content' => 'When assessing eligibility for funding non-personal care, local councils look at your capital assets, which include savings, investments, and second properties. The value of your primary residence is excluded if you are receiving care in your own home.

Under Scottish thresholds, capital below the lower limit is fully ignored. Capital between the lower and upper limits incurs a tariff income calculation, while capital above the upper limit requires self-funding.

Because the limits are updated annually, check with your social worker or a financial advisor to verify your current standing. Free Personal Care remains free regardless of these savings thresholds.'
    ],
    [
        'title' => 'How Self-Directed Support Option 1 Direct Payments Empower Families',
        'category' => 'Funding',
        'excerpt' => 'Learn how choosing SDS Option 1 allows you to direct your budget to choose Thrivewell Care.',
        'content' => 'Self-Directed Support (SDS) is Scotland’s framework for social care delivery. Option 1, also known as a Direct Payment, gives the client or their family maximum control over their allocated care budget.

Under Option 1, the local council pays the care budget directly into a dedicated bank account. You can then use these funds to purchase care hours from your chosen agency, such as Thrivewell Care, rather than relying on council-allocated providers.

This allows families to select consistent, matched carers who visit at times that suit their routines, creating a much more stable and personalized home care experience.'
    ],

    // --- Dementia Support (5 posts) ---
    [
        'title' => 'Effective Communication Cueing for Later Stage Dementia',
        'category' => 'Dementia Support',
        'excerpt' => 'Practical tips on verbal and non-verbal communication methods for families supporting a senior with advanced dementia.',
        'content' => 'As dementia progresses, standard verbal communication becomes increasingly challenging. In the later stages of Alzheimer’s and other forms of dementia, non-verbal cues and simple, structured sentences become the primary tools for connection.

Always approach the person from the front, make eye contact, and speak slowly in a calm, low tone of voice. Use short, single-step prompts rather than multi-step requests. For example, say "Please sit here" instead of "Let\'s go sit down and have some tea."

Combine your words with gentle physical gestures, like pointing to a chair or holding out a cup, to help the individual process your request without feeling overwhelmed.'
    ],
    [
        'title' => 'How to Deal with Repetitive Questions in Dementia Care',
        'category' => 'Dementia Support',
        'excerpt' => 'Understand the anxiety behind repetitive questioning in dementia patients and how to respond constructively.',
        'content' => 'It is common for individuals with dementia to ask the same question repeatedly, such as "When are we leaving?" or "Where is my bag?" This behavior is often driven by underlying anxiety or a feeling of insecurity.

Rather than pointing out that they have already asked the question, respond to the emotion behind the words. Acknowledge their concern with a reassuring tone. Reassure them that they are safe and that everything is taken care of.

Using visual aids, like a clear whiteboard displaying the day’s schedule, can provide a helpful anchor. Alternatively, calmly redirecting their attention to a pleasant activity can break the loop.'
    ],
    [
        'title' => 'Sundowning: Managing Late-Afternoon Confusion in Alzheimer\'s Care',
        'category' => 'Dementia Support',
        'excerpt' => 'Practical strategies to help manage and soothe sundowning behaviors in the late afternoon.',
        'content' => 'Sundowning refers to a state of increased confusion, anxiety, and agitation that occurs in some dementia patients in the late afternoon or early evening. The exact cause is unknown, but it is often linked to fatigue or disruption of the biological clock.

To minimize sundowning symptoms, close the curtains and turn on bright indoor lights before the sun starts to set. This prevents shadows from causing visual confusion or anxiety.

Keep the late afternoon routine quiet and calm. Avoid noisy activities, turn down televisions, and introduce relaxing music. A consistent bedtime routine is also highly effective in settling sundowning behaviors.'
    ],
    [
        'title' => 'Sensory Stimulation Activities for Later Stage Dementia Care',
        'category' => 'Dementia Support',
        'excerpt' => 'Exploring tactile, auditory, and visual sensory activities to bring comfort to advanced dementia patients.',
        'content' => 'When cognitive abilities decline, sensory stimulation becomes a powerful way to engage individuals, promote relaxation, and evoke happy memories. Sensory activities stimulate the senses of touch, sound, sight, and smell.

Tactile activities can include feeling fabric swatches (like velvet or wool), sorting buttons, or playing with soft memory cushions. Auditory triggers, such as classical music, familiar hymns, or nature sounds, are excellent for soothing anxiety.

Aromatherapy, using scents like lavender or orange, can stimulate appetite or promote restful sleep. These simple prompts help maintain connection and comfort without requiring complex cognitive tasks.'
    ],
    [
        'title' => 'Understanding and Managing Mood Changes in Dementia Care',
        'category' => 'Dementia Support',
        'excerpt' => 'A guide for relatives to identify triggers for mood swings and aggression in dementia care.',
        'content' => 'Sudden mood swings, frustration, or aggressive behavior in dementia patients are often forms of non-verbal communication. When an individual cannot express physical discomfort, boredom, or fear verbally, it manifests as frustration.

Always rule out physical triggers first, such as pain, fatigue, hunger, or a urinary tract infection (UTI). UTIs are a leading cause of rapid behavioral changes in seniors.

If the behavior is triggered by frustration with a task, step in gently, validate their feelings, and simplify the activity. Avoid arguing or attempting to correct their reality, as this will escalate anxiety.'
    ],

    // --- Wellbeing (5 posts) ---
    [
        'title' => 'Nutritional Strategies for Older Adults with Low Appetite',
        'category' => 'Wellbeing',
        'excerpt' => 'Healthy, practical ways to encourage nutrition and hydration in seniors with declining appetites.',
        'content' => 'A decline in appetite is common in older adults due to reduced energy expenditures, changes in tastebuds, or medication side effects. However, maintaining adequate nutrition is crucial to prevent muscle wasting and support immune health.

Rather than serving large, overwhelming meals, offer small, nutrient-dense meals and snacks throughout the day. Foods like avocados, full-fat yoghurts, eggs, and nut butters provide high calories and protein in small portions.

Make meals visually appealing and socially engaging. Eating with a matched companion, like a Thrivewell carer, often makes dining a pleasant routine rather than a chore.'
    ],
    [
        'title' => 'Safe Balance and Mobility Exercises for Seniors at Home',
        'category' => 'Wellbeing',
        'excerpt' => 'A selection of simple, safe physical exercises seniors can perform at home to prevent falls.',
        'content' => 'Maintaining balance and leg strength is the most effective way for seniors to prevent falls and preserve their independence. Simple, low-impact exercises can be safely integrated into the daily routine.

Exercises like the sit-to-stand (rising slowly from a sturdy chair without using hands) build thigh and core strength. Single-leg stands (holding onto a counter for support) improve balance and ankle stability.

Carer-assisted exercises ensure safety and compliance. Our team regularly assists clients with their home physiotherapy routines to ensure they stay active and confident in their mobility.'
    ],
    [
        'title' => 'Hydration in Eldercare: Recognizing the Signs of Dehydration in Seniors',
        'category' => 'Wellbeing',
        'excerpt' => 'We outline the risks of dehydration in seniors and how to spot the early warning signs.',
        'content' => 'Dehydration is a significant health risk for older adults. The sensation of thirst naturally declines with age, meaning seniors may be dehydrated without feeling thirsty. Cognitive impairment or mobility limits can also make accessing water difficult.

Early signs of dehydration include dark urine, dry mouth, tiredness, headaches, and sudden confusion. Chronic dehydration can lead to kidney stones, urinary tract infections, and falls due to low blood pressure.

Encourage hydration by placing water jugs in easy reach, offering herbal teas, and serving foods with high water content, like melons, cucumbers, and warm soups.'
    ],
    [
        'title' => 'Promoting Mental Health and Combatting Loneliness in Old Age',
        'category' => 'Wellbeing',
        'excerpt' => 'Simple, high-impact activities to keep seniors socially engaged and combat isolation.',
        'content' => 'Social isolation is a major risk factor for depression and physical decline in older adults. Staying socially connected is just as important for longevity as diet and exercise.

Combat loneliness by helping seniors maintain ties with local community groups, day centers, and lunch clubs. Using simple video call tech can also help them connect with family members who live far away.

Our companionship care packages focus specifically on this need. Having a consistent carer visit regularly to share stories, go for walks, or play board games provides essential mental stimulation.'
    ],
    [
        'title' => 'Sleep Hygiene Tips for Eldercare and Restful Nights',
        'category' => 'Wellbeing',
        'excerpt' => 'Help seniors build a healthy sleep cycle with these practical sleep hygiene practices.',
        'content' => 'Insomnia and fragmented sleep are common complaints in older age. While sleep patterns do change as we grow older, poor sleep hygiene can worsen insomnia and lead to daytime fatigue.

To improve sleep quality, establish a consistent daily schedule for waking up and going to bed. Encourage exposure to natural daylight in the morning to regulate the body\'s internal clock.

Limit daytime naps to 30 minutes, and ensure the bedroom is dark, quiet, and cool. Avoid heavy meals or caffeine before bed, and introduce a warm, caffeine-free herbal drink to help transition to sleep.'
    ],

    // --- Local Resources (5 posts) ---
    [
        'title' => 'A Guide to Senior-Friendly Walking Trails in West Lothian Parks',
        'category' => 'Local Resources',
        'excerpt' => 'We highlight accessible, flat walking paths in West Lothian suitable for seniors with limited mobility.',
        'content' => 'West Lothian is home to beautiful parks and countryside. Staying active outdoors improves mood and mobility. For seniors with limited mobility or wheelchair users, flat, accessible paths are essential.

Beecraigs Country Park offers flat paths around the loch with excellent parking and accessible toilet facilities. Polkemmet Country Park in Whitburn features wide, smooth trails through the woodlands.

Our carers regularly accompany clients on these trails, providing physical support and companionship to ensure a safe, pleasant, and revitalizing day out.'
    ],
    [
        'title' => 'How to Access Dial-a-Bus and Community Transport in Edinburgh',
        'category' => 'Local Resources',
        'excerpt' => 'Everything you need to know about booking dial-a-bus and accessible community transport.',
        'content' => 'For seniors who do not drive and find standard public transport difficult to access, community transport services are a vital link to the community. They provide door-to-door accessible travel.

Services like Edinburgh HcL (Handicabs) Dial-a-Bus operate customized vehicles that can accommodate wheelchairs and walking frames. They transport seniors to local supermarkets, shopping centers, and medical appointments.

To use these services, you must register in advance. Our team can help you with the registration forms and coordinate bookings with the dispatch coordinators.'
    ],
    [
        'title' => 'Local Lunch Clubs and Day Centers in Livingston & Bathgate',
        'category' => 'Local Resources',
        'excerpt' => 'A listing of active senior lunch clubs and social groups in Livingston and Bathgate.',
        'content' => 'Senior lunch clubs are a wonderful way to enjoy a fresh, healthy meal and socialize with other local residents. They are run by volunteers and local charities across West Lothian.

Livingston features weekly lunch clubs at local community halls offering low-cost meals and bingo. Bathgate has several day centers providing social activities, arts and crafts, and gentle exercise classes.

We regularly support clients to attend these clubs, arranging transport, helping them get dressed, and staying with them during the event to ensure they feel safe and fully included.'
    ],
    [
        'title' => 'Dementia Support Groups for Family Caregivers in West Lothian',
        'category' => 'Local Resources',
        'excerpt' => 'A guide to local support groups and carers organizations for family caregivers in West Lothian.',
        'content' => 'Caring for a loved one with dementia is rewarding but can be emotionally and physically demanding. Family caregivers need support, advice, and a safe space to share their experiences.

Organizations like Carers of West Lothian provide free advice, support groups, and counseling for unpaid family carers. They offer peer support meets where you can talk to others in similar situations.

Accessing respite care, even for a few hours a week, is vital to avoid caregiver burnout. Thrivewell provides respite care packages to give family members a regular, reliable break.'
    ],
    [
        'title' => 'Local Memory Cafes and Dementia Support Meets in Edinburgh',
        'category' => 'Local Resources',
        'excerpt' => 'Discover safe, welcoming memory cafes for families living with dementia across Edinburgh.',
        'content' => 'Memory Cafes are safe, welcoming spaces for people living with dementia and their family members. They offer a relaxed environment to enjoy tea, listen to music, and participate in memory games.

Edinburgh has a network of memory cafes running weekly in church halls and community spaces. They provide a vital source of informal support, information, and friendship without any stigma.

Our SSSC-registered carers frequently accompany clients to these cafes, providing support and ensuring they can enjoy these social outings comfortably and safely.'
    ]
];

echo "<h2>Starting Importer...</h2>";

$success_count = 0;
$skipped_count = 0;
$error_count = 0;

foreach ( $articles_to_seed as $art ) {
    // 1. Get or Create Category
    $cat_id = get_cat_ID( $art['category'] );
    if ( $cat_id == 0 ) {
        $cat_id = wp_create_category( $art['category'] );
    }

    // 2. Check if Post Title already exists to avoid duplicate imports
    $existing_post = get_page_by_title( $art['title'], OBJECT, 'post' );
    if ( $existing_post ) {
        echo "<p style='color: orange;'>• Skipped (Exists): {$art['title']}</p>";
        $skipped_count++;
        continue;
    }

    // 3. Insert Post
    $new_post_id = wp_insert_post([
        'post_title'    => $art['title'],
        'post_content'  => $art['content'],
        'post_status'   => 'publish',
        'post_author'   => 1, // Default Admin
        'post_excerpt'  => $art['excerpt'],
        'post_category' => [ $cat_id ]
    ]);

    if ( is_wp_error( $new_post_id ) ) {
        echo "<p style='color: red;'>• Error: Failed to publish {$art['title']}</p>";
        $error_count++;
    } else {
        echo "<p style='color: green;'>• Published: <strong>{$art['title']}</strong> (Category: {$art['category']}, ID: {$new_post_id})</p>";
        $success_count++;
    }
}

echo "<h3>Import Finished!</h3>";
echo "<p>Total Published: <strong>{$success_count}</strong> | Already Existed: <strong>{$skipped_count}</strong> | Failures: <strong>{$error_count}</strong></p>";
echo "<p style='color: green; font-weight: bold;'>You can now go back to Next.js and re-run 'npm run build' or view http://localhost:3000/resources</p>";
?>
