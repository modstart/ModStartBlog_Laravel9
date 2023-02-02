@foreach(\Module\Nav\Util\NavUtil::listByPositionWithCache($position) as $nav)
    @if(empty($nav['_child']))
        <a class="{{modstart_baseurl_active($nav['link'])}}" href="{{$nav['link']}}" {!! \Module\Nav\Type\NavOpenType::getBlankAttributeFromValue($nav) !!}>
            {!! $nav['icon']?'<i class="icon '.htmlspecialchars($nav['icon']).'"></i> ':'' !!}{{$nav['name']}}
        </a>
    @else
        <div class="nav-item">
            <div class="sub-title">
                <a class="{{modstart_baseurl_active($nav['link'])}}" href="{{$nav['link']}}" {!! \Module\Nav\Type\NavOpenType::getBlankAttributeFromValue($nav) !!}>
                    {!! $nav['icon']?'<i class="icon '.htmlspecialchars($nav['icon']).'"></i> ':'' !!}{{$nav['name']}}
                </a>
            </div>
            <div class="sub-nav">
                @foreach($nav['_child'] as $child)
                    <a class="sub-nav-item {{modstart_baseurl_active($child['link'])}}" href="{{$child['link']}}" {!! \Module\Nav\Type\NavOpenType::getBlankAttributeFromValue($child) !!}>
                        {!! $child['icon']?'<i class="icon '.htmlspecialchars($child['icon']).'"></i> ':'' !!}{{$child['name']}}
                    </a>
                @endforeach
            </div>
        </div>
    @endif
@endforeach
