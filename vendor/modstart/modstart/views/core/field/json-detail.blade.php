<div class="line">
    <div class="label">
        @if($tip)
            <a class="ub-text-muted" href="javascript:;" data-tip-popover="{{$tip}}"><i class="iconfont icon-warning"></i></a>
        @endif
        {{$label}}
    </div>
    <div class="field">
        @if(!empty($value))
            <pre style="margin:0;line-height:1rem;overflow:auto;">{{json_encode($value,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE)}}</pre>
        @else
            <span class="ub-text-muted">-</span>
        @endif

    </div>
</div>
